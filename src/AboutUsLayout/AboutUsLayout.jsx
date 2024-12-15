import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Fotter';
import AboutUs from '../Components/AboutUs';

const AboutUsLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main><AboutUs></AboutUs></main>
            <Footer></Footer>
        </div>
    );
};

export default AboutUsLayout;