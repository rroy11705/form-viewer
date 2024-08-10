import FormViewer from './components/common/FormViewer';
import Matrix from './components/forms/Matrix/Matrix';
import json from './const/PATIENT_ASSESSMENT_FORM.json';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Pages/home';
import Page1 from './Pages/page1';
import Page2 from './Pages/page2';
import Page3 from './Pages/page3';

function App() {
  return (
    <div className="h-screen">
      <Suspense
        fallback={
          <div className="mt-2 ml-3 text-sm text-gray-500 dark:text-gray-400">Loading...</div>
        }
      >
        <Routes>
          {/* Redirect any undefined route to home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
      {/* <FormViewer model={json} /> */}
      <FormViewer model={json} />
      <Matrix
        columns={['No', 'Yes']}
        isAllRowRequired={true}
        name={'performingActivities'}
        rows={['Eating', 'Bathing', 'Dressing', 'Walking', 'Using Toilet', 'Housekeeping']}
        label={'Do you have difficulty performing these activities by YOURSELF?'}
      />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
