import React from 'react'

export default function Videos(props) {

    const {Video} = props
  return (
    <>
    <section>
      <div className='container'>
      <div className="container mt-5 pt-5">
    <div className='container mt-5 pt-5'>

      <div class="embed-responsive mt-5">
  <iframe class="embed-responsive-item" style={{width:"100%" , aspectRatio:"16 / 9"}} src={`https://www.youtube.com/embed/${Video.Url}`} allowFullScreen></iframe>
</div>
</div>
    </div>
    </div>
    </section>
    </>
  )
}
  