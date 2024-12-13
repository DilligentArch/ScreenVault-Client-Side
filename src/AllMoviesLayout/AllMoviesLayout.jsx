import React from 'react';
import Navbar from '../Components/Navbar';

import AllMovies from '../Components/AllMovies';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Components/Fotter';

const AllMoviesLayout = () => {
    const data = useLoaderData();  // Fetch the data using useLoaderData() hook

    return (
        <div>
            <Navbar />
            <main>
                {/* Pass movie data to AllMovies component */}
                <div className="container mx-auto p-4">
                    <h2 className="text-3xl font-semibold text-teal-500 text-center mb-6">All Movies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     
                        {data.map((singleData) => (
                            <AllMovies  singleData={singleData} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AllMoviesLayout;
