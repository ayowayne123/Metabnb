import React from 'react'
import Card from './Card'
import card1 from '../../images/cards_Images/image1.png'
import card2 from '../../images/cards_Images/image2.png'
import card3 from '../../images/cards_Images/image3.png'
import card4 from '../../images/cards_Images/image4.png'
import card5 from '../../images/cards_Images/image5.png'
import card6 from '../../images/cards_Images/image6.png'
import card7 from '../../images/cards_Images/image7.png'
import card8 from '../../images/cards_Images/image8.png'

function Inspiration() {
  return (
    <div className='container'>
        <span className='flex py-9 justify-center text-5xl text-black font-bold text-center'> 
        Inspiration for your next adventure</span>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12'>
        <Card image={card1}/>
        <Card  image={card2}/>
        <Card image={card3}/>
        <Card  image={card4}/>
        <Card  image={card5}/>
        <Card  image={card6}/>
        <Card  image={card7}/>
        <Card  image={card8}/>  </div>
        
       

    </div>
  )
}

export default Inspiration