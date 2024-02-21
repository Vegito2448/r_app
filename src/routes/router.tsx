import { createBrowserRouter } from "react-router-dom";

import { NotFound } from "../lazyLoad/pages";
import { lazyImportObject } from "../utils";
import routesConfig from "./routesConfig";

const router = createBrowserRouter([
  {
    path: "/",
    ...lazyImportObject("routes/Home"),
    children: routesConfig.map((route) => route),
    errorElement: <NotFound />
  },
]);

export default router;
export { routesConfig };

