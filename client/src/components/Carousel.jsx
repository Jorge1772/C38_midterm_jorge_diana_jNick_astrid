import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

function HomeCarousel() {
  return (
    <Carousel style={{width:1000, paddingTop:30, paddingBottom:10 }}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/Carousel_Banner_1.jpg"
      width="1000px" alt="Cute Pug"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/Carousel_Banner_2.jpg"
      width="1000px" alt="sweet retriever"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/Carousel_Banner_3.jpg"
      width="1000px" alt="pondering puppy"
    />

  </Carousel.Item>
</Carousel>

  );
}

export default HomeCarousel;
