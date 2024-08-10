// import FormViewer from './components/common/FormViewer';
// import json from './const/PATIENT_MEDICAL_HISTORY_FORM.json';
// import { useForm, FormProvider } from 'react-hook-form';
// import SelectField from './components/forms/Select/index';
// import TextField from '../src/components/forms/InputField/index';
// import TextArea from './components/forms/TextArea';

// function App() {
//   // const methods = useForm();

//   // const options = [
//   //   { label: 'Option 1', value: 'option1' },
//   //   { label: 'Option 2', value: 'option2' },
//   //   { label: 'Option 3', value: 'option3' },
//   // ];
//   // const methods = useForm({
//   //   defaultValues: {
//   //     username: '',
//   //     email: '',
//   //     password: '',
//   //   },
//   // });

//   // const onSubmit = data => {
//   //   console.log('Form Data:', data);
//   // };
//   // Initialize the React Hook Form
//   const methods = useForm({
//     defaultValues: {
//       myTextarea: '', // Set default value if needed
//     },
//   });
//   const { handleSubmit } = methods;

//   // Handle form submission
//   const onSubmit = data => {
//     console.log('Form Data:', data);
//   };

//   return (
//     <div className="h-screen">
//       <FormViewer model={json} />
//       {/* <FormProvider {...methods}>
//         <form>
//           <SelectField
//             id="custom-select"
//             label="Choose an option"
//             name="mySelect"
//             options={options}
//             required={true}
//             placeholder="Select an option"
//             searchable={true}
//             searchInputPlaceholder={`Search for options`}
//             clearSelectionButton={true}
//             endIcon={<span>▼</span>}
//           />
//         </form>
//       </FormProvider> */}
//       <FormProvider {...methods}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* <TextField
//             id="username"
//             name="username"
//             label="Username"
//             placeholder="Enter your username"
//             required
//             maxLength={20}
//             minLength={4}
//             showErrorIcon
//             showSuccessIcon
//           />

//           <TextField
//             id="email"
//             name="email"
//             type="email"
//             label="Email"
//             placeholder="Enter your email"
//             required
//             pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
//             showErrorIcon
//             showSuccessIcon
//           />

//           <TextField
//             id="password"
//             name="password"
//             type="password"
//             label="Password"
//             placeholder="Enter your password"
//             required
//             maxLength={20}
//             minLength={6}
//             showErrorIcon
//             showSuccessIcon
//           />
//           <SelectField
//             id="custom-select"
//             label="Choose an option"
//             name="mySelect"
//             options={options}
//             required={true}
//             placeholder="Select an option"
//             searchable={true}
//             searchInputPlaceholder={`Search for options`}
//             clearSelectionButton={true}
//             endIcon={<span>▼</span>}
//           /> */}
//           <TextArea
//             id="myTextarea"
//             name="myTextarea"
//             label="My Textarea"
//             placeholder="Enter your text here"
//             required={true}
//             maxLength={100}
//             minLength={10}
//             // startIcon={<span>📝</span>} // Example icon
//             // endIcon={<span>🔽</span>} // Example icon
//             color="blue"
//             error={methods.formState.errors.myTextarea?.message}
//             success="Text is valid!"
//             showErrorIcon={true}
//             showSuccessIcon={true}
//             helperText="This field is required and should be between 10 and 100 characters."
//           />

//           <button type="submit">Submit</button>
//         </form>
//       </FormProvider>
//     </div>
//   );
// }

// export default App;
