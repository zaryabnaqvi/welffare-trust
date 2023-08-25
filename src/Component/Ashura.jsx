import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import martysofkarbala from "../content/karbalashaheed";
import { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import Image1 from '../assets/images/abbas.jpg'
import Image2 from '../assets/images/Ashura-Day-Image.jpg'
import {Helmet} from "react-helmet/es/Helmet";




export default function Ashura() {
    document.title='The Day of Ashura - Aza-e-Hussain Trust of Halifax'

    useEffect(() => {

        window.scrollTo(0, 0);

        AOS.init(); // Initialize AOS with the desired duration
    },);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const screenWidth = window.innerWidth
            if (screenWidth >= 768) {
                const parallaxContainer = document.querySelector('.l-section-img11');
                parallaxContainer.style.backgroundPositionY = `${scrollPosition}px`;


                const parallaxContainer1 = document.querySelector('.l-section-img13');
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
        <title>The Day of Ashura - Aza-e-Hussain Trust of Halifax</title>
        <link rel="icon" href={"path-to-your-favicon"}/>
        <meta name="description" content="Learn about the significance of the Day of Ashura and the heroes of Karbala."/>
        <meta name="keywords" content="Ashura, Day of Ashura, Karbala, Heroes of Karbala, Hussain, Battle of Karbala"/>
        <meta property="og:title" content="The Day of Ashura - Aza-e-Hussain Trust of Halifax"/>
        <meta property="og:description" content="Learn about the significance of the Day of Ashura and the heroes of Karbala."/>
      </Helmet>
            <section className='l-section wpb_row height_medium full_height valign_center container-fluid'>
                <div className="l-section-img11" data-img-width="1920" data-img-height="1080" ></div>
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
                                    <div className='ashuraland' style={{ color: 'white' }}>THE DAY OF ASHURA</div>
                                    <div className="hussainlandh2">Ashura commemorates the death anniversary of Hussain ibn Ali, a 7th century revolutionary leader who was martyred in the Battle of Karbala. Millions of people around the world observe the Day of Ashura to honour Hussain's dignified fight for social justice.</div>
                                    <div className="hussainlandpara" ><p>Hussain's unwavering commitment to his society's dignity in the face of corruption altered history, and his selfless stance continues to inspire hope across diverse backgrounds today.</p></div>

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

                                    <div className='hussainland' style={{ color: 'white', fontSize: '8rem' }}>ABBAS IBN<span style={{ color: '#d32f30' }}> ALI</span></div>
                                    <div className="hussainlandh2">Abbas ibn Ali, the loyal half-brother of Imam Hussain, played a pivotal role in the Battle of Karbala. Known for his bravery and devotion, he served as the standard-bearer of Imam Hussain's army. Despite overwhelming odds</div>
                                    <div className="hussainlandpara" ><p> Abbas valiantly fought to defend their principles. His ultimate sacrifice to bring water for the thirsty children and women on the day of Ashura earned him the title 'Qamar Bani Hashim' (the Moon of the Hashemites). The Battle of Karbala remains a significant event in Islamic history, symbolizing the pursuit of justice and standing against tyranny.</p></div>
                                    <div className="hussainlandpara" ><p>"Abbas ibn Ali's unwavering loyalty and heroic efforts in Karbala inspire millions worldwide. His selflessness and dedication in the face of adversity continue to resonate, serving as a timeless symbol of sacrifice for justice and righteousness. The legacy of Abbas stands as a beacon of courage and compassion, leaving an indelible mark on the hearts of those who commemorate the tragedy of Karbala."</p></div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






            </section>






            <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
                <div className="l-section-img12" data-img-width="1920" data-img-height="1080" ></div>
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

                                    <div className='hussainland' style={{ color: 'white', fontSize: '8rem' }}>ALI AKBAR IBN<span style={{ color: '#d32f30' }}> HUSSAIN</span></div>
                                    <div className="hussainlandh2">Ali Akbar ibn Hussain, the beloved son of that was killed brutally on the day of ashura,</div>

                                </div>
                            </div>

                            <div data-aos="fade-left" data-aos-duration="700" className='col-sm-12 col-md-12 col-lg-6 text-center'>
                                <div style={{}} className="text-left">

                                <div className="hussainlandh2">Ali Akbar ibn Hussain, the beloved son of Imam Hussain, played a profound role in the Battle of Karbala. Renowned for his striking resemblance to the Prophet Muhammad, he embodied virtues of bravery and piety.</div>
                                    <div className="hussainlandpara" ><p>  Ali Akbar's unwavering commitment to righteousness and his tragic martyrdom at a young age leave an enduring impact on those who honor the legacy of Karbala. His gallant sacrifice remains an inspiration, calling upon hearts to cherish the values of justice and compassion.</p></div>
                                    <div className="hussainlandpara" ><p>"Ali Akbar ibn Hussain was tragically slain in the Battle of Karbala, bravely standing by his father's side. His valiant spirit lives on, immortalizing his sacrifice for the pursuit of righteousness."</p></div>
                                    
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>






            </section>








            <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
                <div className="l-section-img3" data-img-width="1920" data-img-height="1080" ></div>
                <div className="l-section-overlay1" style={{  }}></div>

                <div style={{
                    top: '3rem',
                    position: 'relative',
                    overflow: ' hidden', lineHeight: '4rem',

                }} className="container-fluid text-center mb-5">



                    <div className='container'>
                        <div className='badge text-left'>HEROES OF KARBALA</div>
                        <div className='ashuraland'>72 CAMPANION OF HUSSAIN</div>
                        <div className='row'>

                            <div data-aos="fade-left" data-aos-duration="700" className='col-sm-6 col-md-6 col-lg-3 '>
                                <div style={{}} className="text-left">
                                  
                                {
                                    martysofkarbala.map((name,index)=>{
                                            return(
                                                <>{index<18 &&
                                                 <div className='ashuralandh2'>
                                                    {index+1}. {name}
                                                 </div>
                                                    
                                                }
                                                </>
                                            )
                                    })
                                }

                                </div>

                            </div>
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-6 col-md-6 col-lg-3'>
                                <div style={{}} className="text-left">
  
                                {
                                    martysofkarbala.map((name,index)=>{
                                            return(
                                                <>{(index>19 && index<36) &&
                                                 <div className='ashuralandh2'>
                                                    {index+1}. {name}
                                                 </div>
                                                    
                                                }
                                                </>
                                            )
                                    })
                                }

                                </div>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-6 col-md-6 col-lg-3'>
                                <div style={{}} className="text-left">
  

                                {
                                    martysofkarbala.map((name,index)=>{
                                            return(
                                                <>{(index>35 && index<55) &&
                                                 <div className='ashuralandh2'>
                                                    {index+1}. {name}
                                                 </div>
                                                    
                                                }
                                                </>
                                            )
                                    })
                                }



                                </div>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-6 col-md-6 col-lg-3'>
                                <div style={{}} className="text-left">
  

                                {
                                    martysofkarbala.map((name,index)=>{
                                            return(
                                                <>{(index>52 && index<72) &&
                                                 <div className='ashuralandh2'>
                                                    {index+1}. {name}
                                                 </div>
                                                    
                                                }
                                                </>
                                            )
                                    })
                                }



                                </div>
                            </div>
                        </div>
                    </div>
                </div>






            </section>


            <section className='container-fluid l-section wpb_row height_medium full_height valign_center'>
                <div className="l-section-img13" data-img-width="1920" data-img-height="1080" ></div>
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
                                    <div className='hussainland' style={{ color: 'white',fontSize:'8.5rem' }}>THE BATTLE OF KARBALA</div>
                                    <div className="hussainlandh2">Yazid's army forced Hussain and his comrades and family to stop in the arid territory of Karbala. Hussain and his troops knew what was coming and made their farewell prayers at daybreak on the Day of Ashura. Despite knowing they would die that day, all of Hussain's troops, numbering in the hundreds, remained loyal to him and their cause, preferring to die according to their convictions rather than live under a corrupt king.
</div>

                                 
                                </div>

                            </div>
                            <div data-aos="fade-right" data-aos-duration="700" className='col-sm-12 col-md-12 col-lg-6'>
                                <div style={{}} className="text-left">

                                    <div className="hussainlandpara" ><p>At midday, the battle of Karbala began. Despite their tiny number, Hussain and his soldiers fought the army of Yazid fiercely, believing they would start the fire of revolt. However, Hussain's friends were slaughtered one by one until only Hussain remained.</p></div>
                                    <div className="hussainlandpara" ><p>"As the sun set, Hussain found himself isolated and exhausted. Despite his wounds and thirst, he remained resolute, unwavering in his principles till the last moment. Surrounding armies of Yazid closed in, and Hussain valiantly fought, but eventually, he succumbed. Though he fell, his unwavering stand for social justice continues to inspire generations, resonating for centuries to come."</p></div>
                                    
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
                                    
                                    <div className='hussainland' style={{ color: '#130f2a',fontSize:"8rem" }}>DAY OF ASHURA</div>
                                   <div> <img src={Image2} className='img-fluid'/></div>
                                    <div  className="hussainlandpara"  style={{color: '#786666'}}>Hussain's Shrine, Karbala (Iraq) </div>
                                    <div  className="hussainlandpara"  style={{color: '#786666',opacity:0.5,fontSize:'1rem'}}>Millions of people from all over the world visit the shrine Hussain in Iraq to pay their respects.</div>

                                    
                                </div>
                                </div>
                                <div data-aos="fade-left" data-aos-duration="700" className='col-sm-12 col-md-12 col-lg-6'>
                                <div style={{ }} className="text-left">
                                    {/* <div className='hussainland' style={{ color: 'white' }}>WHO IS HUSSAIN ?</div> */}
                                    <div className="hussainlandh2" style={{color: '#130f2a'}}><p>Hussain ibn Ali, born in 620 AD, was the esteemed grandson of Muhammad, the final prophet of Islam. Throughout his upbringing, he was profoundly influenced by the tales of his grandfather's compassion and dignity, which shaped him into a revered leader renowned for his wisdom, integrity, and exceptional compassion.</p></div>
                                    <div className="hussainlandpara" ><p style={{color: '#786666'}}>Shortly after the passing of Muhammad, the Islamic Empire regressed into familiar patterns. Hussain witnessed the erosion of his grandfather's teachings under the rule of Caliph Yazid, as the moral fabric of society gradually decayed. Yazid's reign was marked by a focus on his personal interests, which stood in stark contrast to the principles of compassion and integrity that had been imparted by Muhammad.</p></div>
                                    <div className="hussainlandpara" ><p style={{color: '#786666'}}>Hussain held a position of immense respect and influence within society, and his support would have bestowed considerable legitimacy upon Yazid's corrupt government. However, Hussain's unwavering commitment to morals and his relentless pursuit of social justice made it impossible for him to endorse Yazid's rule. Instead, he courageously spoke out against Yazid, despite the very real risk to his life. His principled stand demonstrated his unwavering integrity and deep conviction in standing up for what was right, even in the face of grave danger.</p></div>
                                    <div className="hussainlandpara" ><p style={{color: '#786666'}}>Hussain chose to make the ultimate stand for social justice. He chose to leave his hometown along with his family and a few companions. When word reached Yazid of Hussains stand, he sent an army of 30,000 to force Hussain to obey his rule. </p></div>
                                    <div className="hussainlandpara" ><p style={{color: '#786666'}}>Aware of Hussain's significant influence and the potential for his stance to garner widespread support, Yazid presented him with a clear choice: either submit to his authority or face death.</p></div>
                                    <div className="hussainlandpara" ><p style={{color: '#786666'}}>Hussain strongly opposed violence and was deeply averse to any loss of life. Nevertheless, he realized that he could not remain passive and follow Yazid's orders, so he resolutely held onto his principles. Refusing to comply with Yazid's demands, Hussain knew the consequences would be grave. As a result, Yazid commanded his men to execute Hussain on the 10th day of the first month of the Islamic calendar, which is now known as The Day of Ashura.</p></div>

 
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                
                



            </section>


        </>
    )
}
