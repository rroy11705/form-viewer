import React, { useEffect } from 'react';
import { spanMap } from '../../../helper';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { Controller, useFormContext } from 'react-hook-form';

const DEFAULT_VALUE = '';

const DateInput = ({
  id,
  label,
  name,
  value,
  error,
  autoFocus,
  success,
  onChange,
  span,
  placeholder,
  disabled,
  maxDate,
  minDate,
  required,
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
      render={({ field: { ref, value, onBlur: defaultOnBlur, onChange: defaultOnChange } }) => {
        return (
          <div className="flex flex-col gap-3 mb-6" style={{ width: spanMap(span) }}>
            {label && (
              <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
                {label}
              </label>
            )}
            <div className="relative">
              <input
                id="datepicker"
                aria-label="Date"
                type="date"
                className={`w-full p-2 rounded-md ${error ? ' error' : ''}${
                  success ? ' success' : ''
                }`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                autoFocus={autoFocus}
                disabled={disabled}
                required={required}
                errors={errors}
              />
            </div>
          </div>
        );
      }}
    />
  );
};

export default DateInput;
