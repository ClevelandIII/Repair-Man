import React, { useState, useEffect } from "react";

const Picture = ({ img, name, info, side }) => {
  const [readMore, setReadMore] = useState(false);
  const [words, setWords] = useState(200);

  const screenResize = () => {
    setWords((window.innerWidth/2)-200);
    // if (window.innerWidth < 500) {
    //   setWords(50);
    // } else if (window.innerWidth >= 500 && window.innerWidth < 600) {
    //   setWords(100);
    // } else if (window.innerWidth >= 600 && window.innerWidth < 700) {
    //   setWords(150);
    // } else if (window.innerWidth >= 700 && window.innerWidth < 800) {
    //   setWords(200);
    // } else if (window.innerWidth >= 800 && window.innerWidth < 900) {
    //   setWords(250);
    // } else if (window.innerWidth >= 900 && window.innerWidth < 1000) {
    //   setWords(300);
    // } else if (window.innerWidth >= 1000 && window.innerWidth < 1100) {
    //   setWords(400);
    // } else {
    //   setWords(500);
    // }
  };

  useEffect(() => {
    screenResize();
    // set resize listener
    window.addEventListener("resize", screenResize);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", screenResize);
    };
  }, []);

  if (info.length <= words) {
    return (
      <>
        {side === "left" ? (
          <div className="picture">
            <img src={img} alt={name} />
            <p>{info}</p>
          </div>
        ) : (
          <div className="picture">
            <p>{info}</p>
            <img src={img} alt={name} />
          </div>
        )}
      </>
    );
  }
  return (
    <>
      {side === "left" ? (
        <div className="picture">
          <img src={img} alt={name} />
          <p>
            {readMore ? `${info}... ` : `${info.substring(0, words)}... `}
            <button
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? "show less" : "show more"}
            </button>
          </p>
        </div>
      ) : (
        <div className="picture">
          <p>
            {readMore ? `${info}... ` : `${info.substring(0, words)}... `}
            <button
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? "show less" : "show more"}
            </button>
          </p>
          <img src={img} alt={name} />
        </div>
      )}
    </>
  );
};

export default Picture;
