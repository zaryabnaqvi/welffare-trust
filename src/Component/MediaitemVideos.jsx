import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function MediaitemGallery(props) {
    const {Video} = props
  const date = new Date(Video.createdAt).getDate()
  const month = new Date(Video.createdAt).getMonth()

  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const monthAbbreviation = monthNames[month];

  return (
    <>
    
       <div className="col-lg-6 col-sm-6"  > 
          <div className={`card article_card bbb p-3 mb-5 shadow` }
         >
            <a>
              <div className='cardTitle'>{Video.title}</div>
                          
  <iframe class="embed-responsive-item" style={{width:"100%" , aspectRatio:"16 / 9"}} src={`https://www.youtube.com/embed/${Video.Url}`} allowFullScreen></iframe>


              <div className="article_date">
                <span className="article_day">{date}</span>
                <span className="article_month">{monthAbbreviation}</span>
              </div>
              <div className={`card-body p-0`}>
                <p className={`card-text`} style={{overflow:'hidden '}} >
                  {Video.desc}
                </p>
              </div>
            </a>
          </div>
        </div> 
       
    </>
  )
}
