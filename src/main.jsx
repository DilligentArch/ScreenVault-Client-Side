import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthProvider, { AuthContext } from "./AuthProvider/AuthProvider";
import AuthSystem from "./AuthSystem/AuthSystem";
import Login from "./AuthLayout.jsx/Login";
import Register from "./AuthLayout.jsx/Register";
import HomeLayout from "./HomeLayout/HomeLayout";
import AddMoviesLayout from "./AddMoviesLayout/AddMoviesLayout";

import AllMoviesLayout from "./AllMoviesLayout/AllMoviesLayout";

import MovieDetailsLayout from "./MovieDetailsLayout/MovieDetailsLayout";
import PrivateRoute from "./PrivateLayout/PrivateRoute";
import FavoriteMovieLayout from "./FavoriteMovieLayout/FavoriteMovieLayout";

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader:()=>fetch('http://localhost:5000/movies/top-rated'),
  },
  {
    path: "/movies/:id", 
    element: <PrivateRoute>
      <MovieDetailsLayout />,
    </PrivateRoute>,
    loader: ({ params }) =>fetch(`http://localhost:5000/movies/${params.id}`),
  },
  {
    path: "/favorites/:email", 
    element: <PrivateRoute>
      <FavoriteMovieLayout></FavoriteMovieLayout>
    </PrivateRoute>,
    loader: ({ params }) => fetch(`http://localhost:5000/favorites/${params.email}`)
  },
  {
    path: "/add-movie",
    element: <PrivateRoute>
      <AddMoviesLayout></AddMoviesLayout>
    </PrivateRoute>,
  },
  {
    path: "/all-movies",
    element: <AllMoviesLayout></AllMoviesLayout>,
    loader:()=>fetch('http://localhost:5000/movies'),
  },
  {
    path: "/auth",
    element: <AuthSystem />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
