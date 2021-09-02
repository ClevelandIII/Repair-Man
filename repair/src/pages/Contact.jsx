import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <form action="submit">
        <div className="nforums">
          <input type="text" className="fname" placeholder="enter first name"/>
          <input type="text"className="lname" placeholder="enter last name"/>
        </div>
        <div className="question">
          <input type="text" placeholder="text" className="questinput"/>
        </div>
        <button>Send the Message</button>
      </form>
    </div>
  );
};

export default Contact;
