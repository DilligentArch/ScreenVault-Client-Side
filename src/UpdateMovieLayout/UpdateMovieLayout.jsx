import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Fotter';
import UpdateMovie from '../Components/UpdateMovie';

const UpdateMovieLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='max-w-screen-2xl mx-auto'><UpdateMovie></UpdateMovie></main>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default UpdateMovieLayout;