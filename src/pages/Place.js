import React from 'react'
import Card from '../components/Home/Card'
import card1 from '../images/cards_Images/image1.png'
import card2 from '../images/cards_Images/image2.png'
import card3 from '../images/cards_Images/image3.png'
import card4 from '../images/cards_Images/image4.png'
import card5 from '../images/cards_Images/image5.png'
import card6 from '../images/cards_Images/image6.png'
import card7 from '../images/cards_Images/image7.png'
import card8 from '../images/cards_Images/image8.png'
import card9 from '../images/cards_Images/image9.png'
import card10 from '../images/cards_Images/image10.png'
import card11 from '../images/cards_Images/image11.png'
import card12 from '../images/cards_Images/image12.png'
import card13 from '../images/cards_Images/image13.png'
import card14 from '../images/cards_Images/image14.png'
import card15 from '../images/cards_Images/image15.png'
import card16 from '../images/cards_Images/image16.png'
import sort from '../images/sort.svg'

function Place() {
  return (
    <div className='container text-blacktext'> 
    <div className='flex flex-row justify-between my-10 whitespace-nowrap gap-4 hover:text-black items-center overflow-scroll'>
        <span>Restaurant </span> 
        <span>Cottage </span>
        <span>Castle </span>
        <span>Fantast City </span>
        <span> Beach</span>
        <span> Carbins</span>
        <span>Off-grid </span>
        <span>Farm </span>
        <span className='inline-flex justify-between w-40 border border-[#B4B4B4] px-3 py-2 rounded-lg'><span>Location</span> 
        <span className='block'><img src={sort}  alt='sort' /></span>
         </span></div>
    
    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-20'>
        <Card  image={card5}/>
        <Card  image={card6}/>
        <Card  image={card7}/>
        <Card  image={card8}/>
        <Card image={card1}/>
        <Card  image={card2}/>
        <Card image={card3}/>
        <Card  image={card4}/>
        <Card image={card9}/>
        <Card  image={card10}/>
        <Card image={card11}/>
        <Card  image={card12}/>
        <Card image={card13}/>
        <Card  image={card14}/>
        <Card image={card15}/>
        <Card  image={card16}/>
         </div>
    </div>
  )
}

export default Place