import {React,useState} from "react";
import "./footer.css";
const emailjs = require("emailjs-com");

function Footer() {
  function SendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ta5wljc",
        "template_yawjug2",
        e.target,
        "user_3XCPZAVZVJWypzx2KXKNS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (<>
  <div className="footer">
    <p>Drop me an e-mail at pigos487@gmail.com or simply fill out the form below and I will reply to you soon!</p>
    <form className="contact-form" onSubmit={SendEmail}>
      <input type="number" name="contact_number" placeholder="Number"/>
      
      <input type="text" name="user_name" placeholder="Name"/>
      
      <input type="email" name="user_email" placeholder="email"/><br></br>
      
      <textarea name="text" placeholder="Message"/><br></br>
      <input type="submit" value="Send" />
    </form>
    </div>
    </>
  );
}

// return (
//   <div className="footer">
//     <p>You can contact me here</p>
//     <input type="text" placeholder="Name"></input><br></br>
//     <input type="text" placeholder="Number"></input><br></br>
//     <input type="text" placeholder="Text"></input><br></br>
//     <input type="button" value="submit"></input>
//     <input type="button" onClick={()=>console.log('')}></input>
//     <SendEmail/>
//   </div>
// );

export default Footer;
