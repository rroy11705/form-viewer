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
        <div
          className="p-4 w-full"
          style={{
            maxWidth: model.widthMode === 'static' ? model.width : '100%',
            margin: '0 auto',
          }}
        >
          <div className="w-min ml-auto flex flex-row gap-3">
            {page > 0 ? (
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                onClick={() => onPageChange(page - 1)}
              >
                Previous
              </button>
            ) : null}
            {model?.pages.length - 1 === page ? (
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            ) : (
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormContent;
