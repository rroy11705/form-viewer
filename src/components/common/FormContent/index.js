import React, { useMemo } from 'react';
import { renderElement } from '../../../helper';
import { FormProvider } from 'react-hook-form';

const FormContent = ({ model, page, methods, onPageChange }) => {
  const pageDetails = useMemo(() => model?.pages?.at(page) ?? null, [model, page]);

  const onSubmit = data => {
    if (page < model.pages.length - 1) {
      onPageChange(page + 1);
    } else {
      console.log(data); // Final form submission
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="relative w-full bg-gray-100 overflow-y-auto"
      >
        <div
          className="p-4 w-full"
          style={{
            maxWidth: model.widthMode === 'static' ? model.width : '100%',
            margin: '0 auto',
          }}
        >
          <div className="text-2xl pb-3">{pageDetails?.title}</div>
          <div className="flex flex-col gap-3">
            {pageDetails?.elements.map(element => (
              <React.Fragment key={element.name}>{renderElement(element)}</React.Fragment>
            ))}
          </div>
        </div>
        {page > 0 ? <button onClick={() => onPageChange(page - 1)}>Previous</button> : null}
        {model?.pages.length - 1 === page ? (
          <button type="submit">Submit</button>
        ) : (
          <button type="submit">Next</button>
        )}
      </form>
    </FormProvider>
  );
};

export default FormContent;
