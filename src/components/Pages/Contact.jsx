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
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      body: new FormData(e.target)
    };
    fetch("https://mechfusion.in/api/contact-us.php", requestOptions)
      .then((response) => console.log(response))
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    e.target.reset();
  };
  return (
    // <Layout>
    //   <PageTop PageName="Contact us" />

    //   <div className="contact-container ">
    //     <form onSubmit={sendEmail} className=" ">
    //       {/* <h2>Get in Touch</h2> */}
    //       <div className="inputwrapper">
    //         <label htmlFor="user_name">Name</label>
    //         <input
    //           type="text"
    //           className=" "
    //           placeholder="Your Full Name"
    //           name="user_name"
    //           required
    //         />
    //       </div>
    //       <div className="inputwrapper">
    //         <label htmlFor="user_email">Email</label>
    //         <input
    //           type="text"
    //           className=""
    //           placeholder="Your Email Address"
    //           name="user_email"
    //           required
    //         />
    //       </div>
    //       <div className="inputwrapper">
    //         <label htmlFor="user_number">Contact Number </label>
    //         <input
    //           type="text"
    //           className=" "
    //           placeholder="Your Phone Number"
    //           name="user_number"
    //           required
    //         />
    //       </div>
    //       <div className="inputwrapper">
    //         <label htmlFor="">Your message</label>
    //         <textarea
    //           className="  "
    //           placeholder="Enter Your Message Here"
    //         ></textarea>
    //       </div>
    //       <button className=" ">Send message</button>
    //     </form>

    //     {/* <iframe
    //       title="myFrame"
    //       className=" w-[22rem] md:w-[25rem] h-[10rem] mt-10 ml-[2.5rem] md:ml-0 "
    //       src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9344122337816!2d77.56663177460582!3d13.103341511977225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19da06202f0f%3A0xf4ec8ed295f83a94!2sSuvilla%20residency!5e0!3m2!1sen!2sin!4v1708938681579!5m2!1sen!2sin"
    //     ></iframe> */}
    //   </div>
    // </Layout>
    <Layout>
      <div className="contactContainer">
        <PageTop PageName="Contact Us" />
        <div className="contactDetails">
          <h2>get in touch with us !</h2>
          <div className="cardList">
            <div className="contactCard">
              <IoPhonePortraitOutline className="contactIcon" />
              <span className="cardhead">phone</span>
              <span className="carddetails">Phone:+971-87654321</span>
              <span className="carddetails">Phone:+971-87654321</span>
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
              <span className="carddetails">Mail to us</span>
              <span className="carddetails">enquiry.mechfusion@gmail.com</span>
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
            <div className="contactIconWrapper">
              <FaInstagram />
            </div>
            <div className="contactIconWrapper">
              <FaXTwitter />
            </div>
            <div className="contactIconWrapper">
              <FaFacebookSquare />
            </div>
            <div className="contactIconWrapper">
              <FaLinkedin />
            </div>
            <div className="contactIconWrapper">
              <FaTiktok />
            </div>
          </div>
        </div>
        <div className="mapwrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15543.7381864467!2d77.56922900000002!3d13.103333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19da06202f0f%3A0xf4ec8ed295f83a94!2sSuvilla%20residency!5e0!3m2!1sen!2sin!4v1733326986761!5m2!1sen!2sin"
            title="map"
            className="Contactmap"
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
