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
  } = props;
  let count = [1, 2, 3, 4];
  return (
    <>
      <div class="flex items-center ps-3 w-full">
        {count.map((value, i) => {
          return (
            <>
              <input
                id={id}
                type="radio"
                value={value}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500 rounded-full"
              />
              <label
                for={id}
                class="w-full py-3 ms-2 text-sm font-medium text-black-900 dark:text-black-300"
              >
                {value}
              </label>
            </>
          );
        })}
      </div>
    </>
  );
};

export default RadioGroup;
