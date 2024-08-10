import React, { useEffect } from 'react';
import { spanMap } from '../../../helper';
import { Controller, useFormContext } from 'react-hook-form';

const DEFAULT_VALUE = null;

const RadioGroup = ({
  id,
  name,
  value = DEFAULT_VALUE,
  label,
  options,
  required,
  error,
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
      render={({ field: { ref, value, onBlur: defaultOnBlur, onChange: defaultOnChange } }) => {
        console.log('value', value);
        return (
          <div
            className="flex flex-col justify-center gap-3 mb-6 h-10"
            style={{ width: spanMap(span) }}
          >
            {label && (
              <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
                {label}
                {required && <span className="text-red-700"> *</span>}
              </label>
            )}
            <div
              className={`flex ${
                direction === 'row' ? 'flex-row gap-3' : 'flex-col'
              }  ps-3 items-start w-full`}
            >
              {options.map((elem, i) => {
                return (
                  <div key={elem.value} className={``}>
                    <input
                      id={elem?.value}
                      type="radio"
                      value={elem?.value}
                      onChange={defaultOnBlur}
                      onBlur={defaultOnChange}
                      disabled={disabled}
                      name={name}
                      className={`w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 rounded-full`}
                    />
                    <label
                      htmlFor={elem?.value}
                      className="w-full py-3 ms-2 text-sm font-medium text-black-900"
                    >
                      {elem?.text}
                      {required && <span className="text-red-700"> *</span>}
                    </label>
                  </div>
                );
              })}
            </div>
            {error && helperText > 0 && (
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                {helperText}
              </p>
            )}
          </div>
        );
      }}
    />
  );
};

export default RadioGroup;
