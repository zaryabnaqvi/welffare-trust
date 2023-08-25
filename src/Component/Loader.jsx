import React from 'react'
import Image from '../assets/images/logo.png'

export default function loader() {
  return (
    <>

<div className='container text-center'>
       <div className="loader">
        <img src={Image} />
    </div>
    </div>
    </>
  )
}
