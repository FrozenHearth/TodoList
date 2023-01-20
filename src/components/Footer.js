import React from "react";
import "../styles/footer.css";

export const Footer = ({ remaining, activeTodo, updateTodoToShow }) => {
  const filterOptions = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "complete", label: "Completed" }
  ];

  return (
    <footer className="footer-container">
      <p className="todos-count">
        {remaining !== 1 ? `${remaining} items left` : `${remaining} item left`}
      </p>
      <ul className="filters">
        {filterOptions.map(({ name, label }, index) => (
          <li
            key={index}
            className={`${name}-btn ${
              activeTodo === name ? "active-btn-border" : ""
            }`}
            onClick={() => updateTodoToShow(name, name)}
          >
            {label}
          </li>
        ))}
      </ul>
    </footer>
  );
};



