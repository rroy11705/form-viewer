import React, { useMemo, useState } from 'react';
import FormHeader from '../FormHeader';
import FormSidebar from '../FormSidebar';
import FormContent from '../FormContent';
import FormStepper from '../FormStepper';
import { buildValidationSchema } from '../../../helper';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastProvider } from '../../forms/Toaster/ToastContext';
import SubmitFormView from '../SubmitFormView';

const FormViewer = ({ model = null }) => {
  const [page, setPage] = useState(0);

  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const handleChangePage = p => {
    setPage(p);
  };

  const pageDetails = useMemo(() => model?.pages?.at(page) ?? null, [model, page]);

  const validationSchema = buildValidationSchema(pageDetails);

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  // console.log('pageDetails', pageDetails);
  // console.log('validationSchema', validationSchema);

  console.log('watch', methods.watch());

  if (model)
    return (
      <ToastProvider>
        <div className="w-full">
          <FormHeader title={model.title} />
          <div
            className={`w-full h-[calc(100vh_-_48px)] flex ${
              model.showProgressBar ? 'flex-col' : 'flex-row'
            }`}
          >
            {model?.pages?.length === 1 ? null : model.showProgressBar ? (
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
            {isFormSubmit ? (
              <SubmitFormView data={methods.watch()} />
            ) : (
              <FormContent
                model={model}
                page={page}
                methods={methods}
                onPageChange={handleChangePage}
                setIsFormSubmit={setIsFormSubmit}
              />
            )}
          </div>
        </div>
      </ToastProvider>
    );
  else return null;
};

export default FormViewer;
