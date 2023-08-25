import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet/es/Helmet";

const ContactUs = () => {


  const[isloading,Setisloading] = useState(false)


  const [formData, setFormData] = useState({
    Salutation:'',
    firstName: '',
    lastName: '',
    email: '',
    Subject: '',
    message: 'Your message here...',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const AddFeedback=async(salutation,firstname,lastname,email,subject,description)=>{
    Setisloading(true)
    const data = await fetch("https://gold-adventurous-perch.cyclic.cloud/api/feedback/createfeedback",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({salutation,firstname,lastname,email,subject,description})}
    )
    if(data.status==200){
      
    const json=await data.json();
    setFormData({
      Salutation:'',
      firstName: '',
      lastName: '',
      email: '',
      Subject: '',
      message: 'Your message here...',
    })
    alert("Submitted Successfully")
    Setisloading(false)
    console.log(json)
    
    
    
    
    }else{
    
    }

  }
  const handleSubmit = async(e) => {
    e.preventDefault();

    AddFeedback(formData.Salutation,formData.firstName,formData.lastName,formData.email,formData.Subject,formData.message)
    // You can add your form submission logic here
    console.log(formData);
  };

  document.title ='Contact Us - Aza-e-Hussain Trust of Halifax';
  useEffect(()=>{
    window.scrollTo(0, 0);

    document.title ='Contact Us - Aza-e-Hussain Trust of Halifax';
  },[])

  return (
    <>


<Helmet>
        <title>Contact Us - Aza-e-Hussain Trust of Halifax</title>
        <link rel="icon" href={"path-to-your-favicon"}/>
        <meta name="description" content="Get in touch with Aza-e-Hussain Trust of Halifax for any inquiries or feedback."/>
        <meta name="keywords" content="Contact Us, Enquiries, Feedback, Phone, Email, Halifax College, Canada"/>
        <meta property="og:title" content="Contact Us - Aza-e-Hussain Trust of Halifax"/>
        <meta property="og:description" content="Get in touch with Aza-e-Hussain Trust of Halifax for any inquiries or feedback."/>
      </Helmet>


      <div className="container mt-5 pt-5">
        <div className="innerwrap mt-5">
          <section className="section1 clearfix">
            <div className="mt-5 text-left">
             
              
              <h1 style={{ color: '#130f2a', fontSize: "8rem" }} >Drop Us a Mail</h1>
              <span className="seperator"></span>
            </div>
          </section>
          <section className="section2 clearfix">
            <div className="col2 column1 first">
              {/* Google Maps */}
           <p className='hussainlandh2' style={{ color: '#130f2a', fontSize: "3rem" }}>  We would love to hear any enquiries or feedback you may have!</p> 
           <p className="hussainlandpara" style={{fontSize:'1.7rem', lineHeight:'1.5' }}> Before completing the form, please check out the <Link style={{color:"#d32f30"}}>FAQs section</Link>. We endeavour to reply to your enquiry at our earliest.Please make sure you have explored the website fully that may answer your query.</p> 
              {/* You can add the Google Maps script and initialization here */}
            </div>
            <div className="col2 column2 last">
              <div className="sec2innercont">
                <div className="sec2addr">
                  <p>
                    AZA-E-HUSSAIN Trust at Halifax College in Canada
                  </p>
                  <p>
                    <span className="collig">Phone :</span> +1 (902) 943-9849
                  </p>
                  <p>
                    <span className="collig">Email :</span> soulatabbas1985@gmail.com
                  </p>
                  <p>
                    <span className="collig">Fax :</span> +1 (902) 943-9849
                  </p>
                </div>
              </div>
              <div className="sec2contactform">
                <h3 className="sec2frmtitle">Have any Queries? Drop Us a Mail</h3>
                <form >
                  <div className="clearfix">
                  <input
                      className="col23"
                      type="text"
                      placeholder="Salutation (eg : Mr.,Dr.,Ms.)"
                      name="Salutation"
                      value={formData.Salutation}
                      onChange={handleChange}
                    />
                    <input
                      className="col2 first"
                      type="text"
                      placeholder="FirstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <input
                      className="col2 last"
                      type="text"
                      placeholder="LastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clearfix">
                    <input
                      className="col23 first"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      className="col23 last"
                      type="text"
                      placeholder="Subject"
                      name="Subject"
                      value={formData.Subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clearfix">
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="7"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="clearfix">
                    <button className='subconbut' onClick={handleSubmit}>{!isloading && (<>SEND</>)}  {isloading && (<><i class="fa-solid fa-circle-notch fa-spin" style={{color: "#ffffff"}}></i></>)}
</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
   </>
  );
};

export default ContactUs;
