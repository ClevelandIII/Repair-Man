import React, { useState, useEffect } from "react";
import { photoData } from "../utils/data";

const Photos = () => {
  return (
    <div className="home">
      {photoData.map((info) => {
        const { image } = info;
        return <img src={image} alt="Given" className="image"/>;
      })}
    </div>
  );
};

export default Photos;
