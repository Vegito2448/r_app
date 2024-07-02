import { Form, Formik } from 'formik';
import { object } from "yup";
import { FormInput } from "../components";
import customForm from '../data/customForm.json';
import { generateFormFieldsSchema, getInitialValues } from "../utils";

const initialValues = getInitialValues(customForm);

const onSubmit = (values: any) => {
  console.log(values);
};

const validationFields = generateFormFieldsSchema(customForm);

const validationSchema = object({ ...validationFields });



export const DynamicForm = () => {
  return (
    <div><h1>DynamicForm</h1>
      <input />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            {customForm.map(({ value, ...field }) => <FormInput
              {...field}
              key={field.id + field.name}
            />)}



            <button type="submit">Submit</button>
          </Form>
        )}

      </Formik>

    </div>
  );
};
