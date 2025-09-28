import React from "react";
function Modal({ children }) {
  return <div className="modal">{children}</div>;
}

function Section({ children }) {
  return <div className={`section-title`}>{children}</div>;
}

function Option({ children, selected, onClick }) {
  return (
    <div
      className={`option ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

Modal.Section = Section;
Modal.Option = Option;

export default Modal;
