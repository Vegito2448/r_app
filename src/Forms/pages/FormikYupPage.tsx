import { useFormik } from "formik";
import { object, string } from "yup";
import '../styles/styles.css';

const validationSchema = object({
  fName: string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  lName: string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: string().email("Invalid email").required("Required")
});

export const FormikYupPage = () => {

  const { handleSubmit, touched, errors, getFieldProps } = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: ""
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema
  });

  return (
    <div>
      <h1>Formik Yup Page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fName">First Name</label>
          <input
            id="fName" type="text"
            className={`${errors.fName && "has-error"}`}
            {...getFieldProps("fName")}
          />
          <br />
          {touched.fName && errors.fName && <span>{errors.fName}</span>}
        </div>
        <div>
          <label htmlFor="lName">Last Name</label>
          <input
            id="lName"
            type="text"
            className={`${errors.lName && "has-error"}`}
            {...getFieldProps("lName")}
          />
          <br />
          {touched.lName && errors.lName && <span>{errors.lName}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className={`${errors.email && "has-error"}`}
            {...getFieldProps("email")}
          />
          <br />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};