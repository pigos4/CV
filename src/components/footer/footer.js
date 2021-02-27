import "./footer.css";
import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <p>You can contact me here</p>
      <input type="text" placeholder="Name"></input><br></br>
      <input type="text" placeholder="Number"></input><br></br>
      <input type="text" placeholder="Text"></input><br></br>
      <input type="button" value="submit"></input>
      
    </div>
  );
}

export default Footer;
