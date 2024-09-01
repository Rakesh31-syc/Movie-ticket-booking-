// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/MovieCard.css'; // Assuming you have some custom styles

function MovieCard({ id, image, rating, votes, title, genre }) {
  return (
    <Link to={`/movie/${id}`} className="movie-card-link">
      <div className="w-48 m-2 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-72 object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-sm">
            <div className="flex items-center">
              <span className="flex items-center text-xs bg-red-500 px-1 rounded mr-2">
                ⭐ {rating}
              </span>
              <span>{votes} Votes</span>
            </div>
          </div>
        </div>
        
        <div className="p-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600 text-sm">{genre}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
