import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AddMovies = () => {
  const { user } = useContext(AuthContext);

  // Use React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const genres = ["Comedy", "Drama", "Horror", "Action", "Thriller", "Romance", "Sci-Fi"];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => 1900 + i);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Handle form submission
  const onSubmit = (data) => {
    const newMovie = {
      ...data,
      email: user?.email,
    };

    fetch("https://screenvault-server.vercel.app/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Movie added successfully!");
          reset(); 
        }
      })
      .catch((err) => {
        toast.error("Failed to add the movie.");
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-50">
      <Toaster />
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-teal-500 mb-6" data-aos="fade-up">
          Add a Movie
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email (Read-only) */}
          <div data-aos="fade-up" data-aos-delay="100">
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
              {...register("email")}
            />
          </div>

          {/* Movie Poster */}
          <div data-aos="fade-up" data-aos-delay="200">
            <label htmlFor="poster" className="block text-sm font-medium text-gray-700">
              Movie Poster URL
            </label>
            <input
              type="url"
              name="poster"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter movie poster URL"
              {...register("poster", { required: "Poster URL is required", pattern: /^https?:\/\/.+/ })}
            />
            {errors.poster && <p className="text-red-500 text-sm">{errors.poster.message}</p>}
          </div>

          {/* Movie Title */}
          <div data-aos="fade-up" data-aos-delay="300">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Movie Title
            </label>
            <input
              type="text"
              name="title"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter movie title"
              {...register("title", { required: "Title is required", minLength: { value: 2, message: "Title must be at least 2 characters long" } })}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          {/* Genre */}
          <div data-aos="fade-up" data-aos-delay="400">
            <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
              Genre
            </label>
            <select
              name="genre"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register("genre", { required: "Please select a genre" })}
            >
              <option value="">Select a genre</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
            {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
          </div>

          {/* Duration */}
          <div data-aos="fade-up" data-aos-delay="500">
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
              Duration (minutes)
            </label>
            <input
              type="number"
              name="duration"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter duration"
              min="60"
              {...register("duration", { required: "Duration is required", min: { value: 60, message: "Duration must be at least 60 minutes" } })}
            />
            {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
          </div>

          {/* Release Year */}
          <div data-aos="fade-up" data-aos-delay="600">
            <label htmlFor="releaseYear" className="block text-sm font-medium text-gray-700">
              Release Year
            </label>
            <select
              name="releaseYear"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register("releaseYear", { required: "Release year is required" })}
            >
              <option value="">Select a year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {errors.releaseYear && <p className="text-red-500 text-sm">{errors.releaseYear.message}</p>}
          </div>

          {/* Rating */}
          <div data-aos="fade-up" data-aos-delay="700">
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
              Rating (1 to 5)
            </label>
            <input
              type="number"
              name="rating"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter a rating"
              min="1"
              max="5"
              {...register("rating", { required: "Rating is required", min: { value: 1, message: "Rating must be at least 1" }, max: { value: 5, message: "Rating cannot be more than 5" } })}
            />
            {errors.rating && <p className="text-red-500 text-sm">{errors.rating.message}</p>}
          </div>


          {/* Summary */}
          <div data-aos="fade-up" data-aos-delay="800">
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
              Summary
            </label>
            <textarea
              name="summary"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter a short summary"
              rows="4"
              {...register("summary", { required: "Summary is required", minLength: { value: 10, message: "Summary must be at least 10 characters long" } })}
            ></textarea>
            {errors.summary && <p className="text-red-500 text-sm">{errors.summary.message}</p>}
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
