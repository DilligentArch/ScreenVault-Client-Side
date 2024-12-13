import React from 'react';
import Navbar from '../Components/Navbar';
import AddMovies from '../Components/AddMovies';
import Footer from '../Components/Fotter';

const AddMoviesLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
            <AddMovies></AddMovies>
            </main>
        <footer>
            <Footer></Footer>
        </footer>
        </div>
    );
};

export default AddMoviesLayout;