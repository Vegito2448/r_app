import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "../components";
import Home from "./Layout";
import routesConfig from "./routesConfig";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: routesConfig.map((route) => route),
    errorElement: <ErrorPage />
  },
]);

export default router;
export { routesConfig };

