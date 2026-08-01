"use client";

import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  type: "trainer" | "admin" | "form";
}

const CalendarModal = ({ open, onClose, type }: Props) => {
  if (!open) return null;

  let content;

 if (type === "trainer") {
  content = (
    <iframe
      src="https://calendar.google.com/calendar/appointments/AcZssZ2syOrC1f_S9va3LH-CRib_PdOLyQnugRWNsdE=?gv=true"
      width="100%"
      height="600"
      style={{ border: 0 }}
    />
  );
}


  if (type === "admin") {
    content = (
      <iframe
        src="https://calendar.google.com/calendar/appointments/AcZssZ2CbFggkupDvNeXadfeydMnxbSfgZC4VUB-BE4=?gv=true"
        width="100%"
        height="600"
        style={{ border: 0 }}
      />
    );
  }

  if (type === "form") {
    content = (
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeCYq_v25mr9sLUEBb0K2syB1HLLgtyFgLMEAL40OmfttJSTQ/viewform?embedded=true"
        width="100%"
        height="600"
        style={{ border: 0 }}
      />
    );
  }

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeBtn}>
          ✕
        </button>
        {content}
      </div>
    </div>
  );
};

export default CalendarModal;

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99999,
};

const modalStyle: React.CSSProperties = {
  background: "#fff",
  width: "80%",
  maxWidth: "900px",
  height: "80%",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
};

const closeBtn: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "15px",
  fontSize: "20px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
};
