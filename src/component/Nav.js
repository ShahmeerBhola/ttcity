import React from 'react'
import {Link} from 'react-router-dom'
// import img from '../img/solar.jpg'
import '../Style/Nav.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'


const Nav = () => {
    return (
        <>
        <div className='nav1 '>
            <div className='container-fluid'>
            <nav className="nav2 navbar navbar-expand-md navbar-light bg-none fw-bolder mt-4 ms-1 px-md-4" >
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav text-center">
                    <li className="nav-item"><Link className='navlink text-decoration-none text-dark  px-5 px-lg-5' to='/about'>About</Link></li>
                    <li className="nav-item"><Link className='navlink text-decoration-none text-dark px-5 px-lg-5' to='/products'>Products</Link></li>
                    <li className="nav-item"><Link className='navlink text-decoration-none text-dark px-5 px-lg-5' to='/services'>Services</Link></li>
                    <li className="nav-item"><Link className='navlink text-decoration-none text-dark  px-5 px-lg-5' to='/projects'>Projects</Link></li>
                    <li className="nav-item"><Link className='navlink text-decoration-none text-dark  px-5 px-lg-5' to='/contact-us'>Contact Us</Link></li>
                    </ul>
            </div>
        </nav>
            </div>
        </div>
        </>
    )
}

export default Nav
