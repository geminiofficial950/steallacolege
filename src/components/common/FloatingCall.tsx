import { FiPhone } from "react-icons/fi";

// Floating call button shown on every page; tapping it dials the toll-free number
// (styles in globals.css → .floating-call)
const FloatingCall = () => {
  return (
    <a href="tel:1800069877" className="floating-call" aria-label="Call Stella College toll free on 1800 069 877">
      <span className="floating-call__pulse" aria-hidden="true" />
      <FiPhone className="floating-call__icon" aria-hidden="true" />
    </a>
  );
};

export default FloatingCall;
