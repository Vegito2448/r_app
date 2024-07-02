import { NumberSchema, StringSchema, number, string } from 'yup'; // Assuming yup is used for schema validation


interface FormField {
  name: string;
  type: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  value?: any;
}

export const getInitialValues = (customForm: FormField[]) => customForm.reduce((acc, field) => {
  acc[field.name] = field.value;
  return acc;
}, {} as { [key: string]: any; });


export function generateFormFieldsSchema(customForm: Array<FormField>) {
  return customForm.reduce((acc, field) => {
    let schema;

    switch (field.type) {
      case "number":
        schema = number();
        break;
      case "email":
        schema = string().email("Invalid email");
        break;
      default:
        schema = string();
        break;
    }

    if (field.required) {
      schema = schema.required("This Field is Required");
    }
    if (field.minLength) {
      schema = schema.min(field.minLength, "Too Short");
    } else if (field.maxLength) {
      schema = schema.max(field.maxLength, "Too Long");
    }

    acc[field.name] = schema;

    return acc;
  }, {} as { [key: string]: NumberSchema | StringSchema; });
}