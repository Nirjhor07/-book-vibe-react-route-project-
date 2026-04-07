import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";
import PageNotFound404 from "../Pages/404 page not found/PageNotFound404";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "listedbooks",
        element: <p>My listed books here</p>,
      },
      {
        path: "pagesToRead",
        element: <p>Pages to read</p>,
      },
    ],
    errorElement: <PageNotFound404></PageNotFound404>,
  },
]);
