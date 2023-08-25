import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import martysofkarbala from "../content/karbalashaheed";
import { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import Image1 from '../assets/images/ali ibne hussain.jpg'
import Image2 from '../assets/images/mhrezaa-zkpfrcQHTNs-unsplash.jpg'

import {Helmet} from "react-helmet/es/Helmet";



export default function Arabaeen() {
    document.title='Arabaeen|AZA-E-HUSSAIN'

    useEffect(() => {

        window.scrollTo(0, 0);

        AOS.init(); // Initialize AOS with the desired duration
    },);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const screenWidth = window.innerWidth
            if (screenWidth >= 768) {
                const parallaxContainer = document.querySelector('.l-section-img16');
                parallaxContainer.style.backgroundPositionY = `${scrollPosition}px`;


                const parallaxContainer1 = document.querySelector('.l-section-img17');
                parallaxContainer1.style.backgroundPositionY = `${scrollPosition-200}px`;


                // const parallaxContainer2 = document.querySelector('.l-section-img13');
                // parallaxContainer2.style.backgroundPositionY = `${scrollPosition}px`;


            }


        };




        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>


<Helmet>
        <title>Arbaeen - Aza-e-Hussain Trust of Halifax</title>
        <link rel="icon" href={"path-to-your-favicon"}/>
        <meta name="description" content="Learn about the significance of Arbaeen and the legacy of Imam Hussain ibn Ali."/>
        <meta name="keywords" content="Arbaeen, Imam Hussain, Legacy, Zainab bint Ali, Day of Arbaeen, Karbala"/>
        <meta property="og:title" content="Arbaeen - Aza-e-Hussain Trust of Halifax"/>
        <meta property="og:description" content="Learn about the significance of Arbaeen and the legacy of Imam Hussain ibn Ali."/>
      </Helmet>


            <section className='l-section wpb_row height_medium full_height valign_center container-fluid'>
                <div className="l-section-img16" data-img-width="1920" data-img-height="1080" ></div>
                <div className="l-section-overlay" style={{ background: 'linear-gradient(0deg,#130f2a,rgba(19,15,42,0.00))' }}></div>

                <div style={{
                    top: '3rem',
                    position: 'relative',
                    overflow: ' hidden', lineHeight: '4rem',

                }} className="container-fluid text-center mb-5">



                    <div className='container'>
                        <div className='row'>
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-12 col-md-8 col-lg-8'>
                                <div style={{ paddingRight: '7rem' }} className="text-left">
                                    <div className='ashuraland' style={{ color: 'white' }}>Arbaeen: Commemorating a Legacy of Justice</div>
                                    <div className="hussainlandh2">Arbaeen, observed forty days after Ashura, commemorates Hussain ibn Ali's sacrifice in the Battle of Karbala. A 7th-century leader, Hussain laid down his life for social justice. This day inspires reflection on his enduring legacy and encourages the pursuit of justice and empathy in our own lives.</div>
                                    <div className="hussainlandpara" ><p>The arabic word ‘Arbaeen’ (pronounced Arr-ba-een) translates to forty (ie fortieth day). The traditional period of mourning in Islamic culture is forty days. As such,  millions of people around the world mark the Day of Arbaeen by remembering the story of Hussain, his family and his companions.</p></div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </section>

            <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
                <div className="l-section-img5" data-img-width="1920" data-img-height="1080" ></div>
                <div className="l-section-overlay1" style={{ background: 'linear-gradient(0deg,#130f2a,rgba(19,15,42,0.00))' }}></div>

                <div style={{
                    top: '3rem',
                    position: 'relative',
                    overflow: ' hidden', lineHeight: '4rem',

                }} className="container-fluid text-center mb-5">



                    <div className='container'>
                        <div className='badge1 text-left'>HEROES OF KARBALA</div>
                        <div className='row'>

                            <div data-aos="fade-left" data-aos-duration="700" className='col-sm-12 col-md-12 col-lg-6 text-center'>
                                <div style={{}} className="text-center">
                                    {/* <div className='hussainland' style={{ color: 'white' }}>WHO IS HUSSAIN ?</div> */}
                                    <Image src={Image1} className='abbasimg' />
                                </div>

                            </div>
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-12 col-md-12 col-lg-6'>
                                <div style={{}} className="text-left">

                                    <div className='hussainland' style={{ color: 'white', fontSize: '7rem' }}>Legacy of Ali ibne <span style={{ color: '#d32f30' }}> Hussain</span></div>
                                    <div className="hussainlandh2">Experience the resonance of history with Arbaeen, a profound observance that pays homage to the indomitable spirit of Imam Hussain ibn Ali. Taking place forty days after Ashura, Arbaeen stands as a poignant reminder of Imam Hussain's unyielding commitment to justice and compassion</div>
                                    <div className="hussainlandpara" ><p>As the grandson of Prophet Muhammad, his sacrifice in the Battle of Karbala reverberates through the ages, igniting a flame of inspiration for seekers of social equity and empathy.</p></div>
                                    <div className="hussainlandpara" ><p>"Join us in commemorating Arbaeen, a time to reflect on the legacy of Imam Hussain ibn Ali, a 7th-century visionary who championed noble ideals. This day serves as a bridge between history and the present, urging us to infuse our lives with the values Imam Hussain epitomized: courage, righteousness, and unwavering dedication to societal welfare."</p></div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






            </section>






            <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
                <div className="l-section-img15" data-img-width="1920" data-img-height="1080" ></div>
                <div className="l-section-overlay1" style={{ background: 'linear-gradient(0deg,#130f2a,rgba(19,15,42,0.00))' }}></div>

                <div style={{
                    top: '3rem',
                    position: 'relative',
                    overflow: ' hidden', lineHeight: '4rem',

                }} className="container-fluid text-center mb-5">



                    <div className='container'>
                        <div className='badge1 text-left'>HEROES OF KARBALA</div>
                        <div className='row'>

                           
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-12 col-md-12 col-lg-6'>
                                <div style={{}} className="text-left">

                                    <div className='hussainland' style={{ color: 'white', fontSize: '8rem' }}>ZAINAB BINT<span style={{ color: '#d32f30' }}> ALI</span> : Exemplifying Strength and Resilience</div>
                                    <div className="hussainlandh2">Zainab bint Ali, the beloved daugter of Imam Ali ,she is the reason why we know what is Karabala</div>

                                </div>
                            </div>

                            <div data-aos="fade-left" data-aos-duration="700" className='col-sm-12 col-md-12 col-lg-6 text-center'>
                                <div style={{}} className="text-left">

                                <div className="hussainlandh2">Experience the inspiring journey of Zainab bint Ali, a beacon of strength. As the daughter of Imam Ali and sister of Imam Hussain, Zainab's resilience after the Battle of Karbala is a testament to her unwavering spirit.</div>
                                    <div className="hussainlandpara" ><p>  Her legacy embodies fortitude and principled determination, encouraging us to face challenges with grace and uphold justice and compassion.</p></div>
                                    <div className="hussainlandpara" ><p>"Join us in honoring Zainab's empowering legacy and embracing her teachings to infuse our lives with resilience and courage."</p></div>
                                    
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>






            </section>











            <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
                <div className="l-section-img17" data-img-width="1920" data-img-height="1080" ></div>
                <div className="l-section-overlay1" style={{ background: 'linear-gradient(0deg,#130f2a,rgba(19,15,42,0.00))' }}></div>

                <div style={{
                    top: '3rem',
                    position: 'relative',
                    overflow: ' hidden', lineHeight: '4rem',

                }} className="container-fluid text-center mb-5">

   

                    <div className='container'>
                        <div className='badge1 text-left'>HEROES OF KARBALA</div>
                        <div className='row'>

                            <div data-aos="fade-left" data-aos-duration="700" className='col-sm-12 col-md-12 col-lg-6'>
                                <div style={{}} className="text-left">
                                    <div className='hussainland' style={{ color: 'white',fontSize:'8.5rem' }}>THE DAY OF ARBAEEN</div>
                                    <div className="hussainlandh2">The city of Karbala in Iraq is the center of the proceedings which many pilgrims travel miles on foot to reach. As of 2016 "between 17 million and 20 million" pilgrims usually attend Arba'ein there, including about three million foreigners, most of whom are Iranians.
</div>

                                 
                                </div>

                            </div>
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-12 col-md-12 col-lg-6'>
                                <div style={{}} className="text-left">

                                    <div className="hussainlandpara" ><p>Arbaʽeen is consistently among the largest peaceful gatherings in history. Every year, huge crowds of pilgrims travel to the city of Karbala in pilgrimage to the Imam Hossein holy shrine in Karbala on Arbaʽeen Day. For example, it is over 500 km from Basra the largest city in southern Iraq where Shia predominate to Karbala. It is traveled annually on foot by Iraqi pilgrims, which takes them two weeks, or approximately one month to come from other countries like Iran. The crowds become so massive that roads are blocked for hundreds of miles.</p></div>
                                    <div className="hussainlandpara" ><p>In 2008, approximately nine million religious observers converged on Karbala to commemorate Arba'ein. In 2009, over ten million people were estimated to have reached Karbala, according to BBC News and Press TV. In 2013, 20 million pilgrims from 40 countries came for Arba'ein, according to Iranian media. A car bomb targeting worshippers returning from Karbala killed at least 20 Shiite pilgrims in January 2013.</p></div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






            </section>
        

            <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
                <div className="l-section-img4" data-img-width="1920" data-img-height="1080" ></div>
                <div className="l-section-overlay1" style={{ }}></div>

                <div style={{
                    top: '3rem',
                    position: 'relative',
                    overflow: ' hidden', lineHeight: '4rem',

                }} className="container-fluid mb-5">



                    <div className='container'>
                    <div className='text-left badge'>HIS LEGACY</div>
                        <div className='row'>
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-12 col-md-12 col-lg-6 justify-content-center'>
                                <div style={{} } className="text-left">
                                    
                                    <div className='hussainland' style={{ color: '#130f2a',fontSize:"8rem" }}>Ziyarat of Arba'ein</div>
                                   <div> <img src={Image2} className='img-fluid'/></div>
                                    <div  className="hussainlandpara"  style={{color: '#786666'}}>Pole no .765, Karbala (Iraq) </div>
                                    <div  className="hussainlandpara"  style={{color: '#786666',opacity:0.5,fontSize:'1rem'}}>Millions of people from all over the world visit the shrine Hussain in Iraq to pay their respects.</div>

                                    
                                </div>
                                </div>
                                <div data-aos="fade-left" data-aos-duration="700" className='col-sm-12 col-md-12 col-lg-6'>
                                <div style={{ }} className="text-left">
                                    {/* <div className='hussainland' style={{ color: 'white' }}>WHO IS HUSSAIN ?</div> */}
                                    <div className="hussainlandh2" style={{color: '#130f2a'}}><p>The Ziyarat Arba'ein is a prayer which is usually recited in Karbala on the day of Arba'ein. It is narrated from Safwan al-Jammaal from Imam Ja'far al-Sadiq, the sixth Shiite Imam, in which the Imam instructed him to visit Imam Husayn's mosque, and to recite a specific visitation prayer on Arba'ein by which the believer should reaffirm their pledge to Husayn's ideals. The Ziarat or prayer is a text which designates Husayn as the "inheritor" of the prophets Adam, Noah, Abraham, Moses, Jesus and Muhammad.</p></div>
                                    <div className="hussainlandpara" ><p style={{color: '#786666'}}>The Arbaeen walk, covering approximately 80 kilometers, is an homage to the martyrdom of Imam Hussain (as). It's a walk that transcends geography, connecting the hearts of millions who undertake this journey from Najaf to Karbala.</p></div>
                                    <div className="hussainlandpara" ><p style={{color: '#786666'}}>On arriving in Karbala on the day of Arbaeen, the faithful recite a prayer called Ziyarat Arbaeen, which affirms their allegiance to Hussein's ideals. The prayer designates Hussein as the “inheritor” of the message brought down by the prophets Adam, Noah, Abraham, Moses, Jesus and Muhammad. </p></div>

 
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                
                



            </section>


        </>
    )
}
