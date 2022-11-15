import React from 'react'
import Logowhite from '../images/metabnbwhite.png'
import {BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs";

function Footer() {
  return (
   <div className='bg-[#1D1D1E]  '> 
    <div className='container min-h-80 grid lg:grid-cols-4 grid-cols-2 gap-6 text-white items-center font-normal text-sm '> 
    <span>
    <a href='/' className='my-10'> 
                <img src={Logowhite} alt='Logo'/>
            </a> 
            <span className='flex flex-row items-center pb-16 gap-4 text-xl'> <BsFacebook/> <BsInstagram/> <BsTwitter/> </span>
            <span className='text-md'> &copy; 2022 Metabnb </span></span>
    <span className='flex flex-col gap-3'>
    <span className='font-bold text-lg'> Community</span>
    <span>Nft </span>
    <span>Tokens </span>
    <span>Landlords </span>
    <span>Discord </span>

       </span>
       <span className='flex flex-col gap-3'>
    <span className='font-bold text-lg'> Places</span>
    <span>Castle </span>
    <span>Farms </span>
    <span>Beach </span>
    <span>Learn more </span>
       </span>
       <span className='flex flex-col gap-3'>
    <span className='font-bold text-lg'> About us</span>
    <span>Road map </span>
    <span>Creators </span>
    <span>career </span>
    <span>Contact us</span>
       </span>
    </div>
    </div>
  )
}

export default Footer