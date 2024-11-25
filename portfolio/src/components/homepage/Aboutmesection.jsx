import React from 'react'


const Aboutmesection = () => {
  return (
    <div className="container-fluid">
         <div className="row align-items-center row-content">
            

         <div class="col profile-img">
      <img src="./images/aboutme.png" alt="profileimg" />
    </div>
        <div class="col text-content">
          <h3>ABOUT ME</h3>
          <h1 className="content">20 Year's Expericence <br /><span style={{color:"black"}}>Web Development</span></h1>
          <p>Hello there! I'm Robert Junior. I specialize in web design and development, and I'm deeply passionate and committed to my craft. With 20 years of experience as a professional graphic designer</p>
          <div className="landingpage-btn d-flex">
                <button className="btn">Main skills</button>
                <button className="upload-btn">Awards</button>
                <button className="upload-btn">Education</button>

            </div>
            <div className="d-flex progressbar">
              <div className="progressline">
              <p style={{fontWeight:"bold"}}>User Experience Design - UI/UX</p>
            <div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
              </div>

<div className="progressline">
<p style={{fontWeight:"bold"}}>Web & User Interface Design - Development</p>
            <div class="progress">
  <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>

</div>


<div className="progressline">
<p style={{fontWeight:"bold"}}>Interaction Design - Animation</p>
            <div class="progress">
  <div class="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>

</div>



</div>


            

    </div>
    

        </div>
      
    </div>
  )
}

export default Aboutmesection
