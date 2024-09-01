import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  return (
    <div style={{ maxWidth: '900px', margin: 'auto' }}> 
      <Carousel interval={1000} style={{ maxHeight: '350px' }}> 
        <Carousel.Item>
          <img
            className="d-block w-500"
            src="https://wallpapercave.com/wp/wp13464489.jpg" 
            alt="First slide"
            style={{ objectFit: 'contain', maxHeight: '350px', }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-500"
            src="https://wallpapercave.com/wp/wp2415376.jpg"  
            alt="Second slide"
            style={{ objectFit: 'contain', maxHeight: '350px' }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-500"
            src="https://wallpapercave.com/wp/wp1867293.jpg"  
            alt="Third slide"
            style={{ objectFit: 'contain', maxHeight: '350px' }} 
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
