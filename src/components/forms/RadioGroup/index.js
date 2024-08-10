import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Radio from './radio';

const DEFAULT_VALUE = null;

const RadioGroup = ({
  id,
  name,
  value = DEFAULT_VALUE,
  label,
  options,
  required,
  helperText,
  disabled,
  direction = 'row',
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
      setValue(name, '');
    }
  }, [value, setValue, name]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onBlur: defaultOnBlur, onChange: defaultOnChange } }) => (
        <Radio
          id={id}
          name={name}
          value={value}
          label={label}
          options={options}
          required={required}
          error={errors[name]?.message}
          helperText={helperText}
          disabled={disabled}
          direction={direction}
          onBlur={defaultOnBlur}
          onChange={defaultOnChange}
          span={span}
        />
      )}
    />
  );
};

export default RadioGroup;
