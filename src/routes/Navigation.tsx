import { Suspense } from "react";
import {
  RouterProvider
} from "react-router-dom";
import router from "./router";

const Navigation = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} fallbackElement />
      </Suspense>
    </>
  );
};

export default Navigation;