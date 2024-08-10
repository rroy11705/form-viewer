// import { FormProvider, useForm } from 'react-hook-form';
// import FormViewer from './components/common/FormViewer';
// import FileUpload from './components/forms/FileUpload';
// import json from './const/PATIENT_ASSESSMENT_FORM.json';

// function App() {
//   const methods = useForm({
//     defaultValues: {
//       fileSelector: [],
//     },
//   });

//   const onSubmit = data => {
//     console.log('Form Data:', data);
//   };
//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={methods.handleSubmit(onSubmit)}>
//         {/* File Selector with form controller */}
//         <FileUpload
//           id="file-selector"
//           name="fileSelector"
//           label="File Selector"
//           placeholder="Drag & Drop files here or click to select files"
//           required={true}
//           maxFiles={5}
//           maxFileSize={2000000} // 2 MB
//           // allowedFileExtensions={['jpg', 'png', 'pdf']}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </FormProvider>
//   );
// }

// export default App;
