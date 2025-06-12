import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetail from "./components/BookDetail.jsx";
import Home from "./components/Home.jsx";
import FilteredBooks from "./components/FilteredBooks.jsx";
import AddBook from "./components/AddBook.jsx";
import Error from "./components/Error.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books/:category",
        element: <FilteredBooks />,
      },
      {
        path: "/bookDetail/:id",
        element: <BookDetail />,
      },
      {
        path: "/addBook",
        element: <AddBook />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
