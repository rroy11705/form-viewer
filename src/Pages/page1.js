import React from 'react';
import FormViewer from '../components/common/FormViewer';
import json from '../const/PATIENT_ASSESSMENT_FORM.json';

const Page1 = () => {
  return <FormViewer model={json} />;
};

export default Page1;
