// src/components/TheaterList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Update this line to correctly import the CSS from the assets directory
import '../../assets/TheaterList.css';

const theaters = [
  { id: 1, name: 'Theater 1', showtimes: ['10:00 AM', '1:00 PM', '4:00 PM'] },
  { id: 2, name: 'Theater 2', showtimes: ['11:00 AM', '2:00 PM', '5:00 PM'] },
  { id: 3, name: 'Theater 3', showtimes: ['12:00 PM', '3:00 PM', '6:00 PM'] },
];

const TheaterList = () => {
  const navigate = useNavigate();

  const handleSelectSeats = (theaterId, showtime) => {
    navigate(`/seats/${theaterId}/${showtime}`);
  };

  return (
    <div className="theater-list">
      <h1>Select a Theater and Showtime</h1>
      {theaters.map((theater) => (
        <div key={theater.id} className="theater">
          <h2>{theater.name}</h2>
          <div className="showtimes">
            {theater.showtimes.map((time) => (
              <button
                key={time}
                className="showtime-button"
                onClick={() => handleSelectSeats(theater.id, time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TheaterList;
