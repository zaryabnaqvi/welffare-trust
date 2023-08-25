import React from 'react';
// import './TabsComponent.css'; // Make sure to create this CSS file
import MediaGallery from './MediaGallery'
import MediaVideos from './MediaVideos'
import { useEffect } from 'react';

const TabsComponent = (props) => {

  document.title="MEDIA|AZA-E-HUSSAIN"


  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <>
    <div className='container-fluid mt-5 pt-5'>
     <div className='container pt-5 text-center'>
    <h1 style={{ color: '#130f2a', fontSize: "6rem", fontFamily:"Champion Gothic" }} >{props.choice} - AZA-E-HUSSAIN</h1>
      
    </div>
    <div className="tabs">
      <input type="radio" name="tabs" id="tab1" checked />
      <label htmlFor="tab1">
      <i class="fa-solid fa-image"></i><span>Gallery</span>
      </label>

      <input type="radio" name="tabs" id="tab2" />
      <label htmlFor="tab2">
      <i class="fa-solid fa-video"></i><span>Videos</span>
      </label>

      <div id="tab-content1" className="tab-content">
      <MediaGallery choice={props.choice.toLowerCase()}/>
      </div> {/* #tab-content1 */}

      <div id="tab-content2" className="tab-content">
      <MediaVideos choice={props.choice.toLowerCase()}/>
      </div> {/* #tab-content2 */}
    </div> 
    </div>

    </>
  );
};

export default TabsComponent;
