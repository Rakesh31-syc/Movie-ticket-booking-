import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/MoviePage.css'; // Ensure this file exists

function MoviePage() {
  const navigate = useNavigate();

  const handleBookTickets = () => {
    navigate('/theater');
  };

  return (
    <div className="movie-page">
      <div className="movie-header">
        <div className="movie-poster">
          <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thangalaan-et00343221-1711022603.jpg" alt="Movie Poster" /> {/* Replace with your poster image path */}
        </div>
        <div className="movie-details">
          <h1>Thangalaan</h1>
          <div className="movie-rating">
            <span className="rating-star">★</span>
            <span className="rating-score">8/10</span>
            <span className="rating-votes">(58K Votes)</span>
          </div>
          <div className="movie-genre"></div>
          <div className="movie-duration">2h 36m • Action, Adventure, Historical • UA • 15 Aug, 2024</div>
          <button className="book-tickets-button" onClick={handleBookTickets}>Book tickets</button>
        </div>
      </div>

      <div className="movie-description">
        <h2>About the movie</h2>
        <p>
          During the British Raj, a fierce tribal leader Thangalaan and his tribe assist Lord Clement, a British General, 
          to trace gold in their village. While searching for the gold, the villagers earn the wrath of Aarathi, 
          an apparent sorceress.
        </p>
      </div>
    </div>
  );
}

export default MoviePage;
