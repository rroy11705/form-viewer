import FormViewer from './components/common/FormViewer';
import json from './const/PATIENT_MEDICAL_HISTORY_FORM.json';
import { useForm, FormProvider } from 'react-hook-form';
import TextArea from './components/forms/TextArea';
import FileSelector from './components/forms/FileUpload';

function App() {
  const methods = useForm({
    defaultValues: {
      myTextarea: '', // Set default value if needed
    },
  });
  const { handleSubmit } = methods;

  // Handle form submission
  const onSubmit = data => {
    console.log('Form Data:', data);
  };

  return (
    <div className="h-screen">
      <FormViewer model={json} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <TextArea
            id="myTextarea"
            name="myTextarea"
            label="My Textarea"
            placeholder="Enter your text here"
            required={true}
            maxLength={100}
            minLength={10}
            // startIcon={<span>📝</span>} // Example icon
            // endIcon={<span>🔽</span>} // Example icon
            color="blue"
            error={methods.formState.errors.myTextarea?.message}
            success="Text is valid!"
            showErrorIcon={true}
            showSuccessIcon={true}
            helperText="This field is required and should be between 10 and 100 characters."
          /> */}
          <FileSelector />

          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
