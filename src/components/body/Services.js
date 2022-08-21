import React from "react";
import Accordion from "./Accordion";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="service-container">
        <h1 className="service-header overflow-hidden">our services include</h1>
      </div>
      <div className="service-body text-center">
        <Accordion className='text-center'/>

      </div>
    </div>
  );
};

export default Services;
