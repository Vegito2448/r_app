import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, ref, string } from "yup";
import '../styles/styles.css';

const validationSchema = object({
  name: string()
    .required("Name is required")
    .min(2, "Name is too short")
    .max(20, "Name is too long"),
  email: string()
    .email("Invalid email")
    .required("Email is required"),
  password: string()
    .required("Password is required")
    .min(8, "Password is too short")
    .max(50, "Password is too long"),
  repeatPassword: string()
    .required("Repeat Password is required")
    .oneOf([ref("password")], "Passwords must match")
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  repeatPassword: ""
};

const onSubmit = (values: typeof initialValues) => {
  console.log(values);
};

export const RegisterFormikPage = () => {


  return (
    <div>
      <h1>Formik Register Yup Page</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ resetForm }) => <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
            />
            <br />
            <ErrorMessage
              name="name"
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
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
            />
            <br />
            <ErrorMessage
              name="password"
              component="span"
            />
          </div>
          <div>
            <label htmlFor="repeatPassword">Repeat Password</label>
            <Field
              id="repeatPassword"
              type="password"
              name="repeatPassword"
            />
            <br />
            <ErrorMessage
              name="repeatPassword"
              component="span"
            />
          </div>
          <button type="submit">Submit</button>
          <button onClick={() => resetForm()}>Reset Form</button>
        </Form>}
      </Formik>

    </div>
  );
};