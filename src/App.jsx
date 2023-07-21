import { useState } from 'react'

// import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Footer from './Component/Footer'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Contact from './Component/Contact'
import Join from './Component/Join'
import Donate from './Component/Donate'
import About from './Component/About'
import Media from './Component/Media'


import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Hussain from './Component/Hussain'



function App() {
  
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
   
    <>
     <BrowserRouter>
      <Navbar/>
    <Routes>
       <Route exact path="/"  element={<Home/>} />
       <Route exact path="/about"  element={<About/>} />
       <Route exact path="/media"  element={<Media/>} />
       <Route exact path="/Contactus"  element={<Contact/>} />
       <Route exact path="/join" element={<Join/>}/>
       <Route exact path="/Donate" element={<Donate/>}/>
       <Route exact path="/hussain" element={<Hussain/>}/>



    </Routes>
       <Footer onOpenModal={onOpenModal}/>
 

    
      {/* <button onClick={onOpenModal}>Open modal</button> */}

      <Modal classNames={{
          modal: 'customModal',
        }}  open={open} onClose={onCloseModal} center>
        <h2 className='modalheading text-center'>AZA-E-<span>HUSSAIN</span> TRUST</h2>


        <div className='container-fuild'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='text-center whatsappbox'>
                <div> 
                  <i className="fa-brands fa-whatsapp h1"></i><br />
                 <p> For Male</p>
                </div>

               <a href="https://chat.whatsapp.com/K6cLZiPYb2t4njh0TEfNlq" target='_blank'><button  className='joinwhatsapp px-5'>JOIN</button></a> 

                </div>
              </div>
              <div className='col-sm-6'>
               <div className='text-center whatsappbox'>
                <div> 
                  <i className="fa-brands fa-whatsapp"></i><br />
                 <p> For Female</p>
                </div>

                <button href='' className='joinwhatsapp px-5'>JOIN</button>

                </div>
              </div>
            </div>
            <p className='whatsappdesc'>
           <b> Aza-e-Hussain</b> Trust of <b>Halifax</b> is committed to providing opportunities and facilities for all its members, in following <span>Islam</span> and promoting the <b>true teachings</b> of <span>Islam</span> in accordance with <span>Fiqah-e-Jaffaria</span>, and to increase fellowship and foster respect towards other <b> religious organizations</b>.
        </p>
          </div>
        
        </div>
        
      </Modal>
       {/* <Modal/> */}
    </BrowserRouter>
    </>
  )
}

export default App
