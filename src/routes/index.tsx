import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Genre = lazy(() => import("../pages/Genre"));
const People = lazy(() => import("../pages/People"));
const Detail = lazy(() => import("../pages/Detail"));
const Actor = lazy(() => import("../pages/Actor"));
const Search = lazy(() => import("../pages/Search"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Outlet />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/genre",
            element: <Genre />,
          },
          {
            path: "/people",
            element: <People />,
          },
          {
            path: "/detail",
            element: <Detail />,
          },
          {
            path: "/actor",
            element: <Actor />,
          },
          {
            path: "/search",
            element: <Search />,
          },
        ],
      },
    ],
  },
]);

export default router;
