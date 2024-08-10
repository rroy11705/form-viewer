import React from 'react';
import json from '../const/PATIENT_MEDICAL_HISTORY_FORM.json';
import FormViewer from '../components/common/FormViewer';

const Page2 = () => {
  return <FormViewer model={json} />;
};

export default Page2;
