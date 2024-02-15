import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import { lazyPage1, lazyPage2, lazyPage3 } from "./lazyComponents";


const routesConfig: Array<RouteObject & {
  name: string;
}> = [
    {
      path: "lazy1",
      lazy: lazyPage1,
      name: "Lazy - 1"
    },
    {
      path: "lazy2",
      lazy: lazyPage2,
      name: "Lazy - 2"
    },
    {
      path: "lazy3",
      lazy: lazyPage3,
      name: "Lazy - 3"
    },
  ];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children: routesConfig.map(({ name, ...route }) => route),
    errorElement: <Navigate to={'/'} replace />
  },
]);

export default router;
export { routesConfig };

