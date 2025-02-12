import React from "react";
import Layout from "../Layout/Layout";
import "./Contact.css";
import PageTop from "../Layout/PageTop";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      body: new FormData(e.target),
    };
    fetch("https://mechfusion.in/api/contact-us.php", requestOptions)
      .then((response) => console.log(response))
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    e.target.reset();
  };
  return (
    <Layout>
      <Helmet>
        <link rel="canonical" href={`${window.location.origin}/contact`} />
        <meta
            name="description"
            content="Mechfusion delivers expert engineering and manufacturing solutions, combining innovation and precision to meet diverse industry needs with unmatched quality."
          />
      </Helmet>
      <div className="contactContainer">
        <PageTop PageName="Contact Us" />
        <div className="contactDetails">
          <h2>get in touch with us !</h2>
          <div className="cardList">
            <div className="contactCard">
              <a
                href="https://wa.me/+918792220030/?text=let me know more about the services provided by *MechFusion*"
                target="_blank"
                rel="noreferrer"
                title="Whatsapp"
              >
                <IoPhonePortraitOutline className="contactIcon" />
              </a>

              <span className="cardhead">phone</span>
              <span className="carddetails">Phone:+91 879 222 0030</span>
              {/* <span className="carddetails">***********</span> */}
            </div>
            <div className="contactCard">
              <IoLocationOutline className="contactIcon" />
              <span className="cardhead">Address</span>
              <span className="carddetails">Bangalore</span>
              <span className="carddetails">Karnataka India</span>
            </div>
            <div className="contactCard">
              <MdMailOutline className="contactIcon" />
              <span className="cardhead">Mail</span>
              {/* <span className="carddetails">Mail to us</span> */}
              <span className="carddetails">enquiry@mechfusion.in</span>
            </div>
          </div>
        </div>
        <div className="subHeadwraper">
          <div className="subHead">
            Get in touch with Mechfusion for expert engineering solutions
            tailored to your needs. Contact us today to bring your ideas to life
            with precision and innovation!
          </div>
        </div>
        <form onSubmit={sendEmail}>
          <div className="contactForm">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
            />
            <input
              type="text"
              name="user_number"
              required
              placeholder="Your Number"
            />

            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
            />
            <textarea
              name="message"
              id=""
              placeholder="Your Message"
            ></textarea>
            <button>send message</button>
          </div>
        </form>
        <div className="contactLinks">
          <h2>Connect with us !</h2>
          <div className="iconLists">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/mechfusion_/"
            >
              <div className="contactIconWrapper">
                <FaInstagram />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://x.com/Mechfusion30088"
            >
              <div className="contactIconWrapper">
                <FaXTwitter />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/MechfusionEngineeringSolutions"
            >
              <div className="contactIconWrapper">
                <FaFacebookSquare />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/mechfusion/"
            >
              <div className="contactIconWrapper">
                <FaLinkedin />
              </div>
            </a>
          </div>
        </div>

        <div className="mapwrapper">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15543.7381864467!2d77.56922900000002!3d13.103333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19da06202f0f%3A0xf4ec8ed295f83a94!2sSuvilla%20residency!5e0!3m2!1sen!2sin!4v1733326986761!5m2!1sen!2sin"
            title="map"
            className="Contactmap"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31087.827547256784!2d77.55617278585107!3d13.100552129077107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18605dd9cf5d%3A0x1b1ce96486083bbb!2sYelahanka%20New%20Town%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1734083676675!5m2!1sen!2sin"
            className="Contactmap"
            title="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
