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
    <div className='dark'>
      <header>
        <Navbar />
      </header>
      <main>
        {/* Slider Section */}
        <SliderSection />

        {/* Discover Top Movies Section */}
        <div className="container mx-auto p-4 ">
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
        <div className="bg-teal-500 py-12 max-w-screen-2xl mx-auto">
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
        <div className="bg-gray-100 py-12   ">
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

        <div>
        </div>
        {/* extra */}
        <div className="bg-gray-100 py-12">
          <h1
            className="text-3xl font-bold text-center text-teal-600 mb-4"
            data-aos="fade-down"
          >
            Famous Movie Directors
          </h1>
          <p
            className="text-center text-gray-500 mb-8 w-10/12 lg:w-8/12 mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Dive into the works of some of the most iconic directors in film history. Discover their top movies and lasting legacies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
            {/* Director 1 */}
            <div
              className="card card-compact bg-white w-full shadow-lg rounded-lg overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <figure>
                <img
                  src="https://i.ibb.co/ZTy9YkH/Christopher-Nolan.webp"
                  alt="Christopher Nolan"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <h2
                  className="card-title text-xl font-semibold text-teal-600"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  Christopher Nolan
                </h2>
                <p className="text-gray-600" data-aos="fade-left" data-aos-delay="600">
                  <strong>Known for:</strong> Inception, The Dark Knight, Interstellar
                </p>
              </div>
            </div>

            {/* Director 2 */}
            <div
              className="card card-compact bg-white w-full shadow-lg rounded-lg overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <figure>
                <img
                  src="https://i.ibb.co/gmfPGRG/quentin-tarantino-director-view-wallpaper-preview.jpg"
                  alt="Quentin Tarantino"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <h2
                  className="card-title text-xl font-semibold text-teal-600"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  Quentin Tarantino
                </h2>
                <p className="text-gray-600" data-aos="fade-left" data-aos-delay="600">
                  <strong>Known for:</strong> Pulp Fiction, Kill Bill, Django Unchained
                </p>
              </div>
            </div>

            {/* Director 3 */}
            <div
              className="card card-compact bg-white w-full shadow-lg rounded-lg overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <figure>
                <img
                  src="https://i.ibb.co/w4CbVdZ/greta-2.webp"
                  alt="Greta Gerwig"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <h2
                  className="card-title text-xl font-semibold text-teal-600"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  Greta Gerwig
                </h2>
                <p className="text-gray-600" data-aos="fade-left" data-aos-delay="600">
                  <strong>Known for:</strong> Lady Bird, Little Women, Barbie
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
