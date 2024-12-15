import React, { useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddMovies = () => {
  const { user } = useContext(AuthContext);
  const [movieData, setMovieData] = useState({
    poster: "",
    title: "",
    genre: "",
    duration: "",
    releaseYear: "",  // Text input for release year
    rating: 0, // Rating initialized to 0
    summary: "",
  });

  const genres = ["Comedy", "Drama", "Horror", "Action","Thriller", "Romance", "Sci-Fi"];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  // Validate the form
  const validateForm = () => {
    const { poster, title, genre, duration, releaseYear, rating, summary } =
      movieData;

    // URL validation
    if (!poster || !/^https?:\/\/.+/.test(poster)) {
      toast.error("Please provide a valid image URL.");
      return false;
    }

    if (!title || title.length < 2) {
      toast.error("Title must be at least 2 characters long.");
      return false;
    }

    if (!genre) {
      toast.error("Please select a genre.");
      return false;
    }

    if (!duration || parseInt(duration) < 60) {
      toast.error("Duration must be at least 60 minutes.");
      return false;
    }

    if (!releaseYear || isNaN(releaseYear) || releaseYear < 1900) {
      toast.error("Please provide a valid release year.");
      return false;
    }

    if (!rating || rating < 1 || rating > 5) {
      toast.error("Rating must be between 1 and 5.");
      return false;
    }

    if (!summary || summary.length < 10) {
      toast.error("Summary must be at least 10 characters long.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const form = e.target;
      const email = form.email.value;
      const { poster, title, genre, duration, releaseYear, rating, summary } =
        movieData;

      const newMovie = {
        email,
        poster,
        title,
        genre,
        duration,
        releaseYear,
        rating,
        summary,
      };

      fetch('https://screenvault-server.vercel.app/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMovie),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) toast.success("Movie added successfully!");
        });

      // Don't reset form if validation fails
      setMovieData({
        poster: "",
        title: "",
        genre: "",
        duration: "",
        releaseYear: "",
        rating: 0,
        summary: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-50">
      <Toaster />
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-teal-500 mb-6">
          Add a Movie
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email (Read-only) */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email || ""}
              readOnly
              className="w-full px-3 py-2 mt-1 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Movie Poster */}
          <div>
            <label htmlFor="poster" className="block text-sm font-medium text-gray-700">
              Movie Poster URL
            </label>
            <input
              type="url"
              name="poster"
              value={movieData.poster}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter movie poster URL"
              required
            />
          </div>

          {/* Movie Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Movie Title
            </label>
            <input
              type="text"
              name="title"
              value={movieData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter movie title"
              required
            />
          </div>

          {/* Genre */}
          <div>
            <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
              Genre
            </label>
            <select
              name="genre"
              value={movieData.genre}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">Select a genre</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
              Duration (minutes)
            </label>
            <input
              type="number"
              name="duration"
              value={movieData.duration}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter duration"
              min="60"
              required
            />
          </div>

          {/* Release Year  */}
          <div>
            <label htmlFor="releaseYear" className="block text-sm font-medium text-gray-700">
              Release Year
            </label>
            <input
              type="number"
              name="releaseYear"
              value={movieData.releaseYear}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter release year"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
              Rating (1 to 5)
            </label>
            <input
              type="number"
              name="rating"
              value={movieData.rating}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter a rating"
              min="1"
              max="5"
              required
            />
          </div>

          {/* Summary */}
          <div>
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
              Summary
            </label>
            <textarea
              name="summary"
              value={movieData.summary}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter a short summary"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition font-medium"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovies;
