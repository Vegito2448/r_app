import { RouteObject } from "react-router-dom";
import { DynamicForm, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage, RegisterPage } from "../Forms/pages";
import About from "./About";


export type RouteConfig = RouteObject & {
  name?: string;
  children?: Array<RouteConfig>;
};

const routesConfig: Array<RouteConfig> = [
  {
    path: 'About',
    element: <About />,
    name: "About"
  },
  {
    path: 'register',
    element: <RegisterPage />,
    name: "Register"
  },
  {
    path: 'register-formik',
    element: <RegisterFormikPage />,
    name: "Register Formik"
  },
  {
    path: 'formik-basic',
    element: <FormikBasicPage />,
    name: "Formik Basic"
  },
  {
    path: 'formik-yup',
    element: <FormikYupPage />,
    name: "Formik Yup"
  },
  {
    path: 'formik-components',
    element: <FormikComponents />,
    name: "Formik Components"
  },
  {
    path: 'formik-abstraction',
    element: <FormikAbstraction />,
    name: "Formik Abstraction"
  },
  {
    path: 'dynamic-form',
    element: <DynamicForm />,
    name: "Dynamic Form"
  },
];
export default routesConfig;