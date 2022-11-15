import React from 'react'
import {FaTimes, } from "react-icons/fa";
import {MdArrowForwardIos} from "react-icons/md";
import metamasklogo from '../images/metamasklogo.png'
import WalletConnectlogo from '../images/WalletConnectlogo.png'

function Wallet({open,onClose}) {


    if(!open) return null
  return (
    <div onClick={onClose} className='fixed flex flex-col justify-center z-10 h-screen w-full bg-[#00000059] top-0 left-0 right-0 overflow-hidden'>
        <div onClick={(e) => {e.stopPropagation()}} className='place-self-center h-[328px] w-[600px] bg-white rounded-xl py-6 '>
            <div className='px-8 '> 
            <span className=' text-2xl font-bold flex flex-row items-center justify-between'>
            <span> Connect Wallet </span>
            <span className='cursor-pointer'><FaTimes onClick={onClose}/> </span>
             </span> 
            </div>
            <div className='border-b border-b-[#CFD8DC] my-6'> </div>
            <div className='px-8 gap-4 flex flex-col'>
            <span className='text-lg'> Choose your preferred wallet:</span>
            <span className='border-[#CFD8DC] border rounded-[12px] text-lg h-16 w-[536px] py-3 px-4 '>
            <span className='flex-row flex justify-between items-center'> 
            <span className='flex items-center  font-semibold gap-4'> 
            <img src={metamasklogo} width={44} alt='Logo'/>  <span>Metamask </span> </span>
            <span className='text-[#959DA6]'><MdArrowForwardIos/> </span> 
             </span>  
                 </span>
                 <span className='border-[#CFD8DC] border rounded-[12px] text-lg h-16 w-[536px] py-3 px-4 '>
            <span className='flex-row flex justify-between items-center'> 
            <span className='flex items-center  font-semibold gap-4'> 
            <img src={WalletConnectlogo} width={44} alt='Logo'/>  <span>WalletConnect </span> </span>
            <span className='text-[#959DA6]'><MdArrowForwardIos/> </span> 
             </span>  
                 </span>
            
             </div>
           

             </div>

    </div>
  ) 
}

export default Wallet