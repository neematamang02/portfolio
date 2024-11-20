import React from 'react'

const Navigationbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <div className="logo">
      {/* <a class="navbar-brand" href="#"><h1>AeroVision</h1></a> */}
      <h1>AeroVision</h1>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Me</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Me</a>
          </li>
       
          
        </ul>
         
        
      </div>
      <button class="btn" type="submit">Let's chat</button>
    </div>
  </nav>
  )
}

export default Navigationbar
