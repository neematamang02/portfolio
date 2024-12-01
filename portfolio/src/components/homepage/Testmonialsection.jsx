import React from 'react'
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";


const Testmonialsection = () => {
  return (
    <div className="container-fluid testmonialsection">
        <div className="titlesection">
        <h3>TESTMONIALS</h3>
        <h1>The Trust From Clients</h1>
            
        </div>

        <div className="nav-carousel d-flex justify-content-center">
          <BsArrowLeftCircle fontSize={"50px"}/>
          <BsFillArrowRightCircleFill fontSize={"50px"}/>



        </div>
        <div className="container feedbackbox">
          <div className="clientsreview">
            <img src="./images/client1.png" alt="clients" />
            <div className="stars d-flex">
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>

            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus</p>
            <div className="clientname">
              <h2>SAVANNAH NGUYEN</h2>
              <h3>President of Sales</h3>


            </div>
          </div>

          <div className="clientsreview">
            <img src="./images/client2.png" alt="clients" />
            <div className="stars d-flex">
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>

            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus</p>
            <div className="clientname">
              <h2>SAVANNAH NGUYEN</h2>
              <h3>President of Sales</h3>


            </div>
          </div>

          <div className="clientsreview">
            <img src="./images/client3.png" alt="clients" />
            <div className="stars d-flex">
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>

            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus</p>
            <div className="clientname">
              <h2>SAVANNAH NGUYEN</h2>
              <h3>President of Sales</h3>


            </div>
          </div>

          <div className="clientsreview">
            <img src="./images/client4.png" alt="clients" />
            <div className="stars d-flex">
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>
              <FaStar color="#FFB400"/>

            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus</p>
            <div className="clientname">
              <h2>SAVANNAH NGUYEN</h2>
              <h3>President of Sales</h3>


            </div>
          </div>

        </div>
      
    </div>
  )
}

export default Testmonialsection
