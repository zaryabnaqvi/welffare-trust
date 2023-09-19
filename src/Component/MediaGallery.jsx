import React from 'react';
// import Image from '../assets/images/logo.png'
import { useEffect ,useState} from 'react';
import MediaitemGallery from './MediaitemGallery';
import Loader from './Loader'
import {Route ,Routes} from 'react-router-dom'


const ArticleCard = (props) => {


    const [Gallery,setGallery]=useState([]);
    const [isLoading,SetisLoading]=useState(false);


  
    const getGallery=async()=>{
        SetisLoading(true)
      const data = await fetch("https://gold-adventurous-perch.cyclic.cloud/api/gallery/getgallery",{
        method:"GET",
      
      })
      const json=await data.json();
      SetisLoading(false)
      setGallery(json)
    }

  useEffect(()=>{
    document.title="MEDIA|AZA-E-HUSSAIN"
    getGallery();
  }
  ,[])
  return (


    <> 



    <div className='container-fluid mt-5 pt-5'>  </div>


    {!isLoading && Gallery.length===0 && (<div className='text-center'>

<h1 className='mb-5 text-center' style={{ color: '#130f2a', fontSize: "5rem", fontFamily:"Champion Gothic" }} >No Photos Available</h1>

    </div>) 
    }
   <div className="container">
{/* <h1 style={{ color: '#130f2a', fontSize: "8rem",fontFamily:'Champion Gothic' }} >MAJLIS</h1> */}

  <div className="news-container">

  {isLoading && (
    <div className='text-center'>
    <Loader/>
    </div>
)

}

{!isLoading && Gallery.length!==0 && Gallery.map((Pic)=>{
        if(Pic.choice.toLowerCase() === props.choice){
        return(
            <>

    <MediaitemGallery  key={Pic._id} Pic={Pic}/>
            </>
        )
        }
    })

    }



</div>
      </div>
    

    </>

  );
};

export default ArticleCard;
