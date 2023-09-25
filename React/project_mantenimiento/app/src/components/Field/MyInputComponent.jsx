import React from "react";

export const MyInputComponent = ({type, required, label, name, value, disabled, onChange }) => {

    return (
      <div className="form-group">
        <input
          type={type}
          placeholder={label}
          disabled={disabled}
          className="form-control"
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
        />
        <br />
      </div>
    );
  };