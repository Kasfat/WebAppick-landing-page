import React from "react";

function SiteButton({ text, styleClass,icon , onClick }) {
  return (
    <button className={`main-btn ${styleClass}`} onClick={onClick}>
      {text}
      {icon && (
        <span>
          <img src={icon} alt=" button icon" />
        </span>
      )}
    </button>
  );
}

export default SiteButton;
