import React from 'react'

export default function Videos(props) {

    const {Video} = props
  return (
    <div className='container mt-5 pt-5'>
      <div class="embed-responsive embed-responsive-16by9 mt-5">
  <iframe class="embed-responsive-item" src={`https://www.youtube.com/embed/${Video._id}`} allowFullScreen></iframe>
</div>
    </div>
  )
}
  