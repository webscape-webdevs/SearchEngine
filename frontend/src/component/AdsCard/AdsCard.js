import React from "react";

const AdsCard = ({ ad }) => {

  return (
    <div className="adsCard" >

      <div className="adsCard-container">

        <div className="adsCard-imageContainer">
          <img className="adsCard-image" src={ad.images[0].url} alt={ad.headline} />
        </div>

        <div className="adsCard-companyName">
          <h1>{ad.company}</h1>
        </div>

        <div className="adsCard-headline">
          <h3>{ad.headline}</h3>
        </div>

        <div className="adsCard-primaryText">
          <p>{ad.primaryText}</p>
        </div>

        <div className="adsCard-description">
          <p >{ad.description}</p>
        </div>

      </div>


      <div className="adsCard-cta">
        <a style={{ textDecoration: "none", color: "white", fontSize: "25px" }} href={ad.ctaUrl} target="_blank" rel="noopener noreferrer"> {ad.cta} </a>
      </div>


    </div>
  );
};

export default AdsCard;
