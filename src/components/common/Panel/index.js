import React from 'react';
import { renderElement } from '../../../helper';

const Panel = ({ element, children }) => {
  return (
    <div className="w-full border border-solid border-gray-500 rounded-md">
      {element.title && (
        <div className="w-full border-b border-solid border-gray-500">
          <p className="p-4">{element.title}</p>
        </div>
      )}
      <div className="w-full p-4 flex flex-row flex-wrap gap-3">
        {element?.elements?.map(detail => renderElement(detail))}
      </div>
    </div>
  );
};

export default Panel;
