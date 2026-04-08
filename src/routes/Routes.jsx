import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";
import PageNotFound404 from "../Pages/404 page not found/PageNotFound404";
import BookDetails from "../components/All Books/BookDetails/BookDetails";
import ReadListBooks from "../components/ReadListedBooks/ReadListBooks";
import WishListBooks from "../components/WishListsBooks/WishListBooks";

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
        Component: WishListBooks,
      },
      {
        path: "pagesToRead",
        Component: ReadListBooks,
      },
      {
        path: "/bookdetails/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <PageNotFound404></PageNotFound404>,
  },
]);
