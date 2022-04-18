import "../slide/Slide.scss";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

const Slide = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <nav div className="carousel">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kfcvietnam.com.vn/uploads/banner/7d40c83e741b15cff4d2b44b17d06e7c.png"
          alt="First slide"
        />
        <Carousel.Caption>
 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kfcvietnam.com.vn/uploads/banner/bb8e434961ce7ce3fca01f834974f9c6.png"
          alt="Second slide"
        />

        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kfcvietnam.com.vn/uploads/banner/fa2e9c2b85b8228f08cc0efc8559943f.png"
          alt="Third slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kfcvietnam.com.vn/uploads/banner/6701abc0f42dcbb7590c3132994e64bf.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kfcvietnam.com.vn/uploads/banner/d0d69f34e549f5754b49ce15536d1c25.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kfcvietnam.com.vn/uploads/banner/5541d50595d63cf247bd3a2accb0e7f2.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </nav>
  );
}
export default Slide ;
