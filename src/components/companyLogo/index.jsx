import React from "react";

function CompanyLogo({ text, styleClass, spanText }) {
  return (
    <div>
      <h1 className={`${styleClass}`}>
        {text}
        <span>{spanText}</span>
      </h1>
    </div>
  );
}

export default CompanyLogo;
