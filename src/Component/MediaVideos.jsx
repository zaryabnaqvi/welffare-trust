import React,{useState} from 'react';
import { useEffect } from 'react';
import MediaitemVideos from './MediaitemVideos';
import Loader from './Loader'
// import { Route , Routes} from 'react-router-dom';
// import Videoss from './Videos'

const ArticleCard = (props) => {

    const [isLoading,SetisLoading]=useState(false);

    const [Videos,setVideos]=useState([]);

 
 
    const getVideos=async()=>{
        SetisLoading(true)
      const data = await fetch("https://gold-adventurous-perch.cyclic.cloud/api/videos/getvideos",{
        method:"GET",
      
      })
      const json=await data.json();
      SetisLoading(false)
      
      setVideos(json)
    
    }
  



  useEffect(()=>{
    document.title="MEDIA | AZA-E-HUSSAIN";
    getVideos();
    
  }
  ,[])
  return (


    <> 




    <div className='container-fluid mt-5 pt-5'></div>

   

    {Videos.length === 0 && (<>

    <h1 className='mb-5 text-center' style={{ color: '#130f2a', fontSize: "5rem", fontFamily:"Champion Gothic" }} >No Videos Available</h1>

        </>) 
        }
       <div className="">
    {/* <h1 style={{ color: '#130f2a', fontSize: "8rem",fontFamily:'Champion Gothic' }} >MAJLIS</h1> */}

      <div className="news-container">

      {isLoading && (
        <>
        <Loader/>
        </>
    )

    }

    {!isLoading && Videos.length!==0 && Videos.reverse().map((video)=>{
        if(video.choice.toLowerCase()=== props.choice)
        return(
            <>
            <MediaitemVideos  key={video._id} Video={video}/>
            </>
        )
    })}




      </div>
    </div>

    </>

  );
};

export default ArticleCard;
