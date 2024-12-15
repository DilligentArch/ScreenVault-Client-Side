import React, { useEffect } from 'react';
import Swiper from './Swiper';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const SliderSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with default duration
    }, []);

    return (
        <div className="max-w-screen-2xl mx-auto">
            {/* Hero Section */}
            <div
                className="hero bg-gradient-to-r from-blue-900 via-teal-800 to-teal-600 text-white py-10"
                data-aos="fade-in"
            >
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1
                            className="text-5xl font-bold text-orange-400"
                            data-aos="fade-up"
                        >
                            Welcome to <span className="text-yellow-400">ScreenVault</span>
                        </h1>
                        <p
                            className="py-6 text-gray-300 text-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Discover, explore, and keep track of your favorite movies. Your movie adventure starts here!
                        </p>
                    </div>
                </div>
            </div>

            {/* Explore Top Picks Section */}
            <div className="bg-gray-100 py-12" data-aos="fade-up">
                <div className="text-center mb-8">
                    <h2
                        className="text-4xl font-bold text-gray-700"
                        data-aos="fade-right"
                    >
                        Explore Top Picks
                    </h2>
                    <p
                        className="text-gray-500 mt-2"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        Dive into a collection of carefully curated movie selections, handpicked just for you!
                    </p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="400">
                    <Swiper />
                </div>
            </div>
        </div>
    );
};

export default SliderSection;
