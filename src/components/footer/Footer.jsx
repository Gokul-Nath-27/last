import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {

  return (
    <div className="footer">
      <div className="flex container1">

        <div className="block1">
          <h4 className="heading">CONTACT</h4>
          <p className="address">
            For futher Details and queries, Please do contact our Faculties
          </p>
          <div className="contact-flex">
          <div class="box">
            <div class="content">
            Dr R. Kaladevi <br />
            +91 9710074931
            </div>
          </div>
          <div class="box">
            <div class="content">
            Dr V.UmaRani  <br />
            +91 8610352527 
            </div>
          </div>
          </div>
          
        </div>
        <div className="block">
          <h4 className="heading">USEFUL LINKS</h4>
          <a href="#" className="links">
            Home
          </a>
          <a href="#call-for-paper" className="links">
            Call For Paper
          </a>
          <Link to="/#paper-submission" className="links">
            Paper Submission
          </Link>
          <Link to="/#contact" className="links">
            Contact
          </Link>
          <a href="#" className="links">
            Privacy Policy
          </a>
          <h4
            className="heading"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          >
            SOCIALS
          </h4>
          <div class="social-links">
            <a
              target="_blank"
              href="https://www.facebook.com/pg/SaveethaEngineeringCollegeSEC/posts/?ref=page_internal"
            >
              <FaFacebook />
            </a>
            <a target="_blank" href="https://twitter.com/SaveethaSEC/">
              <FaTwitter />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/saveethaengineeringcollege/"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/saveetha-engineering-college/"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              href="https://in.pinterest.com/saveethaengineering/"
            >
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="block">
          <h4 className="heading">LOCATION</h4>
          <p className="address">
            Saveetha Nagar, Sriperumbadur Taluk, Kanchipuram - Chennai Rd,
            Chennai, Tamil Nadu 602105
          </p>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                style={{
                  borderRadius: "10px",
                }}
                class="gmap_iframe"
                width="100%"
                src="https://maps.google.com/maps?width=250&amp;height=250&amp;hl=en&amp;q=Saveetha engineering college&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © Saveetha Engineering College, Powered by ICARSI 2023.
      </div>
    </div>
  );
};

export default Footer;