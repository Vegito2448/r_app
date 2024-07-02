import { Form, Formik } from "formik";
import { boolean, object, string } from "yup";
import { FormInput } from '../components';
import '../styles/styles.css';

const validationSchema = object({
  fName: string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  lName: string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: string().email("Invalid email").required("Required"),
  terms: boolean().oneOf([true], "You must accept the terms and conditions"),
  jobType: string()
    .notOneOf(['it-jr', ''], "You are not eligible")
    .required("Required")
});

const initialValues = {
  fName: "",
  lName: "",
  email: "",
  terms: false,
  jobType: ""
};

const onSubmit = (values: typeof initialValues) => {
  console.log(values);
};

export const FormikAbstraction = () => {


  return (
    <div>
      <h1>Formik Yup Page</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ }) => <Form>

          <FormInput
            name="fName"
            label="First Name"
            placeholder="Your first name"
            type="text"
            required
          />
          <FormInput
            name="lName"
            label="Last Name"
            placeholder="Your last name"
            type="text"
          />
          <FormInput
            name="email"
            label="Email"
            placeholder="Your email"
            type="email"
          />

          <FormInput
            name="terms"
            label="Terms & Conditions"
            type="checkbox"
          />

          <FormInput
            id="jobType"
            type="select"
            name="jobType"
            label="Job Type"
          >
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="it-jr">IT Junior</option>
            <option value="other">Other</option>
          </FormInput>
          <button type="submit">Submit</button>
        </Form>}
      </Formik>

    </div>
  );
};