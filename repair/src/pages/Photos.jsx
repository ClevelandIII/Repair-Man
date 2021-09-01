import React, { useState, useEffect } from "react";
import { photoData } from "../utils/data";

const Photos = () => {
  return <>
      <h1 className="title">Photo Gallery</h1>
      <div className="photos">
        {photoData.map((info) => {
          const { image } = info;
          return <img src={image} alt="Given" className="image" />;
        })}
      </div>
  </>;
};

export default Photos;
