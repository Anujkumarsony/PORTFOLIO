import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos = "zoom-in"
        data-aos-duration = "1000">
          <a href="https://www.instagram.com/anujthetechnical/" target="_blank" className="items">
            <FaInstagram className="icons"/>
          </a>
          <a href="https://www.facebook.com/anuj.sony.77" target="_blank" className="items">
            <CiFacebook className="icons"/>
          </a>
          <a href="https://www.linkedin.com/in/anuj-kumar-sony-122947213/" target="_blank" className="items">
            <CiLinkedin className="icons"/>
          </a>
          <a href="https://x.com/anujkumarsony1" target="_blank" className="items">
            <FaXTwitter className="icons"/>
          </a>
          <a href="https://github.com/Anujkumarsony" target="_blank" className="items">
            <FaGithub className="icons"/>
          </a>
          <a href="mailto:anujkumarrr0@gmail.com" target="_blank" className="items">
            <SiGmail className="icons"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
