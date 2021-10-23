import React from 'react'
import solar from '../img/solar.jpg'
import about from '../img/about.jpg'
import bulb from '../img/bulb.jpg'
import beauty  from '../img/beauty.jpg'
import wind from '../img/wind.jpg'
import package1 from '../img/package1.jpg'
import package2 from '../img/package2.jpg'
import package3 from '../img/package3.jpg'
import package4 from '../img/package4.jpg'
import emailjs from 'emailjs-com'
import Footer from './Footer'

const Home = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_egnp8eb', 'template_iq6utsm', e.target, 'user_DF8V4MQ0JOTRnGRdgqPqE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <>
            <div className='slider'>
                <img className='homeimg' src={solar} alt='panel'></img>
                <img className='aboutusimg' src={about} alt='panel'></img>
                <div className='aboutus '>
                
                    <h1>ABOUT US</h1><br/>
                    <p>Beyondgreen Solar Solutions is one of the reputable and largest private energy providers in<br/> Pakistan. The group initiated its renewable energy division back in 2011 in brisbane, Australia.<br/>Beyondgreen Solar Solutions dilated its business to Pakistan, in 2015, to create sustainable<br/> energy that is affordable to meet Pakistan’s growing energy demand and fulfil its energy crisis.<br/> (with the same high-quality tier-1 (bloomberg listed) products.</p>
                    <br/>
                    <button>Read More</button>
                </div>
              
            </div>
            <div className="hcard">
            <br/>
            <div className='hcard1 row'>
            <div className='hcol col-md-4'>
                <div className='card '>
                <img src={wind} alt='bulbimg'></img>
                <span>TAKE ADVANTAGE OF NATURE POWER</span>
                </div>
            </div>
            <div className='hcol col-md-4'>
                <div className='card '>
                <img src={bulb} alt='bulbimg'></img>
                <span >PROVIDE CLEAN & SUSTAINABLE ENERGY</span>
                </div>
            </div>
            <div className='hcol col-md-4'>
                <div className='card '>
                <img src={beauty} alt='bulbimg'></img>
                <span>PRESERVE THE BEAUTY OF NATURE BY USING NATURE</span>
                </div>
            </div>
            </div>
            <div className='pack'>
            <br/>
            <hr/>
            <br/>
            <h2>Our Packages</h2>
            <br/>
            <br/>
            <div className='pack1 row w-100'>
                <div className='pack2 col-md-6 '>
                    <div className="card ">
                        <img src={package1} alt='package'></img> 
                    </div>
                </div>
                <div className='pack2 col-md-6'>
                    <div className="card ">
                        <img src={package2} alt='package'></img> 
                    </div>
                </div>
                
            </div>
            <div className='pack1 row  w-100'>
                <div className='pack2 col-md-6'>
                    <div className="card ">
                        <img src={package3} alt='package'></img> 
                    </div>
                </div>
                <div className='pack2 col-md-6'>
                    <div className="card ">
                        <img src={package4} alt='package'></img> 
                    </div>
                </div>
                
            </div>
            </div>
            </div> 
            <br/>
            <h2>Our Projects</h2>
            <br/>
            <hr/>
            <h2>Contact Us</h2>
            <div className='form container'>
                <br/>
                <form className='form-group' autoComplete='off' onSubmit={sendEmail}>
                    <input  type='text' className='form-control' placeholder='Name' required name='name'></input>
                    <br/>
                    <div className='row d-flex'>
                    <div className='col-md-6'>
                        <input type='tel' className='form-control' placeholder='Number' name='phone' required></input>
                    </div>
                    <div className='col-md-6' >
                        <input type='email' className='form-control mt-4 mt-md-0' placeholder='Email' name='email' required></input>
                    </div>
                    </div>
                    <br/>
                    <textarea type='text' id='msg' className='form-control msg' placeholder='Message' name='message' required></textarea>
                    <br/>
                    <button className='btn btn-success px-5'>SUBMIT</button>
                </form>
            </div>
            <br/>   
            
          <Footer/>
        </>
    )
}

export default Home
