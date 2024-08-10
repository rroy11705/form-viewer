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
    showNoneItem,
    showOtherItem,
    noneText,
    otherText,
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
            <div key={elem.value} className={``}>
              <input
                id={elem.value}
                type="checkbox"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                name="list-radio"
                className={`w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:!ring-none  !ring-none`}
              />
              <label
                htmlFor={elem.value}
                className="w-full py-3 ms-2 text-sm font-medium text-black-900 dark:text-black-300"
              >
                {elem?.text}
              </label>
            </div>
          );
        })}
        {showOtherItem && (
          <div className={``}>
            <input
              id="other"
              type="checkbox"
              value="other"
              onChange={onChange}
              onBlur={onBlur}
              disabled={disabled}
              name="list-radio"
              className={`w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:!ring-none !ring-none`}
            />
            <label
              htmlFor="other"
              className="w-full py-3 ms-2 text-sm font-medium text-black-900 dark:text-black-300"
            >
              {otherText}
            </label>
          </div>
        )}
        {showNoneItem && (
          <div className={``}>
            <input
              id="none"
              type="checkbox"
              value="none"
              onChange={onChange}
              onBlur={onBlur}
              disabled={disabled}
              name="list-radio"
              className={`w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:!ring-none  !ring-none`}
            />
            <label
              htmlFor="none"
              className="w-full py-3 ms-2 text-sm font-medium text-black-900 dark:text-black-300"
            >
              {noneText}
            </label>
          </div>
        )}
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
