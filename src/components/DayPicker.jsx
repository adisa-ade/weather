import React, { useState } from "react";
import Modal from "./Modal";

export default function DayPickerModal({ days = [], onSelectDay }) {    
  if (!days.length) return null;  
  return (
    <Modal>
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
