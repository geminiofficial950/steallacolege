"use client";

import { Modal } from "react-bootstrap";

interface StudentSupportFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StudentSupportForm({ isOpen, onClose }: StudentSupportFormProps) {
  return (
    <>
      <Modal
        show={isOpen}
        onHide={onClose}
        aria-labelledby="google-form-modal"
        dialogClassName="custom-modal-width"
        contentClassName="custom-modal-content"
        centered={false}
        className = "mt-4"
        scrollable={false}
      >
        <Modal.Header closeButton style={{ background: "#161439", color: "#fff", flexShrink: 0 }} >
          <Modal.Title id="google-form-modal" style={{ color: "#fff" }}>
            Student Support Form
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-0" style={{ flex: 1, overflow: "auto" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeCYq_v25mr9sLUEBb0K2syB1HLLgtyFgLMEAL40OmfttJSTQ/viewform?embedded=true"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
          />
        </Modal.Body>
      </Modal>

      <style jsx global>{`
        /* ── DESKTOP ── */
        .custom-modal-width {
          max-width: 900px !important;
          width: 95% !important;
          /* sit just below the fixed header */
          margin: 110px auto 16px auto !important;
        }

        .custom-modal-content {
          /* fill from just below header to bottom of viewport */
          height: calc(100vh - 126px) !important;
          display: flex !important;
          flex-direction: column !important;
          overflow: hidden !important;
        }

        .custom-modal-content .modal-body {
          flex: 1 1 auto !important;
          /* allow scrolling inside the modal body so the iframe content
             can be reached on both desktop and mobile */
          overflow: auto !important;
          padding: 0 !important;
        }

        .custom-modal-content .modal-body iframe {
          width: 100% !important;
          height: 100% !important;
        }

        /* Fix close button colour on dark header */
        .custom-modal-content .btn-close {
          filter: invert(1) grayscale(100%) brightness(200%);
        }

        /* Allow modal container to scroll if needed (prevents clipping) */
        .modal {
          overflow: auto !important;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .custom-modal-width {
            max-width: 100% !important;
            width: 100% !important;
            /* sit below the mobile header (~80 px) */
            margin: 80px 0 0 0 !important;
          }

          .custom-modal-content {
            /* fill exactly the remaining viewport */
            height: calc(100vh - 80px) !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </>
  );
}