import React, {useState} from 'react'
import Logo from '../images/Metabnb.png'
import Wallet from './Wallet'

function Nav() {

  const [walletOpen, setWalletOpen] = useState(false)
  return (
    <div className='container text-blacktext'>
        <div className='h-24 hidden lg:flex flex-row items-center justify-between'> 
            <div> 
                <img src={Logo} alt='Logo'/>
            </div>
            <div className='flex text-xl flex-row justify-around gap-x-12'> 
            <a href='/'>Home </a>
            <a href='/Place'>Place to stay </a>
            <a href=' '>NFTs</a>
            <a href=' '>Community </a>

            </div>
            <div> 
                <button onClick={()=> setWalletOpen(true)} className='py-4 px-7 bg-pink-grad text-base  text-white rounded-xl'> Connect wallet</button>
                <Wallet open={walletOpen} onClose={()=>setWalletOpen(false)}/>
            </div>
        </div>
    </div>
  )
}

export default Nav