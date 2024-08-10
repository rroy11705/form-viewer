import React from 'react';

const CheckBox = props => {
  const {
    id,
    value,
    onChange,
    onBlur,
    label,
    required,
    error,
    helpereText,
    disabled,
    placeholder,
    onPaste,
    direction,
  } = props;

  return (
    <>
      <div
        className={`${direction === 'row' ? 'flex gap-3' : 'block p-3 '}  ps-3 items-center w-full`}
      >
        {label.map((elem, i) => {
          return (
            <>
              <div classNameName={``}>
                <input
                  id={id}
                  type="checkbox"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  disabled={disabled}
                  name="list-radio"
                  classNameName={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                />
                <label
                  for={id}
                  className="w-full py-3 ms-2 text-sm font-medium text-black-900 dark:text-black-300"
                >
                  {elem}
                  {required && <span className="text-red-700"> *</span>}
                </label>
              </div>
            </>
          );
        })}
      </div>
      {helpereText.length > 0 && (
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {helpereText}
        </p>
      )}
    </>
  );
};

export default CheckBox;
