import React, { useState } from 'react';
import FormHeader from '../FormHeader';
import FormSidebar from '../FormSidebar';
import FormContent from '../FormContent';
import FormStepper from '../FormStepper';

const FormViewer = ({ model = null }) => {
  const [page, setPage] = useState(0);

  const handleChangePage = p => {
    setPage(p);
  };

  if (model)
    return (
      <div className="w-full h-full">
        <FormHeader title={model.title} />
        <div
          className={`w-full h-[calc(100%_-_48px)] flex ${
            model.showProgressBar ? 'flex-col' : 'flex-wrap'
          }`}
        >
          {model.showProgressBar ? (
            <FormStepper
              details={model.pages?.map(x => ({
                name: x.name,
                title: x.title,
              }))}
              page={page}
              onPageChange={handleChangePage}
            />
          ) : (
            <FormSidebar
              details={model.pages?.map(x => ({
                name: x.name,
                title: x.title,
              }))}
              onPageChange={handleChangePage}
            />
          )}
          <FormContent model={model} page={page} />
        </div>
      </div>
    );
  else return null;
};

export default FormViewer;
