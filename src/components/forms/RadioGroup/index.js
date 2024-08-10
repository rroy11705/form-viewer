import React from 'react';

const RadioGroup = props => {
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
              <div className={``}>
                <input
                  id={id}
                  type="radio"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  disabled={disabled}
                  name="list-radio"
                  className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500 rounded-full`}
                />
                <label
                  for={id}
                  class="w-full py-3 ms-2 text-sm font-medium text-black-900 dark:text-black-300"
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

export default RadioGroup;
