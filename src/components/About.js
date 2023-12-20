import React from 'react'

function About() {
  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h1 className="display-3 text-white animated slideInDown">About Us</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                   
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item text-center pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                    <h5 className="mb-3">Skilled Instructors</h5>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item text-center pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-globe text-primary mb-4" />
                    <h5 className="mb-3">Online Classes</h5>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item text-center pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-home text-primary mb-4" />
                    <h5 className="mb-3">Home Projects</h5>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="service-item text-center pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-book-open text-primary mb-4" />
                    <h5 className="mb-3">Book Library</h5>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                <div className="position-relative h-100">
                  <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{objectFit: 'cover'}} />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                <h1 className="mb-4">Welcome to eLEARNING</h1>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div className="row gy-2 gx-4 mb-4">
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Skilled Instructors</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Online Classes</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />International Certificate</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Skilled Instructors</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Online Classes</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />International Certificate</p>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5 mt-2" href>Read More</a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
              <h1 className="mb-5">Expert Instructors</h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item bg-light">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/team-1.jpg" alt="" />
                  </div>
                  <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                      <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                      <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-0">Instructor Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item bg-light">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/team-2.jpg" alt="" />
                  </div>
                  <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                      <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                      <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-0">Instructor Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item bg-light">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/team-3.jpg" alt="" />
                  </div>
                  <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                      <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                      <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-0">Instructor Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item bg-light">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/team-4.jpg" alt="" />
                  </div>
                  <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                      <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                      <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-0">Instructor Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
    </div>
  )
}

export default About