import { useState } from "react";
import { send } from "emailjs-com";
import "./Contact.css";

const envConfig = require("../env.json");

function Contact() {
  const REACT_APP_USER_ID = envConfig.USER_ID;
  const REACT_APP_SERVICE_ID = envConfig.SERVICE_ID;
  const REACT_APP_TEMPLATE_ID = envConfig.TEMPLATE_ID;

  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, toSend, REACT_APP_USER_ID)
      .then((response) => {
        console.log("Succes!", response.status, response.text);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const displayMessage = () => {
    alert("Email sent!");
  };

  return (
    <div>
      <div>{name}</div>
      <div>Contact me!</div>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name.."
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Your message...."
          value={toSend.message}
          onChange={handleChange}
        />

        <button type="submit" onClick={displayMessage}>
          Submit!
        </button>
      </form>
    </div>
  );
}
export default Contact;
