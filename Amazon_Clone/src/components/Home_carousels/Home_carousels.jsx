// src/components/MyCarousel.js

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css"; // Import Flickity styles
import a1 from "../../assets/amazon1.jpg";
import a2 from "../../assets/amazon2.jpg";
import a3 from "../../assets/amazon3.jpg";
import a4 from "../../assets/amazon4.jpg";
import a5 from "../../assets/amazon5.jpg";

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: true,
  pageDots: false,
  fade: true,
};

const Home_carousels = () => {
  return (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={flickityOptions}
      reloadOnUpdate
      static
    >
      <div className="carousel-cell" style={{ height: "300px" }}>
        <img src={a1} alt="Slide 1" />
      </div>
      <div className="carousel-cell" style={{ height: "300px" }}>
        <img src={a2} alt="Slide 2" />
      </div>
      <div className="carousel-cell" style={{ height: "300px" }}>
        <img src={a3} alt="Slide 3" />
      </div>
      <div className="carousel-cell" style={{ height: "300px" }}>
        <img src={a4} alt="Slide 4" />
      </div>
      <div className="carousel-cell" style={{ height: "300px" }}>
        <img src={a5} alt="Slide 5" />
      </div>
    </Flickity>
  );
};

export default Home_carousels;
