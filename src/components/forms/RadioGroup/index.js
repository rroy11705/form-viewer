import React from 'react';
import { spanMap } from '../../../helper';

const RadioGroup = props => {
  const {
    id,
    value,
    onChange,
    onBlur,
    label,
    options,
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
        }  ps-3 items-start w-full`}
      >
        {options.map((elem, i) => {
          return (
            <>
              <div className={``}>
                <input
                  id={elem?.value}
                  type="radio"
                  value={elem?.value}
                  onChange={onChange}
                  onBlur={onBlur}
                  disabled={disabled}
                  name="list-radio"
                  className={`w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 rounded-full`}
                />
                <label
                  for={elem?.value}
                  class="w-full py-3 ms-2 text-sm font-medium text-black-900"
                >
                  {elem?.text}
                  {required && <span className="text-red-700"> *</span>}
                </label>
              </div>
            </>
          );
        })}
      </div>
      {error && helperText > 0 && (
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default RadioGroup;
