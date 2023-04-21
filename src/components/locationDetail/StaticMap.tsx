import * as React from "react";

type markerimage ={
  height:Number;
  url:string;
  width:Number;
}

type Coordinates = {
  latitude: string;
  longitude: string;
  c_markerImage:markerimage;
};
const StaticMap = (props: Coordinates) => {
  const { latitude, longitude,c_markerImage } = props;  
  return (
    <>
      <img
          className="w-full"
          width="300"
          height="200"
          src={
            "https://maps.googleapis.com/maps/api/staticmap?center=" +
            `${latitude}` +
            "," +
            `${longitude}` +
            "&zoom=14&size=500x500&maptype=roadmap&markers=icon:"+`${c_markerImage.url}`+"%7Clabel:LL%7C" +
            `${latitude}` +
            "," +
            `${longitude}` +
            "&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18"
          }
        ></img>
    </>
  );
};

export default StaticMap;
