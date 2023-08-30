import React from 'react'
import Loader from './Loader'
// import React from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import {Helmet} from "react-helmet/es/Helmet";

// import martysofkarbala from "../content/karbalashaheed";
// import { useEffect, useState } from 'react'
// import { Image } from 'react-bootstrap';
// import Image1 from '../assets/images/abbas.jpg'
import Image2 from '../assets/images/lll.webp'





export default function About() {
  document.title = 'About Us|Aza-e-Hussain Trust'


  useEffect(() => {
    window.scrollTo(0, 0);


    AOS.init(); // Initialize AOS with the desired duration
  },);
  return (
    <>


<Helmet>
        <title>About Us|Aza-e-Hussain Trust</title>
        <link rel="icon" href={"path-to-your-favicon"}/>
        <meta name="description" content="Learn about Aza-e-Hussain Trust of Halifax and its mission to spread the true message of Islam."/>
        <meta name="keywords" content="Aza-e-Hussain, Trust, Halifax, Islam, Shia, True Message"/>
        <meta property="og:title" content="About Us - Aza-e-Hussain Trust of Halifax"/>
        <meta property="og:description" content="Learn about Aza-e-Hussain Trust of Halifax and its mission to spread the true message of Islam."/>
      </Helmet>


      <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
        <div className="l-section-img4" data-img-width="1920" data-img-height="1080" ></div>
        <div className="l-section-overlay1" style={{}}></div>

        <div style={{
          top: '3rem',
          position: 'relative',
          overflow: ' hidden', lineHeight: '4rem',
          paddingTop: '5rem'

        }} className="container-fluid mb-5">



          <div className='container'>


            <div className='hussainland' style={{ color: '#130f2a', fontSize: "8rem" }}>WHO WE ARE ?</div>
            <div className='row'>
              <div data-aos="fade-right" data-aos-duration="700" className='col-sm-12 col-md-12 col-lg-6 justify-content-center'>
                <div style={{}} className="text-left">


                  <div> <img src={Image2} className='img-fluid' /></div>
                  <div className="hussainlandpara" style={{ color: '#786666' }}>AZA-E-HUSSAN, Halifax (Canada) </div>



                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="700" style={{ alignItems: 'center' }} className='col-sm-12 col-md-12 col-lg-6 justify-content-center align-items-center'>
                <div style={{}} className="text-left justify-content-center align-items-center pt-5">
                  {/* <div className='hussainland' style={{ color: 'white' }}>WHO IS HUSSAIN ?</div> */}
                  <div className="hussainlandh2" style={{ color: '#130f2a' }}><p>We, Shias, regard Ali(as) as the first Imam after Prophet Muhammad(saw), and consider him and his descendants the rightful successors to Prophet Muhammad(saw), all of whom are members of the Ahl al-Bayt, the household of Prophet Muhammad(saw), while Sunnis consider Ali(as) the fourth and final of the Rashidun (rightly guided Caliphs).</p></div>
                  <div className="hussainlandpara" ><p style={{ color: '#786666' }}>Aza-e-Hussain is committed to providing opportunities and facilities for all its members, in following Islam and promoting the true teachings of Islam in accordance with Fiqah-e-Jaffaria, and to increase fellowship and foster respect towards other religious organizations. Aza-e-Hussain has been serving Shia Muslims in preserving their faith and cultural values along with the true form of Islam taught by Prophet Muhammad(saw), Ali(as), and their progenies</p></div>
                  <div className="hussainlandpara" ><p style={{ color: '#786666' }}>Aza-e-Hussain Trust of Halifax main purpose is to spread the true message of Islam and help people understand the true face of Islam against the defaced form used by the Terrorists. The Shia Faith has always stood against inhumanity and tyranny since the inception of Islam and till date Shia Muslims stand united against Terrorism. Hardly a day passes by when shia muslim(s) is not martyred around the world by the Terrorists. But that has not stopped shia muslims from spreading the true message of Islam taught by Prophet Muhammad(saw) and his progenies. It is important to know that the Terrorists hate shia muslims more than non-muslims or any other community in the world. Only because We stand firmly against them, against the defaced form of Islam.</p></div>


                </div>

              </div>
            </div>
          </div>
        </div>






      </section>





      <section className='l-section wpb_row height_medium full_height valign_center container-fluid'>
        <div className="l-section-img5" data-img-width="1920" data-img-height="1080" style={{/*{ backgroundPositionY: `${newBackgroundPositionY}px` }*/ }}></div>
        <div className="l-section-overlay" style={{ background: 'linear-gradient(0deg,#130f2a,rgba(19,15,42,0.00))' }}></div>

        <div style={{
          top: '3rem',
          position: 'relative',
          overflow: ' hidden', lineHeight: '4rem',

        }} className="container-fluid text-center mb-5">



          <div className='container'>



            <div data-aos="fade-right" data-aos-duration="700" className='hussainland' style={{ color: 'white' }}>“<span style={{ color: '#d32f30' }}>Hussain</span> is of myself and I am of <span style={{ color: '#d32f30' }}>Hussain</span>. O' <span style={{ color: '#d32f30' }}>Allah</span> be pleased with those who please <span style={{ color: '#d32f30' }}>Hussain</span> and hate those who hate <span style={{ color: '#d32f30' }}>Hussain</span>."</div>
            <div data-aos="fade-left" data-aos-duration="700" className='badge'>HOLY PROPHET PBUH</div>

          </div>
        </div>




      </section>


      <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
        <div className="l-section-img14" data-img-width="1920" data-img-height="1080" ></div>
        <div className="l-section-overlay1" style={{ background: "rgba(40,0,0,0.53)" }}></div>

        <div style={{
          top: '3rem',
          position: 'relative',
          overflow: ' hidden', lineHeight: '4rem',

        }} className="container-fluid text-center mb-5">



          <div className='container'>
            <div className='badge1 text-left'>OUR BELIEVE</div>
            <div className='row'>
              <div data-aos="fade-right" data-aos-duration="700" className='col-sm-6 col-md-12 col-lg-6'>
                <div style={{}} className="text-left">

                  <div className='hussainland' style={{ color: 'white', fontSize: '8rem' }}>AL-GHADEER</div>
                  <div className="hussainlandh2">After completing his last pilgrimage (Hajjatul-Wada’), Prophet[saw] was leaving Makkah toward Madinah, where he and the crowd of people reached a place called Ghadir Khumm (which is close to today’s al-Juhfah). It was a place where people from different provinces used to greet each other before taking different routes for their homes.</div>


                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="700" className='col-sm-6 col-md-12 col-lg-6'>
                <div style={{}} className="text-left">
                  {/* <div className='hussainland' style={{ color: 'white' }}>WHO IS HUSSAIN ?</div> */}
                  <div className="hussainlandh2">Eid-e-Ghadeer is an important event in Shia Islamic history that commemorates the occasion of Ghadeer Khumm. It took place on the 18th of Dhul Hijjah, in the final year of Prophet Muhammad's life, shortly after his last pilgrimage (Hajj) to Mecca.</div>
                  <div className="hussainlandpara" ><p>According to Shia tradition, on this day, at a place called Ghadeer Khumm, Prophet Muhammad publicly declared Imam Ali ibn Abi Talib as his successor and the leader (Mawla) of the Muslim community after him. This declaration is known as the "Wilayah" or "Appointment" of Imam Ali.</p></div>
                  <div className="hussainlandpara" ><p>Shia Muslims consider the event of Ghadeer Khumm and the appointment of Imam Ali as the rightful successor to Prophet Muhammad as a crucial moment in Islamic history. It holds significant spiritual and leadership implications in Shia theology and forms an essential part of their religious observances. On Eid-e-Ghadeer, Shia Muslims celebrate and reflect on the leadership of Imam Ali and its importance in guiding the Muslim community after the passing of the Prophet.</p></div>

                </div>

              </div>
            </div>
          </div>
        </div>






      </section>


      <section className='container-fluid l-section wpb_row height_medium valign_center'>

        <div className="" style={{}}></div>

        <div style={{
          top: '3rem',
          position: 'relative',
          overflow: ' hidden', lineHeight: '4rem'

        }} className="container-fluid mb-5">



          <div className='container'>


          
            <div className='row'>

              <div data-aos="fade-right" data-aos-duration="700" className='col-sm-12 col-md-6 col-lg-4'>
                <Link style={{textDecoration:'none'}} to='/hussain'>
                <div  className="text-left aboutcard">
                <i className="fa-regular fa-heart aboutcard-icon"></i><br />
                <div className='aboutcard-title' >About Imam Hussain</div>
                <div className='aboutcard-text'>Read more abut Imam hussain and their timeless legacy inspiring and vanishing justice</div>
                <i style={{fontSize:'2rem'}} class="fa-solid fa-arrow-right move"></i>


            
              


                </div>
                </Link>
              </div>
              <div data-aos="fade-right" data-aos-duration="700" className='col-sm-12 col-md-6 col-lg-4'>
              <Link style={{textDecoration:'none'}} to="/media/majlis">

                <div  className="text-left aboutcard">
                <i className="fa-regular fa-newspaper fa-bounce aboutcard-icon"></i><br />
                <div className='aboutcard-title' >Media</div>
                <div className='aboutcard-text'>Stay connected get latest nofications of Accouncements,Majlis and Event.</div>
                <i style={{fontSize:'2rem'}} class="fa-solid fa-arrow-right move"></i>






                </div>
                </Link>
              </div>
              <div data-aos="fade-right" data-aos-duration="700" className='col-sm-12 col-md-6 col-lg-4'>
              <Link style={{textDecoration:'none'}} to='/faqs'>

                <div  className="text-left aboutcard">
                <i className="fa-solid fa-question fa-beat-fade aboutcard-icon"></i><br />
                <div className='aboutcard-title' >FAQs</div>
                <div className='aboutcard-text'>Frequently asked questions about the trust, and who we are and what we want.</div>
                <i style={{fontSize:'2rem'}} class="fa-solid fa-arrow-right move"></i>






                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        





      </section>

  


    </>
  )
}
