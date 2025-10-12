import React, { useEffect, useRef } from "react";

function Modal({ children, isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {      
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose?.(); 
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal" ref={modalRef}>
      {children}
    </div>
  );
}

function Section({ children }) {
  return <div className="section-title">{children}</div>;
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
