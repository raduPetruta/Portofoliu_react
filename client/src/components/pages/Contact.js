import { useState } from "react";
import { send } from "emailjs-com";
import "./Contact.css";

function Contact() {
  const userID = "up-c5SlPse__orJbh";
  const serviceID = "service_7lhq38h";
  const templateID = "template_56uac8k";

  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_7lhq38h", "template_56uac8k", toSend, "up-c5SlPse__orJbh")
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
