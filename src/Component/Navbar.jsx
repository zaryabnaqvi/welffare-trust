import React, { useEffect, useState } from 'react'
// import './CSS/nav.css'
import {Link} from "react-router-dom"
import Logo from '../assets/images/logo2.webp'
// import { Dropdown } from 'react-bootstrap';

// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
export default function Navbar() {



  const [check, setCheck] = useState(false);

  const [check1, setCheck1] = useState(false);

  const [check2, setCheck2] = useState(false);

  const [check3, setCheck3] = useState(false);

  // Function to toggle the dropdown on small screens


  const handleDropdownToggle = () => {
   if(check===false){
    setCheck(true)
   }else{
    setCheck(false)
   }
  };

  const handleDropdownToggle1 = () => {

    if(check1===false){
     setCheck1(true)
    }else{
     setCheck1(false)
    }
   };

  // Function to close the dropdown on resize for big screens


  // Attach event listeners on component mount and remove them on unmount
   













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

        
          const navbar = document.getElementById('navbar');
          if(document.title==='About Us|Aza-e-Hussain Trust' || document.title==='Contact Us|Aza-e-Hussain Trust' || document.title === 'MEDIA|AZA-E-HUSSAIN' || document.title==="Know more about Imam Hussain"){
            navbar.classList.remove('transparent');
            navbar.classList.add('visible');
          }else{
            navbar.classList.remove('visible');
            navbar.classList.add('transparent');
          }

        

        const handleScroll = () => {
          
          const navbar = document.getElementById('navbar');
         
          const scrollPosition = window.scrollY || window.pageYOffset;


         
          if(document.title==='About Us|Aza-e-Hussain Trust' || document.title==='Contact Us|Aza-e-Hussain Trust' || document.title === 'MEDIA|AZA-E-HUSSAIN' || document.title==="Know more about Imam Hussain"){
            navbar.classList.remove('transparent');
            navbar.classList.add('visible');

          }else{
          
    
          if (scrollPosition > 0) {

            navbar.classList.remove('transparent');
            navbar.classList.add('visible');
   
           
            

          } else {
            navbar.classList.remove('visible');
            navbar.classList.add('transparent');
           
          }

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
      
                if(window.innerWidth >= 600){
                  setCheck2(true)
                }else{
                  setCheck2(false)
                }

                if(window.innerWidth >= 600){
                  setCheck3(true)
                }else{
                  setCheck3(false)
                }
  
      
        } );
  
    
    
    
    

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

        {/* <Dropdown  >
        <Button className='togglebutton'><Link  onClick={togglenav} to='/media'>MEDIA</Link></Button>
        <Dropdown.Toggle variant='light'  className='togglearrow' id="" active/>
        <Dropdown.Menu className='aza'>
          <Dropdown.Item eventKey="1" className='dd-links' ><Link  onClick={togglenav} to='/media/maglis'>MAJLIS</Link>           </Dropdown.Item>
          <Dropdown.Item eventKey="2" className='dd-links' ><Link  onClick={togglenav} to='/media/milad'>MILAD</Link>             </Dropdown.Item>
          <Dropdown.Item eventKey="3" className='dd-links' ><Link  onClick={togglenav} to='/media/anouncement'>ANOUNCEMENTS</Link></Dropdown.Item>
      
        </Dropdown.Menu>
      </Dropdown> */}
        <div key={7} className={`${ check ?"dropDown dropDown-hover":'dropDown'}`}  >
      <button key={56} className="dropBtn" ><Link to='/media/majlis' onClick={togglenav}>MEDIA</Link> 
      <i key={9} className="fa fa-caret-down" onClick={handleDropdownToggle} style={{display:`${check2 ? 'none':''}`,marginLeft:'15px',transform:`${check ? 'rotateX(180deg)':''}`}}></i>
      </button>
     
      <div className={`dropdownContent`} >
      <Link key={51} onClick={togglenav} to='/media/majlis'>MAJLIS</Link>           
      <Link key={52} onClick={togglenav} to='/media/jashan'>JASHAN</Link>             
      <Link key={53} onClick={togglenav} to='/media/Accouncement'>ANOUNCEMENTS</Link>
      </div>
    </div>

  
  




            </li>
            <li>

{/* MEDIA DROP DOWN */}

{/* <Dropdown  >
<Button className='togglebutton'><Link  onClick={togglenav} to='/hussain'>HUSSAIN</Link></Button>
<Dropdown.Toggle variant='light'  className='togglearrow' id="" active/>
<Dropdown.Menu className='aza'>
<Dropdown.Item eventKey="1" className='dd-links' ><Link  onClick={togglenav} to='/hussain/ashura-day'>The day of Ashura</Link></Dropdown.Item>
<Dropdown.Item eventKey="2" className='dd-links' ><Link  onClick={togglenav} to='/hussain/Arabaeen'>Arabaeen           </Link></Dropdown.Item>
<Dropdown.Item eventKey="3" className='dd-links' ><Link  onClick={togglenav} to='/hussain/FAQS'>FAQs                   </Link></Dropdown.Item>

</Dropdown.Menu>
</Dropdown> */}

<div key={1} className={`${ check1 ?"dropDown dropDown-hover":'dropDown'}`}  >
      <button key={2} className="dropBtn" ><Link to='/hussain' onClick={togglenav}>HUSSAIN</Link> 
      <i key={34} className="fa fa-caret-down" onClick={handleDropdownToggle1} style={{display:`${check3 ? 'none':''}`,marginLeft:'15px',transform:`${check1 ? 'rotateX(180deg)':''}`}}></i>
      </button>
     
      <div className={`dropdownContent`}>
      <Link key='1'  onClick={togglenav} to='/hussain/ashura-day'>The day of Ashura</Link>
      <Link key='2'  onClick={togglenav} to='/hussain/Arabaeen'>Arabaeen</Link>
      <Link key='3'  onClick={togglenav} to='/hussain/hussain-faqs'>FAQs</Link>
      </div>
    </div>     


 
 
  </li>
            <li className='float-end'><Link onClick={togglenav} to="/Contactus">CONTACT US</Link></li>
            <li className='float-end'><Link onClick={togglenav} to="/Donate"><button className="login-button">DONATE</button></Link></li>
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
