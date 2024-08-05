import React, { useEffect, useState } from 'react';
import FormHeader from '../FormHeader';
import FormSidebar from '../FormSidebar';
import FormContent from '../FormContent';

const FormViewer = ({ model = null }) => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    if (model) {
      setPage(model?.pages[0]);
    }
  }, [model]);

  const handleChangePage = name => {
    setPage(model?.pages.find(x => x.name === name));
  };

  if (model)
    return (
      <div className="w-full h-full">
        <FormHeader title={model.title} />
        <div className="w-full h-[calc(100%_-_48px)] flex flex-row">
          <FormSidebar
            details={model.pages?.map(x => ({
              name: x.name,
              title: x.title,
            }))}
            onPageChange={handleChangePage}
          />
          <FormContent page={page} />
        </div>
      </div>
    );
  else return null;
};

export default FormViewer;
