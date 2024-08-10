import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import SimpleMatrix from './Matrix';

/**
 * Controller for the Matrix component.
 *
 * @param {string} id - Unique identifier for the matrix.
 * @param {string} type - The type of the matrix.
 * @param {string} name - The name of the matrix for form control.
 * @param {string} label - The label or title of the matrix.
 * @param {Array<string>} columns - The column headers of the matrix.
 * @param {Array<string>} rows - The row labels of the matrix.
 * @param {boolean} isAllRowRequired - If true, all rows are required.
 * @param {boolean} required - If true, the matrix is required.
 * @param {boolean} disabled - If true, the matrix is disabled.
 * @param {function} onChange - Function called on value change.
 * @param {function} onBlur - Function called when the matrix loses focus.
 * @returns {JSX.Element}
 */

const Matrix = ({
  id,
  type,
  name,
  label,
  columns = [],
  rows = [],
  isAllRowRequired = false,
  required = false,
  disabled = false,
  onChange = () => {},
  onBlur = () => {},
}) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setValue(name, []);
  }, [name, setValue]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange: defaultOnChange, onBlur: defaultOnBlur, value } }) => (
        <SimpleMatrix
          id={id}
          type={type}
          name={name}
          label={label}
          columns={columns}
          rows={rows}
          isAllRowRequired={isAllRowRequired}
          required={required}
          disabled={disabled}
          onChange={e => {
            defaultOnChange(e);
            onChange(e);
          }}
          onBlur={e => {
            defaultOnBlur(e);
            onBlur(e);
          }}
          error={errors[name]?.message}
        />
      )}
    />
  );
};

export default Matrix;
