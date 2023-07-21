import React, { useEffect, useState } from 'react'
// import './CSS/nav.css'
import {Link} from "react-router-dom"
import Logo from '../assets/images/logo2.png'
// import { Dropdown } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Navbar() {


  let [block,setblock]=useState("");

  const handlebblock = () =>{
    if(block === ""){
      setblock("none")
    }
    else{
      setblock('')
    }
  }

    useEffect(() => {
        const handleScroll = () => {
          
          const navbar = document.getElementById('navbar');
         
          const scrollPosition = window.scrollY || window.pageYOffset;
    
          if (scrollPosition > 0) {

            navbar.classList.remove('transparent');
            navbar.classList.add('visible');
   
           
            

          } else {
            navbar.classList.remove('visible');
            navbar.classList.add('transparent');
           
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, );

      const togglenav = () =>{
        const navbar = document.getElementById('navbar');
        handlebblock();

        const hamburger = navbar.querySelector('#ham')
        // const hamburger = document.querySelector("hamburger");
  
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
    
    
          // Animate Links
          navLinks.classList.toggle("open");
          navLinks.classList.toggle("open");

          navLinks.classList.toggle("open");

        //   links.forEach(link => {
        //     link.classList.toggle("fade");
        //   });
    
          // Hamburger Animation
          hamburger.classList.toggle("toggle");
        
          
      }
    
      useEffect(() => {

      }, );
    
    
    
    

  return (
    <>
        
        <nav id="navbar" style={{display:'flex',top:0}}>
        <div className="logo">
           <Link to="/"> <img style={{borderRadius: '50%',borderStyle: 'double',}} src={Logo} alt="Logo Image"/></Link>
        </div>

        <div id="ham" className='hamburger'   onClick={togglenav}>
            <div  className="line1"></div>
            <div  className="line2"></div>
            <div  className="line3"></div>
        </div>
        <ul className="nav-links">
            <li><Link onClick={togglenav} to="/">HOME</Link></li>
            <li><Link onClick={togglenav} to="/about">ABOUT US</Link></li>
            <li>

          {/* MEDIA DROP DOWN */}

        <Dropdown  >
        <Button className='togglebutton'><Link  onClick={togglenav} to='/media'>MEDIA</Link></Button>
        <Dropdown.Toggle variant='light'  className='togglearrow' id="" active/>
        <Dropdown.Menu className='aza'>
          <Dropdown.Item eventKey="1" className='dd-links' ><Link  onClick={togglenav} to='/media/maglis'>MAJLIS</Link></Dropdown.Item>
          <Dropdown.Item eventKey="2" className='dd-links' ><Link  onClick={togglenav} to='/media/milad'>MILAD</Link></Dropdown.Item>
          <Dropdown.Item eventKey="3" className='dd-links' ><Link  onClick={togglenav} to='/media/anouncement'>ANOUNCEMENTS</Link></Dropdown.Item>
      
        </Dropdown.Menu>
      </Dropdown>




            </li>
            <li>

{/* MEDIA DROP DOWN */}

<Dropdown  >
<Button className='togglebutton'><Link to='/hussain'>HUSSAIN</Link></Button>
<Dropdown.Toggle variant='light'  className='togglearrow' id="" active/>
<Dropdown.Menu className='aza'>
<Dropdown.Item eventKey="1" className='dd-links' ><Link  onClick={togglenav} to='/hussain/ashura-day'>The day of Ashura</Link></Dropdown.Item>
<Dropdown.Item eventKey="2" className='dd-links' ><Link  onClick={togglenav} to='/hussain/Arabaeen'>Arabaeen</Link></Dropdown.Item>
<Dropdown.Item eventKey="3" className='dd-links' ><Link  onClick={togglenav} to='/hussain/FAQS'>FAQs</Link></Dropdown.Item>

</Dropdown.Menu>
</Dropdown>




  </li>
            <li><Link onClick={togglenav} to="/Contactus">CONTACT US</Link></li>
            <li><Link onClick={togglenav} to="/Donate"><button className="login-button">DONATE</button></Link></li>
      <li><Link to="/join"><button className="join-button" onClick={togglenav} >JOIN OUR TEAM</button></Link></li>
        
        
        </ul>
        
        <div style={{marginLeft:'62vw',marginTop:'1.5rem',position:'absolute'}}>
    <button style={{display:`${block}`}} className="block md:hidden rounded login-button1 px-4 py-3">
      DONATE
    </button>
</div>
        </nav>
      
    </>
  )
}
