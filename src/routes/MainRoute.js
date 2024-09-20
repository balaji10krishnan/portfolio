import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/Main";
import NotFound from "../component/features/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const MainRoute = () => {
  return <RouterProvider router={router} />;
};
export default MainRoute;
