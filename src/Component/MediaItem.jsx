import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";




export default function MediaItem(props) {
  return (
    <div className="media-item h-72 md:h-96 w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
      <Link to="/media/majlis" className="media-link block group relative mx-2 overflow-hidden shadow-lg">
        <LazyLoadImage
          src={props.image}
          srcSet={`${props.image} 300w, ${props.image} 600w, ${props.image} 1200w`} // Adjust the sizes accordingly
          sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px" // Adjust the sizes accordingly
          className="media-image relative z-0 object-fit-contain w-full h-72 md:h-96"
          alt={props.title}
         
        />
        <div className="media-overlay absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
        <div className="media-content absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
          <div className="media-title h-1/2 relative">
            <div className="absolute bottom-0 text-center">
              <h2 className="font-bold text-white leading-tight transition text-center duration-300 text-xl pb-6 group-hover:underline">
                {props.title}
              </h2>
            </div>
          </div>
          <div className="media-description h-1/2">
            <p className="text-white pb-4 opacity-100 transition duration-300 group-hover:opacity-100">{props.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
