import React from 'react'

function Services() {
  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h1 className="display-3 text-white animated slideInDown">Courses</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* Categories Start */}
        <div className="container-xxl py-5 category">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
              <h1 className="mb-5">Courses Categories</h1>
            </div>
            <div className="row g-3">
              <div className="col-lg-7 col-md-6">
                <div className="row g-3">
                  <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                    <a className="position-relative d-block overflow-hidden" href>
                      <img className="img-fluid" src="img/cat-1.jpg" alt="" />
                      <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                        <h5 className="m-0">Web Design</h5>
                        <small className="text-primary">49 Courses</small>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                    <a className="position-relative d-block overflow-hidden" href>
                      <img className="img-fluid" src="img/cat-2.jpg" alt="" />
                      <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                        <h5 className="m-0">Graphic Design</h5>
                        <small className="text-primary">49 Courses</small>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                    <a className="position-relative d-block overflow-hidden" href>
                      <img className="img-fluid" src="img/cat-3.jpg" alt="" />
                      <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                        <h5 className="m-0">Video Editing</h5>
                        <small className="text-primary">49 Courses</small>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: '350px'}}>
                <a className="position-relative d-block h-100 overflow-hidden" href>
                  <img className="img-fluid position-absolute w-100 h-100" src="img/cat-4.jpg" alt="" style={{objectFit: 'cover'}} />
                  <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                    <h5 className="m-0">Online Marketing</h5>
                    <small className="text-primary">49 Courses</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Categories Start */}
        {/* Courses Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
              <h1 className="mb-5">Popular Courses</h1>
            </div>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="course-item bg-light">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="img/course-1.jpg" alt="" />
                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                      <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Read More</a>
                      <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: '0 30px 30px 0'}}>Join Now</a>
                    </div>
                  </div>
                  <div className="text-center p-4 pb-0">
                    <h3 className="mb-0">$149.00</h3>
                    <div className="mb-3">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small>(123)</small>
                    </div>
                    <h5 className="mb-4">Web Design &amp; Development Course for Beginners</h5>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />1.49 Hrs</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30 Students</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="course-item bg-light">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="img/course-2.jpg" alt="" />
                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                      <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Read More</a>
                      <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: '0 30px 30px 0'}}>Join Now</a>
                    </div>
                  </div>
                  <div className="text-center p-4 pb-0">
                    <h3 className="mb-0">$149.00</h3>
                    <div className="mb-3">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small>(123)</small>
                    </div>
                    <h5 className="mb-4">Web Design &amp; Development Course for Beginners</h5>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />1.49 Hrs</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30 Students</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="course-item bg-light">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="img/course-3.jpg" alt="" />
                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                      <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Read More</a>
                      <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: '0 30px 30px 0'}}>Join Now</a>
                    </div>
                  </div>
                  <div className="text-center p-4 pb-0">
                    <h3 className="mb-0">$149.00</h3>
                    <div className="mb-3">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small>(123)</small>
                    </div>
                    <h5 className="mb-4">Web Design &amp; Development Course for Beginners</h5>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />1.49 Hrs</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30 Students</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Courses End */}
        {/* Testimonial Start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="text-center">
              <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
              <h1 className="mb-5">Our Students Say!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
              <div className="testimonial-item text-center">
                <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style={{width: '80px', height: '80px'}} />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{width: '80px', height: '80px'}} />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style={{width: '80px', height: '80px'}} />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg" style={{width: '80px', height: '80px'}} />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
    </div>
  )
}

export default Services