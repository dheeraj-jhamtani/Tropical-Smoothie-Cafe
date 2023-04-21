import * as React from "react";
import OpenClose from "../commons/openClose";
import Defaultimage from "../../images/luxurystore.jpg"
import Cta from "../commons/cta";

type buttonorder={
  label?:string,
  link?:string
}

type Banner = {
  c_bannerSubHeading?: string;
  c_bannerHeading?: string;
  c_bannerOrderButton?: buttonorder;
  hours?: any;
  timezone: any;
  children?: React.ReactNode;
  name?:string;
};


const Banner = (props: Banner) => {
  const {c_bannerSubHeading,c_bannerHeading,c_bannerOrderButton,hours,timezone,children,name} = props;
  

  return (
    <>

      <div className="hero-section">
        {/* <img className="hero-image"
          src={c_bannerImage?c_bannerImage:Defaultimage} alt="banner" width="1" height="1" /> */}
        <div className="hero-content">
          <div className="container">
            <div className="grid grid-cols-12">
              <div className="banner-heading col-span-7">
                  {name?<h1>{name}</h1>:''}
                  {c_bannerSubHeading?<h3>{c_bannerSubHeading}</h3>:''}
                  {c_bannerHeading?<h1>{c_bannerHeading}</h1>:''}
              </div> 
              <div className={`  ${props.hours && props.timezone ? 'banner-dark-bg col-span-5': ''}`}>             
                {props.hours && props.timezone ?
                  <div className="openClosestatus">
                    <OpenClose timezone={timezone} hours={hours} deliveryHours={hours}></OpenClose>
                  </div> : ''}
                  {c_bannerOrderButton?
                  <Cta buttonText={c_bannerOrderButton.label} url={c_bannerOrderButton.link} style="primary-cta"  />
                  :''}
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
      );
};

export default Banner;
