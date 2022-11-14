import React from 'react'

function Footer() {
  return (
    <div className='bg-[#1D1D1E] h-80 grid grid-cols-4 text-white font-normal text-sm items-center'> 
    <span> </span>
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
  )
}

export default Footer