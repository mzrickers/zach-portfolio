import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  // const [done, setDone] = useState(false)
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x2fdzxj",
        "template_mj6cdix",
        formRef.current,
        "user_kFPNtNmpynlnMcdt0Wd4p"
      )
      .then(
        (result) => {
          console.log(result.text);
          // setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +420 608 293 899 
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              mzrickers@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              2359 Sobotecka, Praha-2 
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {/* {done && "Thank you..."} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
