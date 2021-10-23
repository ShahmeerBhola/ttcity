import React from 'react'
import ReactDOM from 'react-dom'
import Icon from 'react-icons-kit'
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay'
import {instagram} from 'react-icons-kit/fa/instagram'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import {eercast} from 'react-icons-kit/fa/eercast'
import {home} from 'react-icons-kit/fa/home'
import {envelope} from 'react-icons-kit/fa/envelope'
import {mobile} from 'react-icons-kit/fa/mobile'

// import { fab } from '../../node_modules/@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
// import { facebook} from '../../node_modules/@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <>
<footer className="text-center text-lg-start bg-light text-muted">
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" className="me-4 text-reset">
        <Icon icon={facebookSquare}/>
      </a>
      <a href="" className="me-4 text-reset">
      <Icon icon={youtubePlay}/>
      </a>
      <a href="" className="me-4 text-reset">
        <Icon icon={instagram}/>
      </a>
      <a href="" className="me-4 text-reset">
      <Icon icon={linkedinSquare}/>
      </a>
      {/* <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a> */}
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <Icon icon={eercast} className=" me-3"/>TECHNOCITY
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><Icon icon={home} className=" me-3"/> New York, NY 10012, US</p>
          <p>
          <Icon icon={envelope} className=" me-3"/>
            info@example.com
          </p>
          <p><Icon icon={mobile} size={22} className=" me-3"/>+ 01 234 567 88</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" >
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="#"> TECHNOCITY </a>
  </div>
</footer>
        </>
        // style="background-color: rgba(0, 0, 0, 0.05);"
    )
}

export default Footer
