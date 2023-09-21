import React from 'react'
import Modal from './Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect,useState,useRef} from 'react'
import { Link } from 'react-router-dom';
import  Image1  from '../assets/images/Untitled design.png';
import  Image2  from '../assets/images/democratic.jpg';








// const Modal = ({ closeModal }) => {
//   const modalRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         closeModal();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [closeModal]);

//   return (
//     <div
//       id="popup-modal"
//       tabIndex="-1"
//       className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
//       ref={modalRef}
//     >
//       <div className="relative w-full max-w-md max-h-full">
//         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//           <button
//             type="button"
//             className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//             data-modal-hide="popup-modal"
//             onClick={closeModal}
//           >
//             <svg
//               className="w-3 h-3"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 14 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//               />
//             </svg>
//             <span className="sr-only">Close modal</span>
//           </button>
//           <div className="p-6 text-center">
//             <svg
//               className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//               />
//             </svg>
//             <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
//               Are you sure you want to delete this product?
//             </h3>
//             <button
//               data-modal-hide="popup-modal"
//               type="button"
//               className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
//             >
//               Yes, I'm sure
//             </button>
//             <button
//               data-modal-hide="popup-modal"
//               type="button"
//               className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
//               onClick={closeModal}
//             >
//               No, cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };






export default function Footer(props) {


  // const [showModal, setShowModal] = useState(false);

  // const toggleModal = () => {
  //   setShowModal((prevShowModal) => !prevShowModal);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };





    useEffect(() => {
        AOS.init(); // Initialize AOS with the desired duration
      },);

  return (
    <>

    <footer>

    <div className='news-image mb-5'>
          <a href="">  <img src="https://yt3.googleusercontent.com/DuUiy9A6_vGmKyiu5vsvCGsoH7U1izf6OlFk6s6ClOojPRKnSIR1AP-Fr93DXfbSi0TN55I-FRE=s900-c-k-c0x00ffffff-no-rj" alt="" />
          </a><a href="https://www.ctvnews.ca/mobile/video?clipId=2759536"> <img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/279843202_366928738806459_1429039105706321188_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFjotvIpvVxsQP_PAH4s1Q0dSdmy9FF_Od1J2bL0UX858iIp0Rltw-GAXqQlZMjsC39DNJU0KCv7B2vexeFxYDX&_nc_ohc=Ojzbj4oDs6oAX88D7QW&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAc9fossNAqjV2KYtLjnBGTNI2J4BxoaHF3uEK_4IWnGg&oe=6510CD98" alt="" />
          </a><a href=""> <img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/30221991_1955824054459656_1592165881528451072_n.png?stp=dst-png&_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHU7Ryht1Rvg6D1o1hyVCFkp40mwcAdNzinjSbBwB03OOzmQx0ISyGagUFtMAolSd0wEPcmRNHJUkEB2M7jsZcP&_nc_ohc=m4fmqII2opkAX9pkuWU&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfBxcLQswUZDKFeF3iTnUDT6UEET3v0G_cE6JGtVf_3aaw&oe=6532563F" alt="" />
          </a><a href="https://www.sadaehussaini.in/clip/588"> <img src={Image1} alt="democratic" />
          </a><a href=""> <img height="100" width="150" src={Image2} alt="sada" />
          </a> </div>
          <div style={{bottom:"0",backgroundColor:"linear-gradient(180deg,#c12a32 0%,#d32f30 10%);"}}  className="footer">
      <div data-aos="fade"
            data-aos-duration="500" className="footer-top">
    
        <div className="container">
         
          <div className="row">
          
            <div className="col-lg-3 col-md-6 footer-links">
            <h4>EXPLORE</h4>
              <ul>
               
                <li>
                  <i className="ion-ios-arrow-forward"></i>
                  <Link style={{color:"rgba(255,255,255,.82)",textDecoration:"none"}} to="/about">About us</Link>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i>
                  <Link style={{color:"rgba(255,255,255,.82)",textDecoration:"none"}} to="/media/majlis">In the Media</Link>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i>
                  <Link style={{color:"rgba(255,255,255,.82)",textDecoration:"none"}} to="/faqs">FAQS</Link>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i>
                  <Link style={{color:"rgba(255,255,255,.82)",textDecoration:"none"}} to="/ContactUs">Contact us</Link>
                </li>
               
                {/* <!-- <li><i className="ion-ios-arrow-forward"></i> <a href="#">Terms & condition</a></li> -->
                <!-- <li><i className="ion-ios-arrow-forward"></i> <a href="#">Privacy policy</a></li> --> */}
              </ul>
            </div>

            <div
              className="col-lg-3 col-md-6 footer-links"
              style={{fontSize: '1.5rem'}}
            >
              <h4 className='hide' style={{color:"#d32f30" ,textDecoration:"none" }}>EXPLORE</h4>

             
              <ul>
              <li>
                  <i className="ion-ios-arrow-forward"></i>
                  <Link style={{color:"rgba(255,255,255,.82)",textDecoration:"none"}} href="/media/Accouncement">Upcoming Events</Link>
                </li>
                {/* <!-- <li><i className="ion-ios-arrow-forward"></i> <a href="#portfolio">Portfolio</a></li> --> */}
                <li>
                  <i className="ion-ios-arrow-forward"></i> <Link style={{color:"rgba(255,255,255,.82)",textDecoration:"none"}} to="/join">Join Our Team</Link>
                </li>
                {/* <!-- <li><i className="ion-ios-arrow-forward"></i> <a href="careers.html">Career</a></li> --> */}
                <li>
                  <i className="ion-ios-arrow-forward"></i>
                  <Link style={{color:"rgba(255,255,255,.82)",textDecoration:"none"}} href="/Contactus">Contact</Link>
                </li>
               

                <li>
                  <i className="ion-ios-arrow-forward"></i>
                  <Link style={{color:"rgba(255,255,255,.82)",textDecoration:"none"}} href="https://donate.stripe.com/bIYeUUfdl6Xv5SU5kk">Make a Donation</Link>
                </li>
              </ul>
        
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
            <h4 className='hide' style={{color:"#d32f30" ,textDecoration:"none" }}>EXPLORE</h4>

             
              <ul>
                {/* <!-- <li><i className="ion-ios-arrow-forward"></i> <a href="#portfolio">Portfolio</a></li> --> */}
                <li>
                  <i className="ion-ios-arrow-forward"></i> <Link style={{color:"rgba(255,255,255,.82)",textDecoration:"none"}} to="/hussain">Hussain</Link>
                </li>
                {/* <!-- <li><i className="ion-ios-arrow-forward"></i> <a href="careers.html">Career</a></li> --> */}
                <li>
                  <i className="ion-ios-arrow-forward"></i>
                  <Link style={{color:"rgba(255,255,255,.82)",textDecoration:"none"}} href="/hussain/ashura-day">The day of Ashura</Link>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i> <Link style={{color:"rgba(255,255,255,.82)",textDecoration:"none"}} to="/hussain/Arabaeen">The day of Arbaeen</Link>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i> <Link style={{color:"rgba(255,255,255,.82)",textDecoration:"none"}} to="/hussain/hussain-faqs">FAQs About Imam Hussain</Link>
                </li>
              </ul>
            </div>

 

            <div className="col-lg-3 col-md-6 footer-newsletter">
               <h4>Connect with us</h4>
              <p>
                <a aria-label="Go to our Facebook Page" href='https://www.facebook.com/Azaehussainhalifax?mibextid=ZbWKwL'  target="_blank"><i style={{marginLeft:'.5rem',fontSize:'4rem',color:'white'}} className="px-2 fa-brands fa-facebook h1"></i></a>
                <a aria-label="Go to our Instagram Page" href='https://instagram.com/azaehussainhalifax?igshid=ZDc4ODBmNjlmNQ=='  target="_blank"><i style={{marginLeft:'.5rem',fontSize:'4rem',color:'white'}} className="px-2 fa-brands fa-instagram h1"></i></a>
                <a aria-label="Go to our Youtube Page" href='https://www.youtube.com/@AAHHalifax'  target="_blank"><i style={{marginLeft:'.5rem',fontSize:'4rem',color:'white'}} className="fa-brands fa-youtube h1 px-2"></i></a>
                <span onClick={props.onOpenModal}><i style={{marginLeft:'.5rem',fontSize:'4rem',color:'white'}} className="fa-brands fa-whatsapp h1"></i></span>
                {/* <a  data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"  onClick={toggleModal} ><i style={{marginLeft:'.5rem'}} className="fa-brands fa-whatsapp h1"></i></a> */}
              </p> 


              


  
    <div >
    
    </div>
  
              {/* <!-- <form action="" method="post">
                <input type="email" name="email" /><input
                  type="submit"
                  value="Subscribe"
                />
              </form> --> */}


              














            </div> 
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-md-6 copyright"
            style={{color: '#fff', fontSize: '1.4rem'}}
          >
            Copyright &copy; 2023 Aza - e - Hussain. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>

    </footer>
    
    </>
  )
}
