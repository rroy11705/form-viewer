import React, { forwardRef } from 'react';
import { spanMap } from '../../../helper';

const CustomTextArea = forwardRef(
  (
    {
      id = '',
      label = '',
      name = '',
      value = '',
      onChange = () => null,
      onBlur = () => null,
      required = false,
      placeholder = '',
      disabled = false,
      startIcon = null,
      endIcon = null,
      color = null,
      error = '',
      success = '',
      showErrorIcon = false,
      showSuccessIcon = false,
      helperText = '',
      maxLength = null,
      minLength = null,
      span,
    },
    ref,
  ) => {
    return (
      <div className="flex flex-col gap-3 mb-6" style={{ width: spanMap(span) }}>
        {label && (
          <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
            {label}
          </label>
        )}
        <div className="textarea-container">
          {startIcon && <span className="icon start-icon">{startIcon}</span>}
          <textarea
            ref={ref}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            minLength={minLength}
            className={`w-full rounded-md ${error ? ' error' : ''}${success ? ' success' : ''}`}
            aria-invalid={!!error}
            aria-required={required}
          />
          {endIcon && <span className="icon end-icon">{endIcon}</span>}
        </div>
        {helperText && <small>{helperText}</small>}
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        {showErrorIcon && error && <span className="icon error-icon">!</span>}
        {showSuccessIcon && success && <span className="icon success-icon">✓</span>}
      </div>
    );
  },
);

export default CustomTextArea;
