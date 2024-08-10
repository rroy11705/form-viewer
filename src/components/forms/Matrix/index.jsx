import React from 'react';
import RadioGroup from '../RadioGroup';
// {
//   "type": "matrix",
//   "columns": ["No", "Yes"],
//   "isAllRowRequired": true,
//   "name": "performingActivities",
//   "rows": ["Eating", "Bathing", "Dressing", "Walking", "Using Toilet", "Housekeeping"],
//   "title": "Do you have difficulty performing these activities by YOURSELF?"
// },
const Matrix = ({ columns, isAllRowRequired, name, rows, title }) => {
  const options = columns.map(column => {
    return {
      value: column,
      text: column.charAt(0).toUpperCase() + column.slice(1),
    };
  });

  return (
    <div className="flex flex-col w-full gap-3">
      <p>{title}</p>
      <div>
        {rows.map((row, i) => (
          <div key={i} className="flex flex-row w-full">
            <p className="w-1/3">{row}</p>
            <RadioGroup id={row} direction={'row'} options={options} name={row} span={`6/12`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matrix;
