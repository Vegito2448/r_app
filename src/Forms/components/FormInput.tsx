import { ErrorMessage, ErrorMessageProps, useField } from "formik";
import { HTMLInputTypeAttribute } from 'react';

type Props = {
  type: HTMLInputTypeAttribute | 'select';
  name: string;
  id?: string;
  label: string;
  placeholder?: string;
  ErrorMessageFP?: ErrorMessageProps;
  required?: boolean;
  [key: string]: any;
};

const InputCheckbox = ({ label, ErrorMessageFP, ...props }: Props) => {
  const [field,/* meta property works like touched and error meta.touched && meta.error */] = useField(props);

  // to use meta property
  /*
    meta.touched && meta.error && <div className="error">{meta.error}</div>
  */

  return <>
    <label>
      <input
        {...field}
        {...props}
      />{label}{props.required && "*"}
    </label>
    <ErrorMessage
      {...ErrorMessageFP}
      name={props.name}
      className="has-error"
    />
  </>;
};

const InputSelect = ({ label, ErrorMessageFP, ...props }: Props) => {

  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}{props.required && "*"}</label>
      <select {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component="span"
        {...ErrorMessageFP}
      />
    </>
  );
};

const InputText = ({ label, ErrorMessageFP, ...props }: Props) => {

  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}{props.required && "*"}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component="span"
        {...ErrorMessageFP}
      />
    </>
  );
};


export const FormInput = ({ ...props }: Props) => {
  switch (props.type) {
    case "checkbox":
      return <InputCheckbox {...props} />;
    case 'select':
      return <InputSelect {...props} />;
    default:
      return <InputText {...props} />;
  }
};