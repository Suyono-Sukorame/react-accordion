import React from "react";
import "./Accordion.css";

const AccordionItem = ({ id, title, content, openItem, handleItemClick }) => {
  const isOpen = openItem === id;

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => handleItemClick(id)}>
        <h3>{`${id}. ${title}`}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{`${id}. ${content}`}</div>}
    </div>
  );
};

export default AccordionItem;
