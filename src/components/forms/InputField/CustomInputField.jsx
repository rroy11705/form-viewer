import React, { forwardRef, useState } from 'react';
// import './TextField.css'; // Assuming we have a CSS file for styling

/**
 * Custom TextField component
 *
 * @param {string} id - The `id` of the text input element.
 * @param {string} type - The `type` of the input, e.g., 'text', 'email', 'password'.
 * @param {string} label - The `label` for the text input element.
 * @param {string} name - The `name` of the text input element.
 * @param {string} value - The `value` of the text input element.
 * @param {function} onChange - The function that is triggered when the input value changes.
 * @param {function} onBlur - The function that is triggered when the input element loses focus.
 * @param {boolean} required - Whether the input is required.
 * @param {string} placeholder - The placeholder text for the input element.
 * @param {boolean} disabled - Whether the input is disabled.
 * @param {Element} startIcon - An icon element shown at the beginning of the input.
 * @param {Element} endIcon - An icon element shown at the end of the input.
 * @param {string} color - The color theme for the input element.
 * @param {string} error - An error message displayed if validation fails.
 * @param {string} success - A success message displayed if validation passes.
 * @param {boolean} showErrorIcon - Whether to show an error icon.
 * @param {boolean} showSuccessIcon - Whether to show a success icon.
 * @param {string} helperText - Additional helper text displayed below the input.
 * @param {string} iconInfo - Tooltip text shown when hovering over the icon.
 * @param {number} maxLength - Maximum length of the input value.
 * @param {number} minLength - Minimum length of the input value.
 * @param {function} onKeyPress - Function triggered on key press.
 * @param {boolean} autoFocus - Whether the input should be focused automatically.
 * @param {string} pattern - Regex pattern for validation.
 * @param {boolean} readOnly - Whether the input is read-only.
 * @returns {JSX.Element} The rendered text input element.
 */

const CustomInputField = forwardRef(
  (
    {
      id,
      type = 'text',
      label,
      name,
      value,
      onChange,
      onBlur,
      required,
      placeholder,
      disabled,
      startIcon,
      endIcon,
      color,
      error,
      success,
      showErrorIcon,
      showSuccessIcon,
      helperText,
      iconInfo,
      maxLength,
      minLength,
      onKeyDown,
      autoFocus,
      pattern,
      readOnly,
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState(value || '');

    // Handle input change
    const handleChange = e => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange && onChange(e);
    };

    return (
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        {label && (
          <label htmlFor={id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
          </label>
        )}
        <div className={`custom-textfield-wrapper${disabled ? ' disabled' : ''}`}>
          {startIcon && (
            <span className="start-icon" title={iconInfo}>
              {startIcon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            type={type}
            name={name}
            value={inputValue}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            minLength={minLength}
            onChange={handleChange}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            autoFocus={autoFocus}
            pattern={pattern}
            readOnly={readOnly}
            className={`custom-textfield-input${error ? ' error' : ''}${success ? ' success' : ''}`}
          />
          {endIcon && (
            <span className="end-icon" title={iconInfo}>
              {endIcon}
            </span>
          )}
        </div>
        {(error || success || helperText) && (
          <div className="custom-textfield-helper">
            {showErrorIcon && error && <span className="icon-error">⚠️</span>}
            {showSuccessIcon && success && <span className="icon-success">✔️</span>}
            {error ? <span className="text-error">{error}</span> : null}
            {success ? <span className="text-success">{success}</span> : null}
            {helperText ? <span className="helper-text">{helperText}</span> : null}
          </div>
        )}
      </div>
    );
  },
);

export default CustomInputField;
