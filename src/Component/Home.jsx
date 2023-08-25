import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
// import {Helmet} from "react-helmet";
import Image1 from '../assets/images/first.jpg'
import Image2 from '../assets/images/quote-imam-hussain.png'
import {Helmet} from "react-helmet/es/Helmet";
import Loader from './Loader'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect,useState} from 'react'
import MediaItem from './MediaItem';

export default function Home() {

 

  const [Gallery,setGallery]=useState([]);
  const [isLoading,SetisLoading]=useState(false);



  const getGallery=async()=>{
      SetisLoading(true)
    const data = await fetch("https://gold-adventurous-perch.cyclic.cloud/api/gallery/getgallery",{
      method:"GET",
    
    })
    const json=await data.json();
    SetisLoading(false)
    setGallery(json)
  }
    
  const[isloading,Setisloading] = useState(false)
  const [formData, setFormData] = useState({
   
    firstName: '',
    email: '',
   
  });
  let count =0
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const AddFeedback=async(name,email)=>{
    Setisloading(true)
    const data = await fetch("https://gold-adventurous-perch.cyclic.cloud/api/join/createJoin",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({name,email})}
    )
    if(data.status==200){
      
    const json=await data.json();
    setFormData({
      firstName: '',
      email: '',
    })
    Setisloading(false)
    alert("Submitted Successfully")
    console.log(json)
    
    
    
    
    }else{
    
    }

  }
  const handleSubmit = async(e) => {
    e.preventDefault();

    AddFeedback(formData.firstName,formData.email)
    
    console.log(formData);
  };

  document.title='Aza-e-Hussain Trust of Halifax'

    useEffect(() => {
      window.scrollTo(0, 0);
      getGallery()
        document.title='Aza-e-Hussain Trust of Halifax';

        AOS.init(); // Initialize AOS with the desired duration
      }, []);

    return (
    <>

<Helmet>
        <title>Aza-e-Hussain Trust of Halifax</title>
        <link rel="icon" href=''/>
        <meta name="description" content="Aza-e-Hussain Trust of Halifax - Spreading the true message of Islam and standing against terrorism."/>
        <meta name="keywords" content="Islam, Aza-e-Hussain, Shia, Muslims, Terrorism"/>
        <meta property="og:title" content="Aza-e-Hussain Trust of Halifax"/>
        <meta property="og:description" content="Spreading the true message of Islam and standing against terrorism."/>
      </Helmet>


 {isLoading && (
<div className='container p-5 m-5'>
    <div className='h-100 text-center m-5 p-5'>
    <Loader/>
    </div>
    </div>
)

}

{!isLoading &&(<section>
    

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
                                <input 
                                className="fname" 
                                type="text" 
                                name="firstName" 
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Full name" />
                                <input 
                                type="text" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email" />
                                
                                </div>
                                <button onClick={handleSubmit}>{!isloading && (<>Subscribe</>)}  {isloading && (<><i class="fa-solid fa-circle-notch fa-spin" style={{color: "black"}}></i></>)}</button>
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
            {/* <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
              <a href="#" className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
                <img src={(Gallery.length===0)?Image1:Gallery[0].Url} className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150"/>
                <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">{(Gallery.length===0)?Image1:Gallery[0].title}</h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">{(Gallery.length===0)?Image1:Gallery[0].desc}</p>
                    <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                  </div>
                </div>
              </a>
            </div> */}
           
           {!isLoading && Gallery.length!==0 && Gallery.reverse().map((pic)=>{
              count =count+1
         if(count<4){
              return(
                <MediaItem key={pic._id} title={pic.title} desc={pic.desc} image={pic.Url}/>
              )}
           
 
           })}
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
            </section>)}

            </>   
            )
}
