import React from 'react'
import {Link} from "react-router-dom"

export default function Join() {

  document.title="Team | Aza-e-Hussain"

  return (
    <>
      <section className='l-section wpb_row height_medium full_height valign_center container-fluid mt-5 pt-5 text-center'>
        
    <h1 className='mt-5 pt-5' style={{fontFamily:"Champion Gothic",fontSize:"8rem"}}>Local Teams</h1>
    <p className='mx-5 px-5' style={{fontFamily:"Open Sans", fontSize:"1.5rem",color:"#787878"}}>Our local teams of volunteers across the world host regular events to help those most vulnerable in society. Find your nearest team below to get involved and volunteer. Can’t find a team near you? <Link style={{color:"#d32f30"}} to="/ContactUs">Get in touch with us</Link> to start your own team.</p>
    
    <div className='news-container'>
      <div className="article-container">
        <img className='article-image' src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/375315859_174846075640149_8733554348349440192_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHvHcbsXlME8YPvMzde-qMduyIX9p-NjPC7Ihf2n42M8FqpgUIfvxo1XwfmQwQoXQZujt22Y_Vnit3YAsKyVHyO&_nc_ohc=URswEeRFmHwAX9VIhZ_&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfBE_YtF8FW-SusMUI3cUlv_qX-Zfy-rKAQywLXgFXbtFg&oe=6510082E" alt="" />
        <h3 className='px-3 pt-3 text-left' style={{color:"#d32f30",fontSize:"2.3rem"}}><b>Canada</b></h3>
        <p className='px-3 text-left' style={{color:"#787878"}}><i class="fa-solid fa-location-dot me-2"></i>Halifax, Canada </p>
        <p className='text-end h1 pb-3 pe-4'  style={{color:"#787878"}}><i class="fa-regular fa-heart"></i></p>
      </div>
      <div className="article-container">
        <img className='article-image' src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/375828410_174845502306873_4018272557626401965_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeG5XWy-qV5sw7gMWKE66wsuDaFkXDOU-m0NoWRcM5T6beRBYHRvVRdReDrZyGLbaf_NUB4yeqtCPca1D9FAaREt&_nc_ohc=wiOTt4_ITtAAX-DKvqd&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfDkdrdQUJXg66Uog72EgPjPia6b6FTTsofInoOFmwy4bw&oe=650FE6CB" alt="" />
        <h3 className='px-3 pt-3 text-left' style={{color:"#d32f30",fontSize:"2.3rem"}}><b>Canada</b></h3>
        <p className='px-3 text-left' style={{color:"#787878"}}><i class="fa-solid fa-location-dot me-2"></i>Halifax, Canada </p>
        <p className='text-end h1 pb-3 pe-4'  style={{color:"#787878"}}><i class="fa-regular fa-heart"></i></p>
      </div>
      <div className="article-container">
        <img className='article-image' src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/374693942_174845988973491_2513250539963460905_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHKIX21gf1kvHYiYI7SAu7ehfvpFriHvRWF--kWuIe9FWHbCThv9NGC93w-iyuw-wqLXLTh3N1S7II99QFlMmzI&_nc_ohc=Uz2_aumkO2kAX-rtudM&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCiAGvSaoCu6TiyUIg9DK1wWRh-ukydSegIAOgPzWwvew&oe=65101D92" alt="" />
        <h3 className='px-3 pt-3 text-left' style={{color:"#d32f30",fontSize:"2.3rem"}}><b>Canada</b></h3>
        <p className='px-3 text-left' style={{color:"#787878"}}><i class="fa-solid fa-location-dot me-2"></i>Halifax, Canada </p>
        <p className='text-end h1 pb-3 pe-4'  style={{color:"#787878"}}><i class="fa-regular fa-heart"></i></p>
      </div>
    </div>

      </section>
    </>
  )
}
