import FormViewer from './components/common/FormViewer';
import json from './const/PATIENT_ASSESSMENT_FORM.json';

function App() {
  return (
    <div className="h-screen">
      <FormViewer model={json} />
    </div>
  );
}

export default App;
