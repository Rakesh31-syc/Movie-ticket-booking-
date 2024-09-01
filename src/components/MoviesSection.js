import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import '../assets/MoviesSection.css';

function MoviesSection() {
  const carouselRef = useRef(null);

  const movies = [
    {
      id: 1, 
      title: 'Kalki 2989 AD',
      genre: 'Comedy/Drama',
      rating: '7.9/10',
      votes: '75.1K',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA3MjIuNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352941-pzsgmunagx-portrait.jpg'
    },
    {
      id: 2,
      title: 'Stree 2: ',
      genre: 'Comedy/Horror',
      rating: '8.2/10',
      votes: '12.7K',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA4My42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-khjjypdaat-portrait.jpg'
    },
    {
      id: 3,
      title: 'Thangalaan',
      genre: 'Action/Adventure/Historical',
      rating: '8.8/10',
      votes: '23.1K',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICAyNi45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00343221-jhvvdffcwz-portrait.jpg'
    },
    {
      id: 4,
      title: 'Demonte Colony 2',
      genre: 'Horror/Thriller',
      rating: '7.0/10',
      votes: '300',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAxMi41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00380018-nulepkfwpv-portrait.jpg'
    },
    {
      id: 5,
      title: 'Vaazhai',
      genre: 'Drama',
      rating: '7.0/10',
      votes: '300',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICAxNS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408594-kxylmtxdpl-portrait.jpg'
    },
    {
      id: 6,
      title: 'Surya Saturday',
      genre: 'Action/Thriller',
      rating: '7.0/10',
      votes: '300',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Mi44SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00409364-yubqnnpuhy-portrait.jpg'
    },
    {
      id: 7,
      title: 'Kottukkaali',
      genre: 'Drama',
      rating: '7.0/10',
      votes: '300',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4zLzEwICA0LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408897-qqdbaknnxt-portrait.jpg'
    },
  ];

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="carousel-container">
      <h2>Recommended Movies</h2>
      <div className="carousel">
        <button className="arrow left" onClick={scrollLeft}>&lt;</button>
        <div className="movies-container" ref={carouselRef}>
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              id={movie.id}  // Pass the ID to MovieCard
              title={movie.title}
              genre={movie.genre}
              rating={movie.rating}
              votes={movie.votes}
              image={movie.image}
            />
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
}

export default MoviesSection;
