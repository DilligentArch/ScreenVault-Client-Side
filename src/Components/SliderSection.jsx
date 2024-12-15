import React from 'react';
import Swiper from './Swiper';

const SliderSection = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            {/* Hero Section */}
            <div className="hero bg-gradient-to-r from-blue-900 via-teal-800 to-teal-600 text-white py-10">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1
                            className="text-5xl font-bold text-orange-400 animate__animated animate__fadeIn"
                        >
                            Welcome to <span className="text-yellow-400">ScreenVault</span>
                        </h1>
                        <p className="py-6 text-gray-300 text-lg animate__animated animate__fadeIn animate__delay-1s">
                            Discover, explore, and keep track of your favorite movies. Your movie adventure starts here!
                        </p>
                    </div>
                </div>
            </div>

            {/* Explore Top Picks Section */}
            <div className="bg-gray-100 py-12">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-700">Explore Top Picks</h2>
                    <p className="text-gray-500 mt-2">
                        Dive into a collection of carefully curated movie selections, handpicked just for you!
                    </p>
                </div>
                <div className="animate__animated animate__fadeIn animate__delay-1s">
                    <Swiper />
                </div>
            </div>
        </div>
    );
};

export default SliderSection;
