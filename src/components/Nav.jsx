import React, {useState} from 'react'
import Logo from '../images/Metabnb.png'
import Wallet from './Wallet'
import {AiOutlineMenu} from "react-icons/ai";
import Burger from './Home/Burger';

function Nav() {

  const [walletOpen, setWalletOpen] = useState(false)
  const [BurgerOpen, setBurgerOpen] = useState(false)
  return (
    <div className='container text-blacktext'>
        <div className='h-24 hidden lg:flex flex-row items-center justify-between'> 
            <div href='/'> 
                <img src={Logo} alt='Logo'/>
            </div>
            <div className='flex text-xl flex-row justify-around gap-x-12'> 
            <a href='/'>Home </a>
            <a href='/place'>Place to stay </a>
            <a href=' '>NFTs</a>
            <a href=' '>Community </a>

            </div>
            <div> 
                <button onClick={()=> setWalletOpen(true)} className='py-4 px-7 bg-pink-grad text-base  text-white rounded-xl'> Connect wallet</button>
                <Wallet open={walletOpen} onClose={()=>setWalletOpen(false)}/>
            </div>
        </div>
        <div className='lg:hidden'>  <div> 
          <span className='my-5 flex flex-row items-center gap-5 text-2xl text-pink-800 font-bold'>   <AiOutlineMenu  onClick={()=> setBurgerOpen(true)} />    <img src={Logo} width={160} alt='Logo'/> </span>
          <span> <Burger open={BurgerOpen} onClose={()=>setBurgerOpen(false)}/> </span>  </div></div>
    </div>
  )
}

export default Nav