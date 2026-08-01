"use client";

import { useState, useEffect } from "react";

interface Credential {
  found?: boolean;
  id: string;
  name: string;
  course: string;
  issued: string;
  expiry?: string;
  email?: string;
  about?: string;
  type?: string;
  issuer?: string;
}

interface ApiError {
  error: true;
}

type ApiResponse = Credential | ApiError;

// CONFIG
const HARDCODED_SHEETS_URL = "";

function getSheetsUrl(): string {
  if (HARDCODED_SHEETS_URL) return HARDCODED_SHEETS_URL;
  if (typeof window !== "undefined") {
    const settings = JSON.parse(localStorage.getItem("sc_settings") || "{}");
    return settings.sheetsUrl || "";
  }
  return "";
}

export default function VerifyPage() {
  const [vid, setVid] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [toast, setToast] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id) {
      const upper = id.toUpperCase();
      setVid(upper);
      doVerify(upper);
    }
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  }

  async function doVerify(value?: string) {
    const q = (value || vid).trim().toUpperCase();
    if (!q) return showToast("Please enter a credential ID");

    setResult(null);
    setLoading(true);

    const sheetsUrl = getSheetsUrl();
    let cred: Credential | null = null;
    let source: "sheets" | "local" | null = null;

    if (sheetsUrl) {
      try {
        const res = await fetch(
          `${sheetsUrl}?action=lookup&id=${encodeURIComponent(q)}`
        );
        if (res.ok) {
          const data = await res.json();
          if (data.status === "found") {
            cred = { ...data.credential, found: true };
            source = "sheets";
          } else {
            source = "sheets";
          }
        }
      } catch {
        source = null;
      }
    }

    if (source === null) {
      const localCreds =
        JSON.parse(localStorage.getItem("sc_creds") || "[]") || [];
      const match = localCreds.find((c: any) => c.id === q);
      if (match) {
        cred = {
          id: match.id,
          name: match.name,
          course: match.course,
          email: match.email,
          issued: match.date,
          expiry: match.expiry || "",
          about: match.about || "",
          issuer: match.issuer || "Stella College",
          type: match.type || "certificate",
          found: true,
        };
        source = "local";
      }
    }

    setLoading(false);

    if (!cred) return setResult({ error: true });
    setResult(cred);
  }

  return (
    <div className="min-vh-100 ">
      <main className="container py-5" style={{ maxWidth: "750px" }}>
        
        {/* SEARCH BOX */}
        <div className="bg-white border rounded-4 p-4 text-center shadow-sm mb-4">
          <div className="fs-2">🔍</div>
          <h3 className="fw-bold">Verify a credential</h3>
          <p className="text-secondary">
            Enter a Stella College credential ID to confirm it is authentic
          </p>

          <div className="d-flex gap-2 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="SC-260501-XXXXXX"
              value={vid}
              onChange={(e) => setVid(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === "Enter" && doVerify()}
            />
            <button
              className="btn btn-primary px-4"
              disabled={loading}
              onClick={() => doVerify()}
            >
              {loading ? "Checking…" : "Verify"}
            </button>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="text-center py-5 text-muted">
            <div className="spinner-border mb-3"></div>
            <div>Checking credential registry…</div>
          </div>
        )}

        {/* RESULT BLOCK */}
        {!loading && result && (
          <>
            {"error" in result || !result.found ? (
              <div className="bg-white border rounded-4 p-4 text-center shadow-sm">
                <div className="fs-1 opacity-50">❓</div>
                <h4 className="fw-bold">Not Found</h4>
                <p className="text-secondary">
                  No credential matching ID <strong>{vid}</strong> was found.
                </p>
              </div>
            ) : (
              <>
                {/* HEADER CARD */}
                <div
                  className="rounded-4 text-white mb-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #0d1b52, #14266b 80%)",
                    padding: "40px 30px",
                  }}
                >
                  <div className="text-center">
                    <div
                      className="mx-auto rounded-circle mb-3"
                      style={{
                        width: 90,
                        height: 90,
                        background: "#ffc876",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "40px",
                      }}
                    >
                      🎖️
                    </div>
                    <h2 className="fw-bold mb-1 text-white">{result.name}</h2>
                    <p className="opacity-75 fs-5 mb-1 text-white fst-italic">{result.course}</p>
                    <div className="small opacity-75 text-warning">★ STELLA COLLEGE</div>
                  </div>
                </div>

                {/* VERIFIED BADGE */}
                <div className="bg-white border rounded-bottom-4 p-4 shadow-sm">
                  <div className="alert alert-success d-flex align-items-center gap-2 mb-3">
                    <span className="fs-4">✔</span>
                    <div>
                      <strong>Verified — authentic Stella College credential</strong>
                      <br />
                      Issued {result.issued} and currently valid
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="alert alert-warning py-2 small mb-4">
                    Verified from local cache — configure Sheets for full verification
                  </div>

                  {/* DETAILS TABLE */}
                  <table className="table mb-4">
                    <tbody>
                      <tr>
                        <th>Recipient</th>
                        <td>{result.name}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{result.email || "—"}</td>
                      </tr>
                      <tr>
                        <th>Course</th>
                        <td>{result.course}</td>
                      </tr>
                      <tr>
                        <th>Type</th>
                        <td>
                          <span className="badge bg-secondary">
                            {result.type || "certificate"}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>Issue date</th>
                        <td>{result.issued}</td>
                      </tr>
                      <tr>
                        <th>Expiry date</th>
                        <td>{result.expiry || "Invalid Date"}</td>
                      </tr>
                      <tr>
                        <th>About</th>
                        <td>{result.about || "—"}</td>
                      </tr>
                      <tr>
                        <th>Issued by</th>
                        <td>{result.issuer || "Stella College"}</td>
                      </tr>
                      <tr>
                        <th>Credential ID</th>
                        <td>{result.id}</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* BUTTONS */}
                  <div className="d-flex gap-3">
                   <a
  className="btn btn-primary flex-grow-1"
  target="_blank"
  rel="noopener noreferrer"
  href={`https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME
    &name=${encodeURIComponent(result.course)}
    &organizationName=${encodeURIComponent("Stella College")}
    &issueYear=${new Date(result.issued).getFullYear()}
    &issueMonth=${new Date(result.issued).getMonth() + 1}
    &certId=${encodeURIComponent(result.id)}
    &certUrl=${encodeURIComponent(window.location.href)}
  `}
>
  Add to LinkedIn Profile
</a>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        navigator.clipboard.writeText(result.id);
                        showToast("Copied!");
                      }}
                    >
                      Copy link
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </main>

      {toast && (
        <div
          className="position-fixed bottom-0 end-0 m-4 bg-dark text-white p-2 rounded shadow"
          style={{ zIndex: 9999 }}
        >
          {toast}
        </div>
      )}

      <footer className="text-center text-secondary small mt-4 border-top py-3">
        Stella College · Credential Portal · Public Verification Access
      </footer>
    </div>
  );
}