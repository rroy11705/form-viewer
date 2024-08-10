import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CustomTextArea from './CustomTextArea';

const DEFAULT_VALUE = '';

/**
 * Custom Textarea field with form control.
 *
 * @param {string} id - The `id` of the `textarea` element.
 * @param {string} selectHeight - The `height` of the `textarea` element (optional).
 * @param {string} label - The `label` of the `textarea` element.
 * @param {string} name - The `name` of the `textarea` element.
 * @param {string} value - The `value` of the `textarea` element.
 * @param {function} onChange - The function that is triggered when there is a change in the `textarea` element.
 * @param {function} onBlur - The function that is triggered when the `textarea` element is blurred.
 * @param {boolean} required - If `required` is true, the `textarea` element will require a value and an asterisk will be shown after the label.
 * @param {string} placeholder - The short hint displayed in the `textarea` before the user enters a value.
 * @param {boolean} disabled - If `disabled` is true, the `textarea` element will be disabled.
 * @param {Element} startIcon - The icon that is shown at the beginning or left end of the `textarea` element.
 * @param {Element} endIcon - The icon that is shown at the right end of the `textarea` element.
 * @param {string} color - The `color` for the `textarea` element.
 * @param {string} error - If `error` message is present, it will show an error message at the bottom of the `textarea` element and the border of the `textarea` element will be of error color.
 * @param {string} success - If `success` message is present, it will show a success message at the bottom of the `textarea` element and the border of the `textarea` element will be of success color.
 * @param {boolean} showErrorIcon - If `showErrorIcon` is true, it will show an error icon at the right end of the `textarea` element.
 * @param {boolean} showSuccessIcon - If `showSuccessIcon` is true, it will show a success icon at the right end of the `textarea` element.
 * @param {string} helperText - Any text that we want to show at the bottom of the `textarea` element, as a description.
 * @param {number} maxLength - The maximum number of characters allowed in the `textarea` element.
 * @param {number} minLength - The minimum number of characters required in the `textarea` element.
 * @returns {Element} The `textarea` element wrapped with a form controller.
 */

const TextArea = ({
  id = '',
  selectHeight = null,
  label = '',
  name = '',
  value = DEFAULT_VALUE,
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
}) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (value && value !== DEFAULT_VALUE) {
      setValue(name, value);
    } else if (value === DEFAULT_VALUE) {
      setValue(name, undefined);
    }
  }, [value, setValue, name]);

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field: { ref, value, onBlur: defaultOnBlur, onChange: defaultOnChange } }) => (
        <CustomTextArea
          ref={ref}
          id={id}
          name={name}
          value={value}
          label={label}
          onChange={e => {
            defaultOnChange(e);
            onChange && onChange(e);
          }}
          onBlur={e => {
            defaultOnBlur(e);
            onBlur && onBlur(e);
          }}
          error={errors[name]?.message || error} // Pass the error message to the Textarea component
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
          color={color}
          success={success}
          showErrorIcon={showErrorIcon}
          showSuccessIcon={showSuccessIcon}
          helperText={helperText}
          maxLength={maxLength}
          minLength={minLength}
          span={span}
        />
      )}
    />
  );
};

export default TextArea;
