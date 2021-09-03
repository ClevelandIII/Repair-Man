import React, { useState, useEffect } from "react";
import { photoData } from "../utils/data";

const Photos = () => {
  return <div className="photos">
      <h1 className="title">Photo Gallery</h1>
      <div className="gallery">
        {photoData.map((info) => {
          const { image } = info;
          return <img src={image} alt="Given" className="image" />;
        })}
      </div>
  </div>;
};

export default Photos;
