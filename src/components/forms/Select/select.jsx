import React, { useState, useEffect, useRef } from 'react';
// import './style.css';

const Select = React.forwardRef(
  (
    {
      id,
      label,
      name,
      value,
      options = [],
      onChange,
      onBlur,
      required,
      placeholder,
      disabled,
      color,
      error,
      success,
      showErrorIcon,
      showSuccessIcon,
      helperText,
    },
    ref,
  ) => {
    // Handle select change
    const handleSelectChange = optionValue => {
      onChange && onChange({ target: { name, value: optionValue } });
    };

    return (
      <div className="custom-select-container" style={{ color }}>
        {label && (
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {label}
            {required && <span className="text-red-700"> *</span>}
          </label>
        )}
        <select
          className="flex flex-row justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
        >
          {options.map((option, index) => (
            <option
              key={index}
              className="custom-select-option"
              onClick={() => handleSelectChange(option.value)}
            >
              {option.text}
            </option>
          ))}
        </select>

        {showErrorIcon && error && <span className="error-icon">!</span>}
        {showSuccessIcon && success && <span className="success-icon">✔</span>}
        <div className="helper-text" style={{ color: error ? 'red' : 'inherit' }}>
          {error || helperText}
        </div>
      </div>
    );
  },
);

export default Select;
