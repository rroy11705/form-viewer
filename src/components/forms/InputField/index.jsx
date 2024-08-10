import React, { useEffect, forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import InputField from './input';

const DEFAULT_VALUE = '';

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
        <InputField
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
