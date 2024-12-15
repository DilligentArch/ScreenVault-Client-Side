import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = ({ singleData }) => {
    const { _id, title, genre, releaseYear, rating, poster, summary, duration } = singleData;

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with default duration
    }, []);

    return (
        <div 
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up" // Apply AOS animation
        >
            {/* Movie Poster */}
            <img
                src={poster}
                alt={title}
                className="w-full h-[33rem]"
                data-aos="zoom-in" // Apply AOS animation for the image
                data-aos-delay="200"
            />
            <div className="p-4" data-aos="fade-up" data-aos-delay="400">
                {/* Movie Title */}
                <h3 className="text-xl font-bold text-teal-600">{title}</h3>
                {/* Genre, Duration, Release Year */}
                <div className="">
                    <p className="text-sm text-gray-500">{genre}</p>
                    <p className="text-sm text-gray-500">Duration: {duration} mins</p>
                    <p className="text-sm text-gray-500">Release Year: {releaseYear}</p>
                    {/* Rating */}
                    <p className="text-sm text-gray-500">
                        Rating: {rating.length === 2 ? rating[1] : rating[0]}
                    </p>
                </div>

                {/* See Details Button */}
                <div className="flex justify-end items-center">
                    <Link
                        to={`/movies/${_id}`}
                        className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
                        data-aos="fade-left" // Apply AOS animation for the button
                        data-aos-delay="600"
                    >
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
