import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function MediaitemGallery(props) {
    const {Pic} = props
    const date = new Date(Pic.createdAt).getDate()
    const month = new Date(Pic.createdAt).getMonth()
    const year = new Date(Pic.createdAt).getFullYear()
  
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      const monthAbbreviation = monthNames[month];


      function getFirst12Words(str) {
        if (typeof str !== 'string') {
          return ''; // Return an empty string for non-string inputs.
        }
      
        const words = str.split(' '); // Split the string into words using space as the delimiter.
        const first12Words = words.slice(0, 12).join(' '); // Extract and join the first 12 words.
      
        return first12Words;
      }

      let [texthidden,SetHidden] = useState(true)
  
    const handleHidden =()=>{
      if(texthidden){
        SetHidden(false)
      }else{
        SetHidden(true)
      }
    } 
  
  return (
    <>
       {/* <div className="col-lg-4 col-sm-6 col-12"  > 
          <div className={`card article_card bbb p-3 mb-5 shadow` }
         >
            <a>
              <div className='cardTitle'>{Pic.title}</div>
              <img src={Pic.Url} alt="news image" className="img-fluid" />
              <div className="article_date">
                <span className="article_day">{date}</span>
                <span className="article_month">{monthAbbreviation}</span>
              </div>
              <div className={`card-body p-0`}>
                <p className={`card-text`} style={{overflow:'hidden '}} >
                  {Pic.desc}
                </p>
              </div>
            </a>
          </div>
        </div>  */}
         <div className="article-container" >
    <img src={Pic.Url} alt={Pic.title} className="article-image" />
    <h2  style={{fontSize:"1.8rem"}} className="px-3 pt-3"><b>{Pic.title}</b></h2>
    <h3 style={{fontSize:"1.3rem",color:"#787878"}} className="px-3 pt-1">{(texthidden) ?getFirst12Words(Pic.desc):Pic.desc}<a style={{color:"#d32f30",cursor:"pointer",fontSize:"1.3rem"}} onClick={handleHidden}>{(Pic.desc.split(' ').length>12)?((texthidden) ? " ..." : " <<"):""}</a></h3>
    <p className='px-3 pt-1' style={{color:"#787878"}}>{date} - {monthAbbreviation} - {year} </p>

  </div>
    </>
  )
}
