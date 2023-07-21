import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import Image1 from '../assets/images/first.jpg'
import Image2 from '../assets/images/quote-imam-hussain.png'
import Image3 from '../assets/images/mhrezaa-zkpfrcQHTNs-unsplash.jpg'
import Image4 from '../assets/images/landing2.jpg'
import Image5 from '../assets/images/mhrezaa-ozF-3ed3pPM-unsplash.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'
import MediaItem from './MediaItem';

export default function Home() {

    useEffect(() => {
        AOS.init(); // Initialize AOS with the desired duration
      }, );

    return (
    <>

            <section
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                id="home"
                className="home"
            >
                <h2 className="mt-5 ms-5 box"><span className='px-3'>AZA-E-HUSSAIN TRUST</span></h2>

                <h1 className="mt-5 ms-5">
                    WE ARE BUILDING COMPASSIONATE <br /> COMMUNITIES AROUND THE CANADA, <br /> INSPIRED BY  <span>HUSSAIN (A.S)</span>
                </h1>
                {/* <!-- <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div> --> */}
            </section>

             <section id="about" style={{
                top: '-3rem',
                position: 'relative',
                overflow: ' hidden', lineHeight: '4rem'
            }} className="container-fluid text-center">
                <b> <h1 data-aos="fade-down" data-aos-duration="1500" className="heading mt-5 mb-5">

                    OUR VISION <span style={{color: 'black'}}>&</span> MISSION
                </h1></b>
                <div className="container"></div>
                <div className="row">
                    <div data-aos="fade-right" data-aos-duration="700" className="col-lg-6 col-sm-12 col-md-12">
                        <div>
                            <img className="vision img-fluid" src={Image1} alt="Logo Image" />
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="700" className="col-sm-12 col-md-12 col-lg-6 mb-5 mt-sm-2">
                        <div style={{ paddingRight: '7rem' }} className="text-left">
                            <div className="badge" >AZA - E - HUSSAIN</div>
                            <div className="qoute">LIVE LIKE <span>ALI</span> DIE <br /> LIKE <span>HUSSAIN</span></div>
                            <div className="aboutbody" ><p>We strive to inspire unity and harmony among believers, bringing together individuals from diverse backgrounds to commemorate the universal message of Imam Hussain (AS) and foster a sense of community .</p></div>
                            <Link to="/Contactus"><button className="switch">CONTACT US <i className="fa-solid fa-arrow-right"></i></button></Link>
                        </div>

                    </div>

                </div>


            </section> 




             <section  style={{backgroundColor:'#d32f30'}} className="container-fluid text-center mb-5">
                <h1 data-aos="fade-down" data-aos-duration="1500" className="heading1" >
                    JOIN <span style={{color: 'rgb(0, 0, 0)'}}>OUR</span> TEAM
                </h1>
                <div className="container">
                    <div data-aos="fade-up" data-aos-duration="1500" className="row">

                        <div data-aos="fade-right" data-aos-duration="700" className="col-sm-12 col-md-12 col-lg-6 pb-5">
                            <div className="text-left">
                                <div style={{wordSpacing: '3px' ,color: 'rgb(255, 255, 255)'}}><b>LABAIK YA HUSSAIN</b></div>

                                <div className="quote1">A <span style={{color: 'black'}}>GLOBAL</span> MOVEMENT OF COMPASSION.</div>
                                <div className="joinourteam">Join Our Team and Embrace the Divine Journey. Be part of the Aza e Hussain Trust, dedicated to upholding the legacy of Imam Hussain (AS). Contribute to spreading his message of justice, compassion, and resilience. Together, we can make a difference and inspire change. Visit our website to join us on this sacred path.</div>
                                <Link  to="/join" ><button className="switch1 mt-4 my-5">JOIN OUR TEAM <i className="fa-solid fa-arrow-right"></i></button></Link>
                            </div>
                        </div>

                         <div data-aos="fade-left" data-aos-duration="700" className="hidden md:block col-sm-12 col-md-12 col-lg-6 mb-5 mt-5">
                            <div>
                                <img className="img-fluid" src={Image2} alt="Logo Image" />
                                <div style={{wordSpacing: '3px' ,color: 'rgb(255, 255, 255)'}}><b>LABAIK YA HUSSAIN</b></div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section> 

           

            <section data-aos="fade-up"
                data-aos-duration="1500" id="contact" className="container-fluid">
                {/* <!-- <h1 className="heading text-center">CONNECT WITH US</h1>
     --> */}
                <div data-aos="fade-up"
                    data-aos-duration="1500">
                    <div className="main-block container">
                        <div className="left-part">

                            <div style={{fontSize: '8.5rem'}} className="qoute me-lg-5 ms-5">INSPIRED BY <span>HUSSAIN</span>’<span>S</span> TIMELESS LEGACY.</div>

                        </div>
                        <form className='text-center' action="/">
                            <h1>JOIN OUR MAIL LIST FOR RECENT UPDATES</h1>
                            <div className="info">
                                <input className="fname" type="text" name="name" placeholder="Full name" />
                                <input type="text" name="name" placeholder="Email" />
                                </div>
                                <button type="submit" href="/">Suscribe</button>
                        </form>
                    </div>
                </div>
                <script>


                    ;

                </script>

            </section>

            {/* <section style="background-color: rgb(37, 37, 37);" className="faq"> --> */}
            <section style={{backgroundColor: '#d32f30'}} className="container-fluid text-center">
                <h1 data-aos="fade-down"
            data-aos-duration="700" className="heading1 text-center" style={{marginTop: '2rem', color:'white'}} id="faq">
                    LATEST
                </h1>


                <div data-aos="fade-up"
      data-aos-duration="700" style={{backgroundColor: '#d32f30'}} className="">
        <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-4">
          <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
              <a href="#" className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
                <img src={Image1} className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150"/>
                <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">What is the Arbaeen of Imam Hussein?</h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">The Arbaeen Pilgrimage marks the end of a 40-day mourning period following the day of Ashura.</p>
                    <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                  </div>
                </div>
              </a>
            </div>
            <MediaItem image={Image3} title="What is the Arbaeen of Imam Hussein?" desc="The Arbaeen Pilgrimage marks the end of a 40-day mourning period following the day of Ashura."/>
            <MediaItem image={Image4} title="What is the Arbaeen of Imam Hussein?" desc="The Arbaeen Pilgrimage marks the end of a 40-day mourning period following the day of Ashura."/>
            {/* <MediaItem image={Image5} title="What is the Arbaeen of Imam Hussein?" desc="The Arbaeen Pilgrimage marks the end of a 40-day mourning period following the day of Ashura."/> */}
           
           
         
            
          </div>
        </div>
      </div>
            </section>

            <div className="container-fluid mt-3">

            <div className='container my-5'>
            <div className='badge'>IMAM HUSSAIN A.S</div>
            <div style={{textTransform :'uppercase'}} className='qoute'>Those who <span>worship</span> God for the hope of <span>gaining</span>, they're <span>not</span> real worshipers, they're <span>merchants.</span></div>
            </div>
                
            </div>


            </>   
            )
}
