import { useFormik } from "formik";
import { isValidEmail } from "../../utils";
import '../styles/styles.css';

export const FormikBasicPage = () => {

  const { handleSubmit, handleChange, touched, handleBlur, values, errors } = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: ""
    },
    onSubmit: values => {
      console.log(values);
    },
    validate: values => {
      const errors: any = {};
      if (!values.fName) {
        errors.fName = "First Name is Required";
      }
      if (!values.lName) {
        errors.lName = "Last Name is Required";
      }
      if (!values.email || !isValidEmail(values.email)) {
        errors.email = "Email is Required and must be valid";
      }
      return errors;
    }
  });


  return (
    <div>
      <h1>FormikBasicPage</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fName">First Name</label>
          <input id="fName" name="fName" type="text"
            className={`${errors.fName && "has-error"}`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fName}
          />
          <br />
          {touched.fName && errors.fName && <span>{errors.fName}</span>}
        </div>
        <div>
          <label htmlFor="lName">Last Name</label>
          <input id="lName" name="lName" type="text"
            className={`${errors.lName && "has-error"}`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lName}
          />
          <br />
          {touched.lName && errors.lName && <span>{errors.lName}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email"
            className={`${errors.email && "has-error"}`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <br />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};