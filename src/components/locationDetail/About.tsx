import * as React from "react";
import DOMParserReact from "dom-parser-react";
import RtfConverter from "@yext/rtf-converter";
import StaticMap from "./StaticMap";

export default function About(props: any) {
  const {c_aboutBackgroundImage,c_aboutHeading,c_aboutButton,c_aboutDescription,geocodedCoordinate,c_markerImage}=props;
  return (
    <>
      <div className="About-wrapper">
        {c_aboutBackgroundImage?
        <div className="About-imageWrapper">
          <img className="About-image" data-object-fit="cover" alt="" src={c_aboutBackgroundImage.url} />
          <div className="About-overlay"></div>
        </div>      
        :''
        }
        { c_aboutHeading || c_aboutDescription || c_aboutButton
        ?
        <div className="About-container container">
          <div className="grid grid-cols-12">
            <div className="About-leftSide col-span-7">
              {c_aboutHeading?
              <h2 className="About-title">{c_aboutHeading}</h2>
              :''}
              {c_aboutDescription?
              <div className="About-details">
                <div dangerouslySetInnerHTML={{ __html:RtfConverter.toHTML(c_aboutDescription?c_aboutDescription:'')}} />
              </div>
              :''}
              {c_aboutButton?              
              <a className="About-cta" href={c_aboutButton.link}>{c_aboutButton.label}</a>
              :''}
            </div>
            <div className="col-span-5">
              {geocodedCoordinate && (
                <StaticMap latitude={geocodedCoordinate.latitude} c_markerImage={c_markerImage} longitude={geocodedCoordinate.longitude} />
              )}
            </div>
          </div>
        </div>
        :''
        }        
      </div>
    </>
  )


}