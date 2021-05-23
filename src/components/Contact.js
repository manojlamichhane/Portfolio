import React from "react";
import apiKey from "../emailKey";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../App.css";

function Contact(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(`service_zlisemh`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Contact me</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 92,
        }}
      >
        <div
          style={{
            width: "45%",
            height: 350,
            borderRadius: 50,
            backgroundColor: "white",
            padding: 50,
          }}
        >
          <h2>Contact</h2>
          <div
            style={{
              display: "flex",
              marginTop: 65,
            }}
          >
            <EmailIcon />
            <p>lamichhanemanoj1@gmail.com</p>
          </div>
          <div style={{ display: "flex" }}>
            <PhoneIcon />
            <p>984528964</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 60,
            }}
          >
            <div className="contactIcon">
              <a href="https://github.com/manojlamichhane">
                <GitHubIcon />
              </a>
            </div>
            <div className="contactIcon">
              <a href="https://www.linkedin.com/in/manoj-lamichhane-903a75100/">
                <LinkedInIcon />
              </a>
            </div>
            <div className="contactIcon">
              <a href="https://www.facebook.com/lamichhane.manoj">
                <FacebookIcon />
              </a>
            </div>
            <div className="contactIcon">
              <TwitterIcon />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "45%",
            height: 350,
            borderRadius: 50,
            backgroundColor: "#fbbe5c",
            justifyContent: "center",
            alignItems: "center",
            padding: 50,
          }}
        >
          <h2>Get In Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <TextField
              style={{ width: "100%" }}
              label="Name"
              name="from_name"
            />
            <TextField
              style={{ width: "100%" }}
              label="Email"
              name="from_email"
              type="email"
            />
            <TextField
              multiline
              rows={2}
              style={{ width: "100%" }}
              label="Message"
              name="message"
            />
            <Button
              style={{ width: "100%", backgroundColor: "white", marginTop: 20 }}
              type="submit"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
