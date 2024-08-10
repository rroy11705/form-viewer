import React, { useEffect, forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CustomInputField from './CustomInputField';

const DEFAULT_VALUE = '';

/**
 * Custom TextField integrated with React Hook Form.
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
 * @param {function} onKeyDown - Function triggered on key press.
 * @param {boolean} autoFocus - Whether the input should be focused automatically.
 * @param {string} pattern - Regex pattern for validation.
 * @param {boolean} readOnly - Whether the input is read-only.
 * @returns {JSX.Element} The rendered text input element.
 */

const TextField = (
  {
    id,
    type = 'text',
    label,
    name,
    value = DEFAULT_VALUE,
    onChange,
    onBlur,
    required,
    placeholder,
    disabled,
    startIcon,
    endIcon,
    color,
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
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (value && value !== DEFAULT_VALUE) {
      setValue(name, value);
    } else if (value === DEFAULT_VALUE) {
      setValue(name, '');
    }
  }, [value, setValue, name]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, value, onBlur: defaultOnBlur, onChange: defaultOnChange } }) => (
        <CustomInputField
          ref={ref}
          id={id}
          type={type}
          label={label}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
          color={color}
          error={errors[name]?.message}
          success={success}
          showErrorIcon={showErrorIcon}
          showSuccessIcon={showSuccessIcon}
          helperText={helperText}
          iconInfo={iconInfo}
          maxLength={maxLength}
          minLength={minLength}
          onKeyDown={onKeyDown}
          autoFocus={autoFocus}
          pattern={pattern}
          readOnly={readOnly}
          onChange={e => {
            defaultOnChange(e);
            onChange && onChange(e);
          }}
          onBlur={e => {
            defaultOnBlur(e);
            onBlur && onBlur(e);
          }}
        />
      )}
    />
  );
};

export default forwardRef(TextField);
