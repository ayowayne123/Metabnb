import React from 'react'
import {AiFillStar} from "react-icons/ai";

function Card({image}) {
  return (
    <div className='h-card w-full border-[#D7D7D7] border rounded-xl px-4 text-xs'>
      <div className=''> 
    <span>  <img src={image} alt='building' className='py-4 object-contain ' width={1000} /> </span> </div>
    <span className='flex flex-row justify-between'>
      <span> Desert King</span>
      <span className='font-bold'> 1MBT per night</span>
       </span>
       <span className='flex flex-row justify-between my-2'>
      <span>2345km away</span>
      <span> available for 2weeks stay</span>
       </span>
       <span className='flex gap-2 mb-4 text-pink-700'> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></span>
       
    </div>
  )
}

export default Card