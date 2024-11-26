import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import Aboutmesection from './Aboutmesection';
import Servicesection from './Servicesection';

const Landingpage = () => {
  return (
    <div className="container-fluid landingpg">
      <div className="titlepage">
        <div className="row align-items-center row-content">
        <div class="col text-content">
            <h4>Welcome to my portfolio</h4>
            <h1>Hi i'm <br />Nima Tamang <br />Website Developer</h1>
            <p>Collaborating with highly skilled individuals, our agency delivers top-quality services.</p>
            <div className="landingpage-btn d-flex">
                <button className="btn">Hire me</button>
                <button className="upload-btn">Download CV <MdOutlineFileDownload style={{fontSize:"25px"}}/></button>

            </div>
      
    </div>
    <div class="col profile-img">
      <img src="./images/profileimg.png" alt="profileimg" />
    </div>

        </div>
        </div>
        
        <div className="container-fluid software-section d-flex">
          <img src="./icons/icon1.png" alt="icons" />
          <img src="./icons/icon2.png" alt="icons" />
          <img src="./icons/icon3.png" alt="icons" />
          <img src="./icons/icon4.png" alt="icons" />
          <img src="./icons/icon5.png" alt="icons" />
          

        </div>

        <Aboutmesection/>
        <Servicesection/>
        
      
    </div>
  )
}

export default Landingpage
