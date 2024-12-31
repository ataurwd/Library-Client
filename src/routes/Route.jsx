import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./../pages/home/Home";
import Layout from "./../layout/Layout";
import Login from "../users/Login";
import Register from "./../users/Register";
import AllBooks from "../pages/AllBooks/AllBooks";
import AddBooks from "./../pages/AddBooks";
import Borrowed from "./../pages/Borrowed";
import Category from "../components/Category";
import CategoryItem from "./../components/CategoryItem";
import UpdateBooks from "../components/UpdateBooks";
import PrivateRoute from "./PrivateRoute";
import Details from "../components/Details";
import ErrorPage from "../components/ErrorPage";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/all-books",
          element: (
            <PrivateRoute>
              <AllBooks />
            </PrivateRoute>
          ),
        },
        {
          path: "/add-books",
          element: (
            <PrivateRoute>
              <AddBooks />
            </PrivateRoute>
          ),
        },
        {
          path: "/browse-books",
          element: (
            <PrivateRoute>
              <Borrowed />
            </PrivateRoute>
          ),
        },
        {
          path: "/category/:category",
          element: (
            <PrivateRoute>
              <CategoryItem />
            </PrivateRoute>
          ),
          loader: () => fetch("https://library-server-five.vercel.app/books"),
        },
        {
          path: "/all-books/:id",
          element: (
            <PrivateRoute>
              <UpdateBooks />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`https://library-server-five.vercel.app/book/${params.id}`),
        },
        {
          path: "/details/:id",
          element: (
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`https://library-server-five.vercel.app/book/${params.id}`),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Route;
