// src/components/FullScreenSearch.js

import React, { useRef, useEffect, useState } from 'react';
import './FullScreenSearch.css';

const FullScreenSearch = ({ closeSearch }) => {
    const searchRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    const popularSearches = [
        'Inception',
        'Interstellar',
        'Avengers',
        'The Dark Knight',
        'Parasite'
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                closeSearch(); // Close the full-screen search when clicking outside the search bar
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeSearch]);

    useEffect(() => {
        if (searchQuery) {
            setFilteredMovies(
                popularSearches.filter(movie =>
                    movie.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredMovies(popularSearches);
        }
    }, [searchQuery]);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchItemClick = (movie) => {
        setSearchQuery(movie);
        closeSearch(); // Optionally close the full-screen search after selecting a movie
    };

    return (
        <div className="fullscreen-search">
            <div className="search-bar-container" ref={searchRef}>
                <input 
                    type="text" 
                    placeholder="Search for Movies, Events, Plays, Sports, etc." 
                    autoFocus 
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                <button onClick={closeSearch}>X</button>
            </div>
            <div className="popular-searches">
                <h3>Popular Searches</h3>
                <ul>
                    {filteredMovies.map(movie => (
                        <li 
                            key={movie} 
                            onClick={() => handleSearchItemClick(movie)}
                            className="search-item"
                        >
                            {movie}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FullScreenSearch;
