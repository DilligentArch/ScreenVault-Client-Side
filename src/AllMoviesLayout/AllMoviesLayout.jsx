import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import AllMovies from '../Components/AllMovies';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Components/Fotter';

const AllMoviesLayout = () => {
    const data = useLoaderData();  // Fetch the data using useLoaderData() hook
    const [searchQuery, setSearchQuery] = useState(""); // State for search query

    // Handle input change for search
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter the movies based on the search query
    const filteredMovies = data.filter((movie) => {
        return (
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.releaseYear.toString().includes(searchQuery)
        );
    });

    return (
        <div>
            <Navbar />
            <main>
                <div className="container mx-auto p-4">
                    {/* Heading */}
                    <h2 className="text-3xl font-semibold text-teal-500 text-center mb-6">
                        All Movies
                    </h2>

                    {/* Styled Meaningful Paragraph */}
                    <p className="text-center text-gray-700 mb-8 px-4 py-4 bg-teal-50 rounded-lg shadow-md max-w-3xl mx-auto text-lg leading-relaxed">
                        Discover a wide range of movies from different genres, including the latest releases and all-time favorites. 
                        Use the search bar to easily find movies by title, genre, or release year. 
                        Whether you're a fan of action, comedy, drama, or romance, our collection has something for everyone. 
                        Start exploring and find your next favorite movie today!
                    </p>

                    {/* Search Bar */}
                    <div className="mb-6 text-center">
                        <input
                            type="text"
                            placeholder="Search for movies..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Movie List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredMovies.length > 0 ? (
                            filteredMovies.map((singleData) => (
                                <AllMovies key={singleData._id} singleData={singleData} />
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No movies found.</p>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AllMoviesLayout;
