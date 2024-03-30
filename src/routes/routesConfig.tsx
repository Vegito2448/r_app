import { Navigate, RouteObject } from "react-router-dom";
import { lazyImportObject } from "../utils";


export type RouteConfig = RouteObject & {
  name?: string;
  children?: Array<RouteConfig>;
};

const routesConfig: Array<RouteConfig> = [
  {
    path: 'lazy_layout/',
    ...lazyImportObject("lazyLoad/layout/LazyLayout"),
    name: "Lazy Layout",
    children: [
      {
        path: "lazy1",
        ...lazyImportObject("lazyLoad/pages/LazyPage1"),
        name: "Lazy - 1"
      },
      {
        path: "lazy2",
        ...lazyImportObject("lazyLoad/pages/LazyPage2"),
        name: "Lazy - 2"
      },
      {
        path: "lazy3",
        ...lazyImportObject("lazyLoad/pages/LazyPage3"),
        name: "Lazy - 3"
      },
    ] as Array<RouteConfig>,
    errorElement: <Navigate replace to="lazy1" />
  },
  {
    path: 'shopping/',
    ...lazyImportObject("patternComponents/pages/ShoppingPage"),
    name: "Shopping"
  },
];
export default routesConfig;