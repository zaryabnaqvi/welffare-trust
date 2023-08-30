import React from 'react'
import Modal from './Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect,useState,useRef} from 'react'
import { Link } from 'react-router-dom';







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
      }, []);

  return (
    <>

    <footer>


          <div style={{bottom:"0"}} data-aos="fade-up"
            data-aos-duration="500" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-links">
              <h4>About Us</h4>
              <ul>
                <li>
                  <i className="ion-ios-arrow-forward"></i> <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i>
                  <Link href="/Donate">DONATE</Link>
                </li>
                {/* <!-- <li><i className="ion-ios-arrow-forward"></i> <a href="#">Terms & condition</a></li> -->
                <!-- <li><i className="ion-ios-arrow-forward"></i> <a href="#">Privacy policy</a></li> --> */}
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {/* <!-- <li><i className="ion-ios-arrow-forward"></i> <a href="#portfolio">Portfolio</a></li> --> */}
                <li>
                  <i className="ion-ios-arrow-forward"></i> <Link to="/join">Team</Link>
                </li>
                {/* <!-- <li><i className="ion-ios-arrow-forward"></i> <a href="careers.html">Career</a></li> --> */}
                <li>
                  <i className="ion-ios-arrow-forward"></i>
                  <Link href="/Contactus">Contact</Link>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i> <Link to="/faqs">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* <div
              className="col-lg-3 col-md-6 footer-contact"
              style={{fontSize: '1.5rem'}}
            >
              <h4>Contact Us</h4>
              <p>
                STREET NO 05<br />
                Block-13/E3<br />
                TORONTO, Canada <br />
                <strong>Phone:</strong> +923362235541<br />
                <strong>Email:</strong> azaehussain@gmail.com<br />
              </p>

        
            </div> */}

            <div className="col-lg-4 col-md-6 footer-newsletter">
               <h4>SOCIAL LINKS</h4>
              <p>
                <a aria-label="Go to our Facebook Page" href='https://www.facebook.com/Azaehussainhalifax?mibextid=ZbWKwL'  target="_blank"><i style={{marginLeft:'.5rem',fontSize:'3rem',color:'white'}} className="fa-brands fa-facebook h1"></i></a>
                <a aria-label="Go to our Instagram Page" href='https://instagram.com/azaehussainhalifax?igshid=ZDc4ODBmNjlmNQ=='  target="_blank"><i style={{marginLeft:'.5rem',fontSize:'3rem',color:'white'}} className="fa-brands fa-instagram h1"></i></a>
                <a aria-label="Go to our Youtube Page" href='https://www.youtube.com/@AAHHalifax'  target="_blank"><i style={{marginLeft:'.5rem',fontSize:'3rem',color:'white'}} className="fa-brands fa-youtube h1"></i></a>
                <span onClick={props.onOpenModal}><i style={{marginLeft:'.5rem',fontSize:'3rem',color:'white'}} className="fa-brands fa-whatsapp h1"></i></span>
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
            style={{color: '#fff', fontSize: '1.3rem'}}
          >
            Copyright &copy; 2023 Aza - e - Hussain. All Rights Reserved.
            <br />
            Developed by Zaryab Naqvi
          </div>
        </div>
      </div>
    </div>

    </footer>
    
    </>
  )
}
