import React from "react";
import Carousel from "react-bootstrap/Carousel";
import model1 from "../../imgs/model1.jpg";
import model2 from "../../imgs/model2.jpg";
import model3 from "../../imgs/model3.jpg";
import model4 from "../../imgs/model4.jpg";

function WorkCarousel() {
  return (
    <Carousel className="overflow-hidden">
      <Carousel.Item interval={4000} >
        <div className="container">
            <div className="row">
                <div className="col">
                <img className="d-block carousel-img overflow-hidden" src={model1} alt="First slide" />
                </div>
                <div className="col">
                <img className="d-block carousel-img overflow-hidden" src={model2} alt="First slide" />
                </div>
            </div>
        </div>
        
      </Carousel.Item>

      <Carousel.Item interval={4000} >
        <div className="container">
            <div className="row">
                <div className="col">
                <img className="d-block carousel-img overflow-hidden" src={model3} alt="First slide" />
                </div>
                <div className="col">
                <img className="d-block carousel-img overflow-hidden" src={model4} alt="First slide" />
                </div>
            </div>
        </div>
        
      </Carousel.Item>

      
    </Carousel>
  );
}

export default WorkCarousel;
