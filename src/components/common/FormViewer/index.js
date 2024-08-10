import React, { useMemo, useState } from 'react';
import FormHeader from '../FormHeader';
import FormSidebar from '../FormSidebar';
import FormContent from '../FormContent';
import FormStepper from '../FormStepper';
import { buildValidationSchema } from '../../../helper';

const FormViewer = ({ model = null }) => {
  const [page, setPage] = useState(0);

  const handleChangePage = p => {
    setPage(p);
  };

  const pageDetails = useMemo(() => model?.pages?.at(page) ?? null, [model, page]);

  const validationSchema = buildValidationSchema(pageDetails);

  console.log('pageDetails', pageDetails);
  console.log('validationSchema', validationSchema);

  if (model)
    return (
      <div className="w-full">
        <FormHeader title={model.title} />
        <div
          className={`w-full h-[calc(100vh_-_48px)] flex ${
            model.showProgressBar ? 'flex-col' : 'flex-row'
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
              page={page}
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
