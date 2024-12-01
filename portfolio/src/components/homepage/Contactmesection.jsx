import React from 'react'

const Contactmesection = () => {
  return (
    <div className="container-fluid contactmesection">
        <div className="titlesection">
        <h4>CONTACT ME</h4>
        <h2>Request Free Consultancy</h2>

        </div>

        <div className="container contactbox d-flex">
            <div className="contactdetails d-flex">
                <div className="numbers">
                    <p style={{fontWeight:"bold"}}>Hotline 24/7</p>
                    <h3 style={{fontWeight:"bold"}}>(+23) 5535 68 68</h3>

                </div>
                <div className="address">
                    <li><b>Address:</b> 2972 Westheimer Rd. Santa Ana, Illinois 85486 </li>
                <li><b>Email:</b> nevaeh.simmons@example.com</li>
                <li><b>Fax:</b> (702) 555-0122</li>
                <li><b>Work Hour:</b> Mon - Sat: 9:00 - 18:00</li>

                </div>

            </div>

            <div className="contactform">
            <form>
  <div class="form-row d-flex">
    <div class="form-group col">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Name*"/>
    </div>
    <div class="form-group col">
      <input type="password" class="form-control" id="inputPassword4" placeholder="Email*"/>
    </div>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="inputAddress" placeholder="How can we help you?"/>
  </div>
  <div class="form-group">
    <textarea name="comments" id="textarea" class="form-control" placeholder="How can we help you?"></textarea>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
      By submitting, i’m agreed to the Terms & Conditons
      </label>
    </div>
  </div>
  <button type="submit" class="requestbtn btn-primary">Sign in</button>
</form>



            </div>

        </div>
      
    </div>
  )
}

export default Contactmesection
