import { useState } from "react";
import "./Contact.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SocialLinks from "../socials/socialLink";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    try {
      const key = import.meta.env.VITE_WEB3FORMS_KEY;

      if (!key) {
        setResult("Access key missing");
        return;
      }

      const formData = new FormData(event.target);
      formData.append("access_key", key);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        setResult(data.message || "Submission failed ❌");
        console.log("Web3Forms error:", data);
      }
    } catch (error) {
      console.error("Submit error:", error);
      setResult("Network error ❌");
      console.log(import.meta.env.VITE_WEB3FORMS_KEY);
    }
  };

  return (
    <section className="contact">
      <div className="contact-grid">
        {/* Left */}
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            Feel free to reach out for collaboration, opportunities or just
            friendly chat. I'm always open to discussing new projects and ideas.
            I look forward to connect with you.
          </p>
          <div className="email-card">
            <div className="icon">
              <EmailOutlinedIcon fontSize={"large"} />
            </div>

            <div className="text">
              <p>Email</p>
              <p>ojojoel04@gmail.com</p>
            </div>
          </div>
          <div className="email-card">
            <div className="icon">
              <LocationOnOutlinedIcon fontSize={"large"} />
            </div>

            <div className="text">
              <p>Address</p>
              <p>Lagos,Nigeria</p>
            </div>
          </div>
          <div className="email-card">
            <div className="icon">
              <PhoneOutlinedIcon fontSize={"large"} />
            </div>

            <div className="text">
              <p>Phone Number</p>
              <p>+2348026923477</p>
            </div>
          </div>

          <p className="follow">Follow me on</p>
          <div className="socials">
            <SocialLinks />
          </div>
        </div>

        {/* Right */}
        <form className="contact-form" onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Your name" name="name" required />
          <label>Email</label>
          <input type="email" name="email" placeholder="Your email" required />

          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Tell me about your project..."
            required
          ></textarea>
          <button>✈ Send Message</button>
          <p>{result}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
