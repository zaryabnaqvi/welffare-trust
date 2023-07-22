import React from 'react'
import Image1 from '../assets/images/first.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useState } from 'react'

import simpleParallax from 'simple-parallax-js';




export default function Hussain() {

    useEffect(() => {

        
        AOS.init(); // Initialize AOS with the desired duration
      }, );


        useEffect(() => {
          const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const screenWidth = window.innerWidth
            if (screenWidth >= 768) {
            const parallaxContainer = document.querySelector('.l-section-img');
            parallaxContainer.style.backgroundPositionY = `${scrollPosition }px`;


            const parallaxContainer1 = document.querySelector('.l-section-img2');
            parallaxContainer1.style.backgroundPositionY = `${scrollPosition-2000}px`;


            const parallaxContainer2 = document.querySelector('.l-section-img20');
            parallaxContainer2.style.backgroundPositionY = `${scrollPosition-4000}px`;


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

            <section className='l-section wpb_row height_medium full_height valign_center container-fluid'>
                <div className="l-section-img thumnail" data-img-width="1920" data-img-height="1080" ></div>
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
                                    <div className='hussainland' style={{ color: 'white' }}>WHO IS HUSSAIN ?</div>
                                    <div className="hussainlandh2">A revolutionary leader from the seventh century named Hussain took the strongest stance in favour of moral fairness. Millions are motivated to work towards a just society by his legacy.</div>
                                    <div className="hussainlandpara" ><p>Hussain's unwavering commitment to his society's dignity in the face of corruption altered history, and his selfless stance continues to inspire hope across diverse backgrounds today.</p></div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </section>


            <section className='l-section wpb_row height_medium full_height valign_center container-fluid'>
                <div className="l-section-img5" data-img-width="1920" data-img-height="1080" style={{/*{ backgroundPositionY: `${newBackgroundPositionY}px` }*/}}></div>
                <div className="l-section-overlay" style={{ background: 'linear-gradient(0deg,#130f2a,rgba(19,15,42,0.00))' }}></div>

                <div style={{
                    top: '3rem',
                    position: 'relative',
                    overflow: ' hidden', lineHeight: '4rem',

                }} className="container-fluid text-center mb-5">



                    <div className='container'>
    
                
                                
                                    <div data-aos="fade-right" data-aos-duration="700" className='hussainland' style={{ color: 'white' }}>“<span style={{color:'#d32f30'}}>Hussain</span> is of myself and I am of <span style={{color:'#d32f30'}}>Hussain</span>. O' <span style={{color:'#d32f30'}}>Allah</span> be pleased with those who please <span style={{color:'#d32f30'}}>Hussain</span> and hate those who hate <span style={{color:'#d32f30'}}>Hussain</span>."</div>
                                    <div data-aos="fade-left" data-aos-duration="700" className='badge'>HOLY PROPHET PBUH</div>
                       
                        </div>
                    </div>
        



            </section>

           


            <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
                <div className="l-section-img1" data-img-width="1920" data-img-height="1080" ></div>
                <div className="l-section-overlay1" style={{ background: 'linear-gradient(0deg,#130f2a,rgba(19,15,42,0.00))' }}></div>

                <div style={{
                    top: '3rem',
                    position: 'relative',
                    overflow: ' hidden', lineHeight: '4rem',

                }} className="container-fluid text-center mb-5">



                    <div className='container'>
                    <div className='badge1 text-left'>EARLY LIFE</div>
                        <div className='row'>
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-6 col-md-12 col-lg-6'>
                                <div style={{} } className="text-left">
                                    
                                    <div className='hussainland' style={{ color: 'white' ,fontSize:'8rem'}}>HUSSAIN WAS KNOWN FOR HIS <span style={{color:'#d32f30'}}>INTEGRITY</span> AND HONOUR.</div>
                                    
                                </div>
                                </div>
                                <div data-aos="fade-left" data-aos-duration="700" className='col-sm-6 col-md-12 col-lg-6'>
                                <div style={{ }} className="text-left">
                                    {/* <div className='hussainland' style={{ color: 'white' }}>WHO IS HUSSAIN ?</div> */}
                                    <div className="hussainlandh2">Hussain was born in Medina in 626 AD, and was reared there by a family that was well-known for their integrity, kindness, and sense of fairness.</div>
                                    <div className="hussainlandpara" ><p>Hussain saw his grandfather, who was also the Prophet Muhammad, work to create a community that upheld morality while he was younger. Tribal wars and blatant inequality were a major problem in Arabian society before Muhammad's ascendance and the spread of Islam.</p></div>
                                    <div className="hussainlandpara" ><p>Hussain formed his ideals in this setting, and as a young man, he gained respect for his honesty all across the world.</p></div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                
                



            </section>


            <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
                <div className="l-section-img2" data-img-width="1920" data-img-height="1080" style={{ /*backgroundPositionY: `${newBackgroundPositionY}px`*/}}></div>
                <div className="l-section-overlay" style={{ background: 'linear-gradient(0deg,#130f2a,rgba(19,15,42,0.00))' }}></div>

                <div style={{
                    top: '3rem',
                    position: 'relative',
                    overflow: ' hidden', lineHeight: '4rem',

                }} className="container-fluid text-center mb-5">



                    <div className='container'>
                    <div className='badge1 text-left'>HIS STRUGGLE</div>
                        <div className='row'>
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-6 col-md-12 col-lg-6'>
                                <div style={{} } className="text-left">
                                    
                                    <div className='hussainland' style={{ color: 'white' ,fontSize:'8rem'}}>HUSSAIN REFUSED TO PLEDGE ALLEGIANCE TO A CORRUPT TYRANT. <span style={{color:'#d32f30'}}>INTEGRITY</span> AND HONOUR.</div>
                                    
                                </div>
                                </div>
                                <div data-aos="fade-left" data-aos-duration="700" className='col-sm-6 col-md-12 col-lg-6'>
                                <div style={{ }} className="text-left">
                                    {/* <div className='hussainland' style={{ color: 'white' }}>WHO IS HUSSAIN ?</div> */}
                                    <div  className="hussainlandh2">Shortly after the demise of Prophet Muhammad, a power struggle divided the people which led to the rise of a despotic tyrant.</div>
                                    <div className="hussainlandpara" ><p>After his grandfather died, Hussain saw the moral degradation of his society. The nation had been torn apart by numerous civil wars, which made it easier for tyrannical leaders to lose power.</p></div>
                                    <div className="hussainlandpara" ><p>After that, a guy by the name of Yazid seized all authority. The general consensus was that Yazid was a corrupt narcissist who desired to govern with an iron fist. Yazid demanded Hussain's fealty and threatened to kill him in order to legitimise his own power.</p></div>
                                    <div className="hussainlandpara" ><p>Hussain refused. Hussain knew that if he gave his allegiance to a man like Yazid there would be no turning back for his society. In a powerful sermon, he said: “I did not rise up for the cause of wickedness, amusement, corruption or oppression, but I rose up to reform the nation of my grandfather. I want to promote virtue and prevent vice.”</p></div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                
                



            </section>



            <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
                <div className="l-section-img3" data-img-width="1920" data-img-height="1080" ></div>
                <div className="l-section-overlay1" style={{}} ></div>

                <div style={{
                    top: '3rem',
                    position: 'relative',
                    overflow: ' hidden', lineHeight: '4rem',

                }} className="container-fluid text-center mb-5">



                    <div className='container px-5'>
                  
                        
                    
                                    
                    <div data-aos="fade-right" data-aos-duration="700" className='hussainland' style={{ color: '#130f2a',fontSize:"8" }}>“Yazid is a <span style={{color:'#d32f30'}}>transgressor</span>, a <span style={{color:'#d32f30'}}>drunkard</span>, killer of innocent people and an open <span style={{color:'#d32f30'}}>sinner</span>, we will never give our <span style={{color:'#d32f30'}}>allegiances</span> to the likes of him.”</div>
                    <div data-aos="fade-left" data-aos-duration="700" className='badge'>HUSSAIN IBN ALI</div>                
                        
                        
                              

                            </div>
                        </div>
                
                

                
                



            </section>


            <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
                <div className="l-section-img20" data-img-width="1920" data-img-height="1080" style={{/* backgroundPositionY: `${newBackgroundPositionY}px`*/}}></div>
                <div className="l-section-overlay" style={{ background: 'linear-gradient(0deg,#130f2a,rgba(19,15,42,0.00))' }}></div>

                <div style={{
                    top: '3rem',
                    position: 'relative',
                    overflow: ' hidden', lineHeight: '4rem',

                }} className="container-fluid text-center mb-5">



                    <div className='container'>
                    <div className='badge1 text-left'>THE BATTLE</div>
                        <div className='row'>
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-6 col-md-12 col-lg-6'>
                                <div style={{} } className="text-left">
                                    
                                    <div className='hussainland' style={{ color: 'white' ,fontSize:'8'}}><span style={{color:'#d32f30'}}>HUSSAIN</span> MADE THE ULTIMATE SACRIFICE FOR MORAL <span style={{color:'#d32f30'}}>JUSTICE</span>.</div>
                                    
                                </div>
                                </div>
                                <div data-aos="fade-left" data-aos-duration="700" className='col-sm-6 col-md-12 col-lg-6'>
                                <div style={{ }} className="text-left">
                                    {/* <div className='hussainland' style={{ color: 'white' }}>WHO IS HUSSAIN ?</div> */}
                                    <div  className="hussainlandh2">Hussain resisted the pressure from Yazid and spoke out against his illegitimate rule. Despite threats of violence, Hussain remained steadfast and was prepared to give his own life.</div>
                                    <div className="hussainlandpara" ><p>Hussain did not want the cruel Yazid army to invade his city and endanger the lives of the populace. Hussain travelled to the East with his family and 72 other people in an effort to rally support for his insurrection without resorting to bloodshed. On the hot plains of a region named Karbala (modern-day Iraq), an army of nearly 30,000 forced Hussain, his family, and his travelling companions to stop.</p></div>
                                    <div className="hussainlandpara" ><p>The water supply for Hussain's family and friends, including women and children, was cut off by Yazid's army. Hussain bravely stood and died in the Battle of Karbala in 680 AD despite going without food and drink for three days and suffering in the sweltering heat. Hussain died upholding his beliefs and stood out for others who were being oppressed around him.</p></div>
                        

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
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-6 col-md-12 col-lg-6'>
                                <div style={{} } className="text-left">
                                    
                                    <div className='hussainland' style={{ color: '#130f2a',fontSize:"8rem" }}><span style={{color:'#d32f30'}}>HUSSAIN’S</span> TIMELESS LEGACY INSPIRES MILLIONS UNTIL TODAY.</div>
                                    
                                </div>
                                </div>
                                <div data-aos="fade-left" data-aos-duration="700" className='col-sm-6 col-md-12 col-lg-6'>
                                <div style={{ }} className="text-left">
                                    {/* <div className='hussainland' style={{ color: 'white' }}>WHO IS HUSSAIN ?</div> */}
                                    <div className="hussainlandh2" style={{color: '#130f2a'}}><p>Hussain ultimately triumphed thanks to this tragically brave deed of sacrifice. His passing sparked a revolution and brought about Yazid's tyrannical rule to an end. Hussain remained true to his beliefs all the way to the end, and his legacy continues to motivate many people all around the world.</p></div>
                                    <div className="hussainlandpara" ><p style={{color: '#786666'}}>Even years later, his selflessness, bravery, and resolve continue to inspire people all around the world, from civil rights activists to volunteers at local charities. Regardless of race or religion, everyone can find inspiration in Hussain ibn Ali's story.</p></div>
                                    <div className="hussainlandpara" ><p style={{color: '#786666'}}>Hussain, his principles, and his position serve as the cornerstones of our organisation. Hussain served as an inspiration for our representatives, who organise philanthropic events in more than 60 places worldwide to assist the hungry, feed the homeless, and collect blood donations to save lives.</p></div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                
                



            </section>




           
            {/* <section
                id="home"
                className="home"
            >
                <h2 className="mt-5 ms-5 box"><span className='px-3'>AZA-E-HUSSAIN TRUST</span></h2>

                <h1 className="mt-5 ms-5">
                    WE ARE BUILDING COMPASSIONATE <br /> COMMUNITIES AROUND THE CANADA, <br /> INSPIRED BY  <span>HUSSAIN (A.S)</span>
                </h1>
              
            </section> */}
        </>
    )
}
