import React from 'react';
import json from '../const/PATIENT_FEEDBACK.json';
import FormViewer from '../components/common/FormViewer';

const Page3 = () => {
  return <FormViewer model={json} />;
};

export default Page3;
