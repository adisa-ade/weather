import React, { useState } from "react";
import Modal from "./Modal";

export default function DayPickerModal({ days = [], onSelectDay, isOpen, onClose }) {    
  if (!days.length) return null;  
  if (!isOpen) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {days.map((d) => (
        <Modal.Option
          key={d}         
          onClick={() => onSelectDay(d)}
        >          
          {d}
        </Modal.Option>
      ))}
    </Modal>
  );
}
