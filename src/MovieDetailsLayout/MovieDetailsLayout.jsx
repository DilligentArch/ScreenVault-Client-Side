import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Fotter';
import MovieDetails from '../Components/MovieDetails';
import SliderSection from '../Components/SliderSection';

const MovieDetailsLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main>
               
                <MovieDetails></MovieDetails></main>
            <Footer></Footer>            
        </div>
    );
};

export default MovieDetailsLayout;