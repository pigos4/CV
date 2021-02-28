import { React,useState} from "react";
import "./footer.css";
const emailjs = require("emailjs-com");

function Footer() {
  const [result,setResult]=useState("")
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
          setResult(result.text);
        },
        (error) => {
          setResult(error.text)
        }
      );
  }

  return (
    <>
      <div className="footer">
        <p>
          Drop me an e-mail at pigos487@gmail.com or simply fill out the form
          below and I will reply to you soon!
        </p>
        <form className="contact-form" onSubmit={SendEmail}>
          <input type="number" name="contact_number" placeholder="Number" />
          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="email" />
          <br></br>
          <textarea name="text" placeholder="Message" />
          <br></br>
          <input type="submit" value="Send" />
        </form>
        {result}
      </div>
    </>
  );
}
export default Footer;
