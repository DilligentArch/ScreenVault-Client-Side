import React from 'react';
import { Link } from 'react-router-dom';

const AllMovies = ({ singleData }) => {
    const { _id, title, genre, releaseYear, rating, poster, summary, duration } = singleData; // Destructure movie data

    return (
        <div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up" // Animation on scroll
            data-aos-duration="1000" // Duration of the animation
            data-aos-easing="ease-in-out" // Easing for the animation
        >
            {/* Movie Poster */}
            <img
                src={poster}
                alt={title}
                className="w-full h-[33rem]"
                data-aos="zoom-in" // Zoom-in effect on the image
                data-aos-duration="1200" // Longer duration for the image
            />
            <div className="p-4">
                {/* Movie Title */}
                <h3 className="text-xl font-bold text-teal-600" data-aos="fade-left" data-aos-delay="200">
                    {title}
                </h3>
                {/* Genre, Duration, Release Year */}
                <div>
                    <p className="text-sm text-gray-500" data-aos="fade-left" data-aos-delay="300">
                        {genre}
                    </p>
                    <p className="text-sm text-gray-500" data-aos="fade-left" data-aos-delay="400">
                        Duration: {duration} mins
                    </p>
                    <p className="text-sm text-gray-500" data-aos="fade-left" data-aos-delay="500">
                        Release Year: {releaseYear}
                    </p>
                    {/* Rating */}
                    <p className="text-sm text-gray-500" data-aos="fade-left" data-aos-delay="600">
                        Rating: {rating[rating.length-1]}
                    </p>
                </div>

                {/* See Details Button */}
                <div className="flex justify-end items-center" data-aos="fade-up" data-aos-delay="700">
                    <Link
                        to={`/movies/${_id}`}
                        className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
                    >
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllMovies;
