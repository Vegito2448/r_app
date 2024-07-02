import { ErrorMessage, Field, Form, Formik } from "formik";
import { boolean, object, string } from "yup";
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

export const FormikComponents = () => {


  return (
    <div>
      <h1>Formik Yup Page</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ }) => <Form>
          <div>
            <label htmlFor="fName">First Name</label>
            <Field
              id="fName"
              type="text"
              name="fName"
            />
            <br />
            <ErrorMessage
              name="fName"
              component="span"
            />
          </div>
          <div>
            <label htmlFor="lName">Last Name</label>
            <Field
              id="lName"
              type="text"
              name="lName"
            />
            <br />
            <ErrorMessage
              name="lName"
              component="span"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
            />
            <br />
            <ErrorMessage
              name="email"
              component="span"
            />
          </div>
          <div>
            <label htmlFor="terms">
              <Field
                id="terms"
                name="terms"
                type="checkbox"
              />Terms & Conditions
            </label>
            <br />
            <ErrorMessage
              name="terms"
              component="span"
            />
          </div>
          <div>
            <label htmlFor="email">Job Type:</label>
            <Field
              id="jobType"
              type="jobType"
              name="jobType"
              as="select"
            >
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="it-jr">IT Junior</option>
              <option value="other">Other</option>
            </Field>
            <br />
            <ErrorMessage
              name="jobType"
              component="span"
            />
          </div>
          <button type="submit">Submit</button>
        </Form>}
      </Formik>

    </div>
  );
};