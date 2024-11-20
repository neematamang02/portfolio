import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

const Landingpage = () => {
  return (
    <div className="container-fluid landingpg">
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
        
        <div className="container-fluid software-section">
          

        </div>
      
    </div>
  )
}

export default Landingpage