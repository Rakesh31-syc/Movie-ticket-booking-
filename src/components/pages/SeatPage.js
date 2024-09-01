// src/pages/SeatPage.js
import React, { useState } from 'react';
// Correct the path to import SeatPage.css
import '../../assets/SeatPage.css';

const SeatPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (row, seat) => {
    const seatId = `${row}-${seat}`;
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seatId)
        ? prevSelected.filter((s) => s !== seatId)
        : [...prevSelected, seatId]
    );
  };

  return (
    <div>
      <h1>Select Your Seats</h1>
      <div className="seating-chart">
        {[...Array(10)].map((_, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {[...Array(10)].map((_, seatIndex) => (
              <div
                key={seatIndex}
                className={`seat ${
                  selectedSeats.includes(`${rowIndex}-${seatIndex}`)
                    ? 'selected'
                    : ''
                }`}
                onClick={() => handleSeatClick(rowIndex, seatIndex)}
              >
                {seatIndex + 1}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatPage;
