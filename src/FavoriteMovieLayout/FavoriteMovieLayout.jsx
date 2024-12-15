import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Fotter";
import FavoriteMovie from "../Components/FavoriteMovie";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const FavoriteMovieLayout = () => {
  const data = useLoaderData(); // Loaded favorite movies from the backend
  const [mainData, setData] = useState(data);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://screenvault-server.vercel.app/favorites/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The movie has been removed from your favorites.",
                icon: "success",
              });
              // Update state by removing the deleted movie
              setData((prevData) => prevData.filter((movie) => movie._id !== id));
            } else {
              Swal.fire("Error", "Failed to delete the movie. Please try again.", "error");
            }
          })
          .catch((err) => {
            console.error("Error deleting movie:", err);
            Swal.fire("Error", "Failed to delete the movie. Please try again.", "error");
          });
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-11 px-6">
        {mainData.map((singleData) => (
          <FavoriteMovie
            key={singleData._id} // Provide a unique key for each movie
            singleData={singleData}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FavoriteMovieLayout;
