import React, { useState, useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const UpdateMovie = () => {
    const navigate = useNavigate();
    const movie = useLoaderData(); // Load the movie data to be updated
    const { user } = useContext(AuthContext);

    // Pre-fill the form with the movie data
    const [movieData, setMovieData] = useState({
        poster: movie.poster || "",
        title: movie.title || "",
        genre: movie.genre || "",
        duration: movie.duration || "",
        releaseYear: movie.releaseYear || "",
        rating: movie.rating || 0, // Make sure the rating is a number
        summary: movie.summary || "",
    });

    const genres = ["Comedy", "Drama", "Horror", "Action", "Thriller", "Romance", "Sci-Fi"];
    const years = Array.from({ length: 50 }, (_, i) => 2023 - i); // Generate years from 2023 to 1973

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovieData({ ...movieData, [name]: value });
    };

    // Validate the form
    const validateForm = () => {
        const { poster, title, genre, duration, releaseYear, rating, summary } =
            movieData;

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

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const updatedMovie = {
                ...movieData,
                email: user.email,
            };

            fetch(`https://screenvault-server.vercel.app/movies/${movie._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedMovie),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        toast.success("Movie updated successfully!");
                        navigate("/all-movies"); // Redirect to the movies page
                    } else {
                        toast.error("Failed to update the movie.");
                    }
                });
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with default duration
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-teal-50 max-w-screen-2xl mx-auto">
            <Toaster />
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
                <h2
                    className="text-3xl font-bold text-center text-teal-500 mb-6"
                    data-aos="fade-up"
                >
                    Update Movie
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Movie Poster */}
                    <div data-aos="fade-up">
                        <label
                            htmlFor="poster"
                            className="block text-sm font-medium text-gray-700"
                        >
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
                    <div data-aos="fade-up" data-aos-delay="200">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
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
                    <div data-aos="fade-up" data-aos-delay="400">
                        <label
                            htmlFor="genre"
                            className="block text-sm font-medium text-gray-700"
                        >
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
                    <div data-aos="fade-up" data-aos-delay="600">
                        <label
                            htmlFor="duration"
                            className="block text-sm font-medium text-gray-700"
                        >
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

                    {/* Release Year (Dropdown) */}
                    <div data-aos="fade-up" data-aos-delay="800">
                        <label
                            htmlFor="releaseYear"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Release Year
                        </label>
                        <select
                            name="releaseYear"
                            value={movieData.releaseYear}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        >
                            <option value="">Select a year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Rating */}
                    <div data-aos="fade-up" data-aos-delay="700">
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
                    <div data-aos="fade-up" data-aos-delay="1200">
                        <label
                            htmlFor="summary"
                            className="block text-sm font-medium text-gray-700"
                        >
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
                        data-aos="fade-up"
                        data-aos-delay="1400"
                    >
                        Update Movie
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMovie;
