import React from 'react'
import {Link} from "react-router-dom"

export default function MediaItem(props) {
  return (
    <>
         <div  className="h-72 md:h-96 w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
              <Link to="/media/majlis" className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
                <img src={props.image} className="absolute z-0 object-cover w-full h-72 md:h-96"/>
                <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0 text-center">
                      <h2 className="font-bold text-white leading-tight transition text-center duration-300 text-xl pb-6 group-hover:underline">{props.title}</h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">{props.desc}</p>
                   <Link to="/media/majlis"> <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                   </Link>    </div>
                </div>
              </Link>
            </div> 
    </>
  )  
}
