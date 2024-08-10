import React from 'react';
import { spanMap } from '../../../helper';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const DateInput = ({
  id,
  label,
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
          className={`w-full p-2 rounded-md ${error ? ' error' : ''}${success ? ' success' : ''}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          autoFocus={autoFocus}
          disabled={disabled}
          maxDate={maxDate}
          minDate={minDate}
          required={required}
        />
      </div>
    </div>
  );
};

export default DateInput;
