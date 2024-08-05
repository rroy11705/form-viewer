import FormViewer from './components/common/FormViewer';
import json from './const/PATIENT_MEDICAL_HISTORY_FORM.json';

function App() {
  return (
    <div className="h-screen">
      <FormViewer model={json} />
    </div>
  );
}

export default App;
