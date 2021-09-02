import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <form action="submit">
        <div className="nforums">
          <input type="text" className="fname" placeholder="First Name" />
          <input type="text" className="lname" placeholder="Last Name" />
        </div>
        <div className="eforums">
          <input type="text" className="email" placeholder="Email" />
          <input type="text" className="subject" placeholder="Subject" />
        </div>
        <div className="question">
          <textarea type="text" placeholder="Question" className="questinput" />
        </div>
        <div className="bcontainer">
          <button className="finish">Send the Message</button>
        </div>
        <div className="number">
          <h1>...or call me at +16234745069</h1>
        </div>
      </form>
    </div>
  );
};

export default Contact;
