import FormViewer from './components/common/FormViewer';
import json from './const/test.json';

function App() {
  return (
    <div className="h-screen">
      <FormViewer model={json} />
    </div>
  );
}

export default App;
