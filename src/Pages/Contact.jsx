import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div class="row">
      <div className="side-content"></div>
      <div className="main-content">
        <h2>Contact Me</h2>
        <div id="contact" className="contact content-body">
          <div id="leftcontact">
            <p style={{marginTop:"5px"}}>Call me : +91-8610257833</p>
            <p>Mail me : priyadharshinir277@gmail.com</p>
            <p>Location : Chennai,TamilNadu</p>
            <div>
              <a
                target="_blank"
                href="https://github.com/Priyadharshini-hue"
                rel="noreferrer"
              >
                <img
                  title="Github"
                  alt=""
                  src="https://img.icons8.com/bubbles/100/000000/github.png"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/priyadharshini-r-247a04200/"
              >
                <img
                  title="Linkedin"
                  alt=""
                  src="https://img.icons8.com/bubbles/100/000000/linkedin.png"
                />
              </a>
            </div>
          </div>
          <div id="rightcontact">
            <form method="POST" action="https://priyadharshinir277@gmail.com">
              <input
                type="hidden"
                name="_subject"
                value="Contact request from personal website"
              />
              <input
                type="email"
                name="_replyto"
                placeholder="Your email"
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="side-content"></div>
    </div>
  );
};

export default Contact;
