import { RouteObject } from "react-router-dom";
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
];
export default routesConfig;