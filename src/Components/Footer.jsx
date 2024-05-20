import React from "react";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";

function Footer() {
  return (
    <div>
      <p className="footerSocial">Jackson Szurley</p>
      <div className="footerSocial">
        <a
          href="https://www.instagram.com/jackson_szurley/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram style={{ color: "black" }} />
        </a>
        <a
          href="https://www.facebook.com/jackson.szurley30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoFacebook style={{ color: "black" }} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
