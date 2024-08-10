import React, { useMemo } from 'react';
import { renderElement } from '../../../helper';

const FormContent = ({ model, page }) => {
  const pageDetails = useMemo(() => model?.pages?.at(page) ?? null, [model, page]);

  return (
    <div className="relative w-full bg-gray-100 overflow-y-auto">
      <div
        className="p-4 w-full"
        style={{
          maxWidth: model.widthMode === 'static' ? model.width : '100%',
          margin: '0 auto',
        }}
      >
        <div>{pageDetails?.title}</div>
        <div className="flex flex-col gap-3">
          {pageDetails?.elements.map(element => renderElement(element))}
        </div>
      </div>
    </div>
  );
};

export default FormContent;
