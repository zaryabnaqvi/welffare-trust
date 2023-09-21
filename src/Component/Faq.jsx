import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Link } from "react-router-dom";
import Image from "../assets/images/Untitled design (1).png"
import Aos from "aos";

const data = {
    title: "Some Question People oftenly ask about us !",
    rows: [
        {
            title: "Who are we?",
            content: `Aza-e-Hussain is committed to providing opportunities and facilities for all its members, in following Islam and promoting the true teachings of Islam in accordance with Fiqah-e-Jaffaria, and to increase fellowship and foster respect towards other religious organizations. Aza-e-Hussain has been serving Shia Muslims in preserving their faith and cultural values along with the true form of Islam taught by Prophet Muhammad(saw), Ali(as), and their progenies.
            `,
        },
        {
            title: "Who to get updates of your champions?",
            content:
                <>Visit our <Link to='/hussain/Accouncement' style={{color:'#d32f30',textDecoration:'none'}}>Accoucements Page</Link></>,
        },
        {
            title: "How to Donate to Us?",
            content: <>Visit our <Link to='https://donate.stripe.com/bIYeUUfdl6Xv5SU5kk' style={{color:'#d32f30',textDecoration:'none'}}>Donation Page</Link></>,
        },
        {
            title: "Why did we start us organization?",
            content: <p>Aza-e-Hussain Trust of Halifax main purpose is to spread the true message of Islam and help people understand the true face of Islam against the defaced form used by the Terrorists. The Shia Faith has always stood against inhumanity and tyranny since the inception of Islam and till date Shia Muslims stand united against Terrorism. Hardly a day passes by when shia muslim(s) is not martyred around the world by the Terrorists. But that has not stopped shia muslims from spreading the true message of Islam taught by Prophet Muhammad(saw) and his progenies. It is important to know that the Terrorists hate shia muslims more than non-muslims or any other community in the world. Only because We stand firmly against them, against the defaced form of Islam.</p>,
        },
    ],
};


    const styles = {
        // bgColor: 'white',
        fontFamily:'Champion Gothic',
        titleTextColor: "#000000",
        rowTitleColor: "#666666",
         titleTextSize: '4.7rem',
         rowTitleTextSize:"1.6rem",
        rowContentColor: '#787878',
        rowContentTextSize:"1.4rem",
        arrowColor: "#d32f30",
    };

const config = {
    animate: true,
    arrowIcon: "?",
    tabFocus: true,
    expandIcon: "+",
    collapseIcon: "-",
};





export default function HussainFAQS() {

    document.title="Know more about Aza-e-hussain Trust"
    window.scroll(0,0)
    useEffect(()=>{
        Aos.init()
    },)

    return (
      <section className="container-fluid mt-5 pt-5">
    
        <div className="container mt-5 pt-5 mb-5">
           
            <div className="row">
                <div data-aos="fade"
            data-aos-duration="500" className="col-sm-6 d-flex align-items-center">
                <Faq 
                data={data}
                styles={styles}
                config={config}
            />
                </div>
                <div data-aos="fade"
            data-aos-duration="500" className="col-sm-6">
                <img className="img-fluid" src={Image} alt="" />

                </div>
            </div>
        </div>


        </section>
    );
}