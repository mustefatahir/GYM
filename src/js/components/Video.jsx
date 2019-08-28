import React from 'react'

export function Services(){
    return (
        <div className="container-fluid video-cont pt-3 pb-3">
        <div className="row video-row">
            <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsInline autoPlay="autoplay" muted loop>

                <source src="images/backgroundvideo.mp4" type="video/mp4" />

            </video>
            <div className="col-12 d-flex justify-content-center" >
                <h1 class="text-center video-heading" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Some Heading</h1>
                
            </div>
        </div>
        <div className="row d-flex">
                <div className="col-12 justify-content-center">
                <p class="video-para text-center" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, repudiandae.</p>
                </div>
            </div>
        </div>

    )

}
export default Services;