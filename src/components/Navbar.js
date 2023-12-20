import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary"><i className="fa fa-book me-3" />Shiza School</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active"  >Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/ser" className="nav-item nav-link">Courses</Link>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu fade-down m-0">
                <a href="team.html" className="dropdown-item">Our Team</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
              </div>
            </div>
            <Link to="/con" className="nav-item nav-link">Contact</Link>
          </div>
          <a href className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3" /></a>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  )
}

export default Navbar