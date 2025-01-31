import React, { useContext } from "react";
import { useLoaderData, useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MovieDetails = () => {
  const { user } = useContext(AuthContext);
  const movie = useLoaderData();
  const navigate = useNavigate();
  const { _id, title, genre, releaseYear, rating, poster, summary, duration } = movie; // Destructure movie data

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://screenvault-server.vercel.app/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The movie has been deleted.",
                icon: "success",
              });
              navigate("/all-movies");
            }
          });
      }
    });
  };

  const handleAddToFavorites = () => {
    const favoriteMovie = {
      userEmail: user.email,
      _id,
      title,
      genre,
      releaseYear,
      rating,
      poster,
      duration,
    };

    fetch("https://screenvault-server.vercel.app/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoriteMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Movie added to favorites!");
        }
      })
      .catch((error) => toast.error("Failed to add to favorites."));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-50 mt-5">
      <Toaster />
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 border-2">
        <img
          src={poster}
          alt={title}
          className="w-full md:w-3/5 mx-auto h-[35rem] rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-teal-600 mb-4">{movie.title}</h2>
        <p className="text-gray-700">
          <strong>Genre:</strong> {genre}
        </p>
        <p className="text-gray-700">
          <strong>Duration:</strong> {duration} mins
        </p>
        <p className="text-gray-700">
          <strong>Release Year:</strong> {releaseYear}
        </p>
        <p className="text-gray-700">
          <strong>Rating:</strong> {rating}
        </p>
        <p className="text-gray-700 mt-4">{summary}</p>
        <div className="flex justify-between mt-6">
          {/* Delete Movie Button */}
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Delete Movie
          </button>

          {/* Update Movie Button */}
          <Link
            to={`/update-movie/${_id}`}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update Movie
          </Link>

          {/* Add to Favorite Button */}
          <button
            onClick={handleAddToFavorites}
            className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition"
          >
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
