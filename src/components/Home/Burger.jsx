import React, {useState} from 'react'
import Metabnbwhite from '../../images/metabnbwhite.png'
import Wallet from '../Wallet'
import {FaTimes, } from "react-icons/fa";




function Burger({open,onClose}) {
    const [walletOpen, setWalletOpen] = useState(false)

    if(!open) return null
  return (
    
    <div className='h-screen fixed w-full top-0 left-0 right-0 bg-pink-grad'>
        <span className='p-6 flex gap-9 flex-col h-1/2 text-white'>
        <div className=' text-2xl font-bold flex flex-row items-center justify-between'> 
                <img src={Metabnbwhite} alt='Logo'/>
                <span className='cursor-pointer'><FaTimes onClick={onClose}/> </span>
            </div>
            <div className='flex text-xl flex-col justify-around gap-y-4'> 
            <a href='/'>Home </a>
            <a href='/place'>Place to stay </a>
            <a href=' '>NFTs</a>
            <a href=' '>Community </a>

            </div>
            <div> 
                <button onClick={()=> {setWalletOpen(true)  }} className='py-4 px-7 bg-white text-base font-bold text-pink-700 rounded-xl'> Connect wallet</button>
                <Wallet open={walletOpen} onClose={()=>setWalletOpen(false)}/>
            </div> </span>
        

    </div>
  )
}

export default Burger