import React from "react";
import "./input.style.scss";

const Input = ({ field, handleChange }) => {
  return (
    <div className="input-group">
      <label>
        {field.name} {field.required ? null : "(Optional)"}{" "}
      </label>
      {field.error ? <span className="error-msg">REQUIRED</span> : null}
      <input
        name={field.name}
        onChange={handleChange}
        className={`form-input
        ${field.value.length > 0 ? "filled" : null}
        ${field.error > 0 ? "error" : null}
        `}
        type="text"
      />
    </div>
  );
};

export default Input;
