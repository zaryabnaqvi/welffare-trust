import React from 'react'
import Image from '../assets/images/logo.png'

export default function loader() {
  return (
    <>

<div className='d-flex justify-content-center'>
       <div className="loader">
        <img src={Image} />
    </div>
    </div>
    </>
  )
}
