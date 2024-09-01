// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MoviesSection from './components/MoviesSection';
import CarouselComponent from './components/CarouselComponent';
import UpcomingMoviesSection from './components/UpcomingMoviesSection';
import MoviePage from './components/pages/MoviePage';
import TheaterPage from './components/pages/TheaterPage';
import SeatPage from './components/pages/SeatPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <CarouselComponent />
              <MoviesSection />
              <UpcomingMoviesSection />
            </>
          } />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/theater" element={<TheaterPage />} />
          <Route path="/seats/:theaterId/:showtime" element={<SeatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
