import React from 'react'
import Mbtoken from '../../images/Mbtoken.png'
import Metamask from '../../images/Metamask.png'
import Opensea from '../../images/Opensea.png'

function Logos() {
  return (
    <div className='h-16 w-full bg-pink-grad py-4'> 
    <div className='container h-full flex flex-row gap-6 items-center justify-between '> 
    <span> <img src={Mbtoken} width="170" height="200" alt='Mbtoken Logo'/> </span>    
 <span> <img src={Metamask} width="170" height="200" alt='Metamask Logo'/> </span>
    <span> <img src={Opensea} width="170" height="200" alt='Opensea Logo'/> 
</span>    
    </div>

    </div>
  )
}

export default Logos