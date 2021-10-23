import React,{useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../Style/Navbar.css"
function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const[navbar,setNavbar]=useState(false)
    const secnavbar=()=>{
        if (window.scrollY>70){
            setNavbar(true)
        } else{
            setNavbar(false)
        }

    }
    window.addEventListener('scroll',secnavbar)
    
    return (
       
        <>
        
        <nav className={navbar? "navbar  position-fixed navbar-expand-md navbar-light bg-light active container-fluid":"navbar position-absolute bg-xs-light navbar-expand-md navbar-light bg-md-none"}>
        <div className="container-fluid ">
            <a className="navbar-brand  px-md-0 px-lg-2 px-xl-5 ms-lg-2 ms-xl-3" href="#">Navbar</a>
            <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"
            aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : 'navbar-collapse ms-lg-3'} navbar-collapse`} id="navmenu">
            <ul className="navbar-nav text-center">
                <li className="nav-item px-0 ps-md-1 px-md-2 px-lg-3 px-xl-4 px-xxl-5 ms-xl-1">
                <a className="nav-link " aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item px-0 ps-md-1 px-md-2 px-lg-3 px-xl-4 px-xxl-5 ms-xl-1">
                <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item px-0 ps-md-1 px-md-2 px-lg-3 px-xl-4 px-xxl-5 ms-xl-1">
                <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item px-0 ps-md-1 px-md-2 px-lg-3 px-xl-4 px-xxl-5 ms-xl-1">
                <a className="nav-link " >Disabled</a>
                </li>
                <li className="nav-item px-0 ps-md-1 px-md-1 px-lg-3 px-xl-4 px-xxl-5 ms-xl-1">
                <a className="nav-link " >Disabled</a>
                </li>
            
            </ul>
            </div>
        </div>
        </nav>
    
        
        </>
        
    )
}

export default Navbar