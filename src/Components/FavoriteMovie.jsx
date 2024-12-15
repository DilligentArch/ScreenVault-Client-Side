import React from "react";

const FavoriteMovie = ({ singleData }) => {
  const { _id, title, genre, duration, releaseYear, rating, poster } = singleData;
    //  const handleDelete=()=>{

    //  }
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Movie Poster */}
      <img
        src={poster}
        alt={title}
        className="w-full h-[33rem]"
      />
      <div className="p-4">
        {/* Movie Title */}
        <h3 className="text-xl font-bold text-teal-600">{title}</h3>
        {/* Movie Details */}
        <p className="text-sm text-gray-500">Genre: {genre}</p>
        <p className="text-sm text-gray-500">Duration: {duration} mins</p>
        <p className="text-sm text-gray-500">Release Year: {releaseYear}</p>
        <p className="text-sm text-gray-500">Rating: {rating}/5</p>
        {/* Delete Favorite Button */}
        {/* () => handleDelete(_id) */}
        <button
         
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Delete Favorite
        </button>
      </div>
    </div>
  );
};

export default FavoriteMovie;
