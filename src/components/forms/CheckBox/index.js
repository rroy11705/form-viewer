import React from 'react';
import { spanMap } from '../../../helper';

const CheckBox = props => {
  const {
    id,
    options,
    value,
    onChange,
    onBlur,
    label,
    required,
    error,
    helperText,
    disabled,
    direction = 'row',
    span,
  } = props;

  return (
    <div className="flex flex-col gap-3 mb-6" style={{ width: spanMap(span) }}>
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
          {label}
          {required && <span className="text-red-700"> *</span>}
        </label>
      )}
      <div
        className={`flex ${
          direction === 'row' ? 'flex-row gap-3' : 'flex-col'
        }  ps-3 items-center w-full`}
      >
        {options?.map((elem, i) => {
          return (
            <>
              <div classNameName={``}>
                <input
                  id={elem.value}
                  type="checkbox"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  disabled={disabled}
                  name="list-radio"
                  classNameName={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                />
                <label
                  for={elem.value}
                  className="w-full py-3 ms-2 text-sm font-medium text-black-900 dark:text-black-300"
                >
                  {elem?.text}
                </label>
              </div>
            </>
          );
        })}
      </div>
      {error && helperText && (
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default CheckBox;
