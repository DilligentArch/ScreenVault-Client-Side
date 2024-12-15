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
import UpdateMovie from "./Components/UpdateMovie";
import UpdateMovieLayout from "./UpdateMovieLayout/UpdateMovieLayout";
import NotFound from "./Components/NotFound";
import AboutUsLayout from "./AboutUsLayout/AboutUsLayout";
import ResetPassword from "./Components/ResetPassword";


const router = createBrowserRouter([
 
  {
    path: "/",
    errorElement:<NotFound></NotFound>,
    element: <HomeLayout></HomeLayout>,
    loader:()=>fetch('https://screenvault-server.vercel.app/movies/top-rated'),
  },
  {
    path: "/movies/:id", 
    element: <PrivateRoute>
      <MovieDetailsLayout />,
    </PrivateRoute>,
    loader: ({ params }) =>fetch(`https://screenvault-server.vercel.app/movies/${params.id}`),
  },
  {
    path: "/favorites/:email", 
    element: <PrivateRoute>
      <FavoriteMovieLayout></FavoriteMovieLayout>
    </PrivateRoute>,
    loader: ({ params }) => fetch(`https://screenvault-server.vercel.app/favorites/${params.email}`)
  },
  {
    path: "/add-movie",
    element: <PrivateRoute>
      <AddMoviesLayout></AddMoviesLayout>
    </PrivateRoute>,
  },
  {
    path: "/update-movie/:id",
    element: <PrivateRoute>
      <UpdateMovieLayout></UpdateMovieLayout>
    </PrivateRoute>,
      loader: ({ params }) =>
        fetch(`https://screenvault-server.vercel.app/movies/${params.id}`),
  },
  {
    path: "/all-movies",
    element: <AllMoviesLayout></AllMoviesLayout>,
    loader:()=>fetch('https://screenvault-server.vercel.app/movies'),
  },
  {
    path: "/about-us",
    element: <AboutUsLayout></AboutUsLayout>
  
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
      {
        path: "reset-password",
        element: <ResetPassword />,
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
