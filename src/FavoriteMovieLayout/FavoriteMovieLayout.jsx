import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Fotter';
import FavoriteMovie from '../Components/FavoriteMovie';
const FavoriteMovieLayout = ({data}) => {
    console.log(data);
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <FavoriteMovie></FavoriteMovie>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default FavoriteMovieLayout;