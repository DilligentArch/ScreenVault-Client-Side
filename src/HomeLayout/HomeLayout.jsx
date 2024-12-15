import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Fotter';
import { useLoaderData, Link } from 'react-router-dom';
import Home from '../Components/Home';
import SliderSection from '../Components/SliderSection';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const HomeLayout = () => {
  const data = useLoaderData();

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {/* Slider Section */}
        <SliderSection />

        {/* Discover Top Movies Section */}
        <div className="container mx-auto p-4">
          <h2
            className="text-3xl font-semibold text-teal-500 text-center mb-6"
            data-aos="fade-up"
          >
            Discover Top Movies
          </h2>
          <p
            className="text-center text-gray-600 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Browse through a curated list of top-rated movies handpicked just for you.
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {data.map((singleData) => (
              <Home key={singleData._id} singleData={singleData} />
            ))}
          </div>
        </div>
        {/* Link to All Movies Section */}
        <div className="bg-teal-500 py-12">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-3xl font-semibold mb-6">
              Ready to Explore More Movies?
            </h2>
            <p className="text-lg mb-8">
              Dive into our full collection of movies and discover more exciting films across all genres.
            </p>
            <Link
              to="/all-movies"
              className="bg-white text-teal-500 px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition"
            >
              View All Movies
            </Link>
          </div>
        </div>

        {/* Trending Movies Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <h2
              className="text-3xl font-semibold text-gray-700 text-center mb-6"
              data-aos="fade-right"
            >
              Trending Movies
            </h2>
            <p
              className="text-center text-gray-500 mb-8"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Stay up-to-date with the most popular movies currently trending across the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.slice(0, 3).map((movie) => (
                <div
                  key={movie._id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                  data-aos="zoom-in"
                >
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-[33rem]"
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

        {/* Movie Insights Section */}
        <div className="bg-gray-800 text-white py-12">
          <div className="container mx-auto">
            <h2
              className="text-3xl font-semibold text-teal-400 text-center mb-6"
              data-aos="fade-left"
            >
              Movie Insights
            </h2>
            <p
              className="text-center text-gray-300 mb-8"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Explore fascinating trivia and behind-the-scenes facts about your favorite movies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-900 rounded-lg shadow-md" data-aos="flip-left">
                <h3 className="text-xl font-bold text-orange-400 mb-2">Did You Know?</h3>
                <p className="text-gray-300">
                  The highest-grossing movie of all time is *Avatar* with over $2.8 billion in earnings.
                </p>
              </div>
              <div className="p-4 bg-gray-900 rounded-lg shadow-md" data-aos="flip-left" data-aos-delay="200">
                <h3 className="text-xl font-bold text-orange-400 mb-2">Trivia</h3>
                <p className="text-gray-300">
                  The famous “I am your father” line from *Star Wars* was kept secret from the cast until the final shoot.
                </p>
              </div>
              <div className="p-4 bg-gray-900 rounded-lg shadow-md" data-aos="flip-left" data-aos-delay="400">
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
