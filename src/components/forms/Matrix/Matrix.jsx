import React, { useEffect } from 'react';
import Radio from '../RadioGroup/radio';
import { spanMap } from '../../../helper';

const SimpleMatrix = ({ id, type, required, columns, isAllRowRequired, name, rows, label }) => {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="pb-4 pt-7 px-3">
        <p>{label}</p>
      </div>
      <hr />
      <div className="px-3 flex flex-row w-full">
        <p className="w-1/3"></p>
        {columns?.map((col, i) => (
          <div key={i} className="flex flex-row w-3/12 items-center px-[7px]">
            <p style={{ width: spanMap('1/12') }}>{col}</p>
          </div>
        ))}
      </div>
      <div className="px-3">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-row w-full">
            <p className="w-1/3">{row}</p>
            {columns?.map((opt, i) => {
              return (
                <div key={i} className="flex flex-row w-3/12 items-center">
                  <Radio
                    direction={'row'}
                    options={[{ value: opt, text: '' }]}
                    name={row}
                    span={'1/12'}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleMatrix;
