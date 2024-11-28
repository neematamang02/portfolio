import React from 'react'

const Portfoliosection = () => {
  return (
    <div className="container-fluid portfoliosection">
        <div className="titlesection">
            <h3>OUR PROJECTS</h3>
            <h1>Presenting My Design <br/>Portfolio and Case Studies</h1>
        </div>

        <div className="buttonnav d-flex">
            <button className="btn">All</button>
            <button className="upload-btn">UI/UX Design</button>
            <button className="upload-btn">Branding Design</button>
            <button className="upload-btn">Wordpress</button>

        </div>

        <div className="container previewbox d-flex">
            <div className="row">
                <div className="col prevbox">
                    <img src="./images/preview1.png" alt="preview1" />

                </div>
                <div className="col prevbox">
                <img src="./images/preview2.png" alt="preview2" />

                </div>
                <div className="col prevbox">
                <img src="./images/preview3.png" alt="preview3" />

                </div>
            </div>

            <div className="row">
    <div className="col prevbox">
    <img src="./images/preview7.png" alt="preview7" />

    </div>
    <div className="col prevbox">
    <img src="./images/preview5.png" alt="preview5" />
    </div>

    <div className="col prevbox">
    <img src="./images/preview6.png" alt="preview6" />
    </div>

</div>

        </div>
      
    </div>
  )
}

export default Portfoliosection
