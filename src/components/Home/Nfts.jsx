import React from 'react'
import side from '../../images/side.png'
import side_left from '../../images/side_left.png'
import side_right from '../../images/side_right.png'

function Nfts() {
  return (
    <div className='bg-pink-grad max-h-screen text-white'> 
    <div className='py-16 container grid  grid-cols-[3fr,4fr] items-center overflow-hidden'>
        <div className='flex flex-col justify-center gap-10 pr-[10%]'> 
            <span className='font-bold text-5xl'>Metabnb NFTs </span>
            <span className='text-lg font-normal bg-clip-text'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. 
                These NFTs gives our cutomer access to loads of our exclusive services. </span>
                <button className='py-4  w-40 bg-white text-base  text-pink-800 rounded-xl'> Learn more</button>
            </div>
        <div className="  h-full w-full place-self-center ">
            <div className="grid grid-cols-[3fr,1fr,1fr,3fr,1fr] grid-rows-[2fr,2fr,2fr,2fr,2fr] ">
              
              <div className="col-start-2 col-span-3 row-start-1 row-span-3 ">  <img className="" src={side} width={1000}  alt="" />
                </div>
            
               <div className="col-start-1 col-span-3 row-span-3 row-start-2 ">  <img className="translate-y-[10%] translate-x-[2%]" src={side_left}width={1000}  alt="" />
                </div>
             
              <div className="col-start-3 col-span-3 row-span-3 row-start-3  ">  <img className="-translate-x-[10%] translate-y-[2%]" src={side_right} width={1000} alt="" />
                </div>
              </div>
              
            </div>
          </div>
          </div>
        
    
  )
}

export default Nfts