import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Fotter';
import UpdateMovie from '../Components/UpdateMovie';

const UpdateMovieLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main><UpdateMovie></UpdateMovie></main>
            <Footer></Footer>
        </div>
    );
};

export default UpdateMovieLayout;