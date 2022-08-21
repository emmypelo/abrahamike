import React from "react";



const Footer = () => {
const currentDate = new Date()
const year = currentDate.getFullYear()

  return (
    <div className="footer">
      <div className="footer__page-break" />
      <div className="footer__top">
     
      </div>
      <div className="footer__lowest">
        <p>kingleoweb</p>
        <div className="footer__lowest--copyright">
          &#169; ABRAHAMIKE {year}
        </div>
      </div>
    </div>
  );
};

export default Footer;
