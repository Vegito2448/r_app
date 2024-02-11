import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: Home(),
    children: [
      {
        path: "about",
        element: <h1>About</h1>,
      },
      {
        path: "users",
        element: <h1>Users</h1>,
      },
    ],
    errorElement: <Navigate to={'/'} replace />
  },
]);

const Navigation = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Navigation;