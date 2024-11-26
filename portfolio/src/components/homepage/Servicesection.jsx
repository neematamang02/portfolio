import React from 'react'
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {Link} from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Servicesection = () => {
  return (
    <div className="container-fluid servicesection d-flex">
        <div className="title-content text-center">
            <h5>SERVICES</h5>
            <h1 className="content text-dark">Exploring My Design <span className="content">Skills</span></h1>
            <p>We transform your ideas into a distinctive web project that both inspires you and captivates your customers</p>

        </div>
        <div className="nav-carousel d-flex justify-content-end">
          <BsArrowLeftCircle fontSize={"50px"}/>
          <BsFillArrowRightCircleFill fontSize={"50px"}/>



        </div>

        <div className="slides d-flex">
          
          <div className="container box d-flex">
            <img src="./icons/designicon.png" alt="designicon" />
            <h2 style={{fontWeight:"bold"}}>Website / App Design UX / UI Design</h2>
            <p>Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design</p>
            <button className="upload-btn">learn more <FaArrowRightLong/></button>

          </div>

          <div className="container box d-flex">
            <img src="./icons/designicon.png" alt="designicon" />
            <h2 style={{fontWeight:"bold"}}>Website / App Design UX / UI Design</h2>
            <p>Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design</p>
            <button className="upload-btn">learn more <FaArrowRightLong/></button>

          </div>
          <div className="container box d-flex">
            <img src="./icons/designicon.png" alt="designicon" />
            <h2 style={{fontWeight:"bold"}}>Website / App Design UX / UI Design</h2>
            <p>Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design</p>
            <button className="upload-btn">learn more <FaArrowRightLong/></button>

          </div>
          <div className="container box d-flex">
            <img src="./icons/designicon.png" alt="designicon" />
            <h2 style={{fontWeight:"bold"}}>Website / App Design UX / UI Design</h2>
            <p>Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design</p>
            <button className="upload-btn">learn more <FaArrowRightLong/></button>

          </div>

        </div>
      
    </div>
  )
}

export default Servicesection
