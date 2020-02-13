import React from 'react';
import LazyHero from 'react-lazy-hero';
import './First.css'

function First(props) {
  return (
    <div className="First">
      <LazyHero  opacity="0" minHeight="700px"  parallaxOffset="0" imageSrc={ require('../images/sport-classic-companion.png') } className="hero-first" isCentered="true" >
        <div className="flex-container-first">
          <div className="mobile-image-first">
            <img src={ require('../images/sport-classic-companion-mobile-edit.png') }/>
          </div>
          <div className="copy-first">
              <h1>Lotions,</h1>
              <h1>extracts,</h1>
              <h1>soft gels</h1>
              <h1><span className="white">and more.</span></h1> 
            <button type="button" onClick={props.redirect} >Shop Now</button>
          </div>
        </div>  
      </LazyHero>
    </div>
  );
}

export default First;
