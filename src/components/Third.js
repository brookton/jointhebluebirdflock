import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Third.css'

function Third(props) {
  return (
    <div className="Third">
      <LazyHero  opacity="0" minHeight="600px"  parallaxOffset="0" imageSrc={ require('../images/product-collage.jpg') } className="hero-third" isCentered="true" >
      <div className="flex-container-third">
          <div className="copy-third">
          <h1>Shop <span className="white">now.</span></h1> 
          <button type="button" onClick={props.redirect} >Begin self care</button>
        </div>
      </div>  
      </LazyHero>
    </div>
  );
}

export default Third;
