import FormViewer from './components/common/FormViewer';
import Matrix from './components/forms/Matrix/Matrix';
import json from './const/PATIENT_MEDICAL_HISTORY_FORM.json';

function App() {
  return (
    <div className="h-screen">
      <FormViewer model={json} />
      {/* <Matrix
        columns={['No', 'Yes']}
        isAllRowRequired={true}
        name={'performingActivities'}
        rows={['Eating', 'Bathing', 'Dressing', 'Walking', 'Using Toilet', 'Housekeeping']}
        label={'Do you have difficulty performing these activities by YOURSELF?'}
      /> */}
    </div>
  );
}

export default App;
