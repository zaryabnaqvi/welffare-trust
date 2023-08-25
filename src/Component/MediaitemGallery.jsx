import React, { useState } from 'react'

export default function MediaitemGallery(props) {
    const {Pic} = props
    const date = new Date(Pic.createdAt).getDate()
    const month = new Date(Pic.createdAt).getMonth()
  
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      const monthAbbreviation = monthNames[month];
  
    
  
  return (
    <>
       <div className="col-lg-4 col-sm-6 col-12"  > 
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
        </div> 
    </>
  )
}
