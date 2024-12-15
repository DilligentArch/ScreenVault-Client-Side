import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Fotter';
import FavoriteMovie from '../Components/FavoriteMovie';
import { useLoaderData } from 'react-router-dom';
const FavoriteMovieLayout = () => {
    const data= useLoaderData();
   
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
                     
                     {data.map((singleData) => (
                         <FavoriteMovie singleData={singleData} />
                     ))}
                 </div>
            <Footer></Footer>
        </div>
    );
};

export default FavoriteMovieLayout;