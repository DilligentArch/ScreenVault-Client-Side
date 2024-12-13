import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Fotter';
import { useLoaderData } from 'react-router-dom';
import Home from '../Components/Home';

const HomeLayout = () => {
    const data= useLoaderData();
    return (
        <div>
            <header><Navbar></Navbar></header>
            <main>
            <div className="container mx-auto p-4">
                    <h2 className="text-3xl font-semibold text-teal-500 text-center mb-6">Featured  Movies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     
                        {data.map((singleData) => (
                            <Home singleData={singleData} />
                        ))}
                    </div>
                </div> 
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;