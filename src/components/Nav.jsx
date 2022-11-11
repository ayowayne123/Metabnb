import React from 'react'
import Logo from '../images/Metabnb.png'

function Nav() {
  return (
    <div className='container text-blacktext'>
        <div className='h-24 flex flex-row items-center justify-between'> 
            <div> 
                <img src={Logo} alt='Logo'/>
            </div>
            <div className='flex text-xl flex-row justify-around gap-x-12'> 
            <span>Home </span>
            <span>Place to stay </span>
            <span>NFTs</span>
            <span>Community </span>

            </div>
            <div> 
                <button className='py-4 px-7 bg-pink-grad text-base  text-white rounded-xl'> Connect wallet</button>
            </div>
        </div>
    </div>
  )
}

export default Nav