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
  } = props;

  return (
    <>
      <div class="flex items-center">
        <input
          unchecked
          id={id}
          type="checkbox"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          class="w-4 h-4 text-blue-600 bg-gray-100 border-black-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for={id} class="ms-2 text-sm font-medium text-black-900 dark:text-black-300">
          Checked state
        </label>
      </div>
    </>
  );
};

export default CheckBox;
