import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Fotter';
import { useLoaderData } from 'react-router-dom';
import Home from '../Components/Home';
import SliderSection from '../Components/SliderSection';

const HomeLayout = () => {
  const data = useLoaderData();

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {/* Slider Section */}
        <SliderSection />

        {/* Featured Movies Section */}
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-semibold text-teal-500 text-center mb-6">
            Discover Top Movies
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Browse through a curated list of top-rated movies handpicked just for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((singleData) => (
              <Home key={singleData._id} singleData={singleData} />
            ))}
          </div>
        </div>

        {/* Section 1: Latest Releases */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-gray-700 text-center mb-6">
              Latest Releases
            </h2>
            <p className="text-center text-gray-500 mb-8">
              Catch up on the newest blockbusters and trending movies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Replace with dynamic data if available */}
              {data.slice(0, 4).map((movie) => (
                <div key={movie._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-[33rem] "
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-teal-600">{movie.title}</h3>
                    <p className="text-sm text-gray-500">{movie.genre}</p>
                    <p className="text-sm text-gray-500">Year: {movie.releaseYear}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Movie Insights */}
        <div className="bg-gray-800 text-white py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-teal-400 text-center mb-6">
              Movie Insights
            </h2>
            <p className="text-center text-gray-300 mb-8">
              Explore fascinating trivia and behind-the-scenes facts about your favorite movies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example Insights */}
              <div className="p-4 bg-gray-900 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-orange-400 mb-2">Did You Know?</h3>
                <p className="text-gray-300">
                  The highest-grossing movie of all time is *Avatar* with over $2.8 billion in
                  earnings.
                </p>
              </div>
              <div className="p-4 bg-gray-900 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-orange-400 mb-2">Trivia</h3>
                <p className="text-gray-300">
                  The famous “I am your father” line from *Star Wars* was kept secret from the cast
                  until the final shoot.
                </p>
              </div>
              <div className="p-4 bg-gray-900 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-orange-400 mb-2">Behind the Scenes</h3>
                <p className="text-gray-300">
                  The *Lord of the Rings* trilogy was shot back-to-back over 438 days in New Zealand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
