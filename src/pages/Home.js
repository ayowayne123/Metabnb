import React from 'react'
import image1 from '../images/hero_first.png'
import image2 from '../images/hero_second.png'
import image3 from '../images/hero_third.png'
import image4 from '../images/hero_fourth.png'
import Logos from '../components/Home/Logos'
import Inspiration from '../components/Home/Inspiration'
import Nfts from '../components/Home/Nfts'


function Home() {
  return (

    <div> 
    <div className='container'>
      <div>   <span className='block lg:hidden font-normal text-3xl md:text-4xl 2xl:text-hero-main xl:text-5xl xl:leading-5xl '> Rent a <span className='font-bold text-pinktext'>Place</span> away from <span className='font-bold text-pinktext'>Home
      </span> in the <span className='font-bold text-pinktext'>Metaverse</span></span></div>
        <div className='pb-6 grid lg:grid-cols-2  w-full lg:h-[calc(100vh-6rem)] items-center text-blacktext'>
            <div className=' flex flex-col text-left h-full w-full justify-center gap-12'> 
            <span className='hidden lg:block font-normal text-3xl 2xl:text-hero-main xl:text-5xl xl:leading-5xl '> Rent a <span className='font-bold text-pinktext'>Place</span> away from <span className='font-bold text-pinktext'>Home</span> in the <span className='font-bold text-pinktext'>Metaverse</span></span>
            <span className='lg:text-2xl'> we provide you access to luxury and affordable houses in the metaverse, 
                get a chance to turn your imagination to reality at your comfort zone</span>
            <span>
                 <input type='text'  className='w-2/3 h-12 border-2 border-textblack focus:outline-none rounded-l-lg p-3' placeholder='search for location'/>
                 <button className='inline-flex w-1/3 justify-center items-center h-12 bg-pink-grad text-base  text-white rounded-r-xl'> Search</button></span>
            </div>
            <div className='row-start-1 lg:col-start-2 grid grid-cols-2  gap-2 w-full lg:pl-24  lg:pr-5 py-16'>
                   <div className='grid grid-flow-row grid-rows-5 gap-2'>
                    <span className='row-start-2 h-full row-span-2'> <img src={image1} alt='Logo' width="1000" height="1000"  /></span> 
                    <span className='row-span-2'> <img src={image2} alt='Logo' width="1000" height="1000"/></span> 
                    </div> 
                    <div className='grid grid-flow-row grid-rows-5 gap-2'> 
                    <span className='row-start-1 row-span-2'> <img src={image3} alt='Logo' width="1000" height="1000"/></span> 
                    <span className='row-span-2'> <img src={image4} alt='Logo' width="1000" height="1000"/></span> 
                    </div>
                    </div>

        </div>
    </div>
    <Logos/>
    <Inspiration/>
    <Nfts/>

    </div>
    
  )
}

export default Home