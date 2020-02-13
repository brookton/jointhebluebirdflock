import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Second.css'

function Second(props) {
  return (
    <div className="Second">
      <LazyHero  opacity="0" minHeight="800px"  parallaxOffset="0" imageSrc={ require('../images/lotions.jpg') } className="hero-second" isCentered="true" >
      <div className="flex-container-second">
          <div className="mobile-image-second">
            <img src={ require('../images/lotions-mobile.jpg')}/>
          </div>
          <div className="copy-second">
          <h1>Something for</h1> 
          <h1><span className="white">everyone.</span></h1>
          <button type="button" onClick={props.redirect} >Shop Now</button>
        </div>
      </div>  
      </LazyHero>
    </div>
  );
}

export default Second;
