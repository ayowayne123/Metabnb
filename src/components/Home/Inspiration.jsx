import React from 'react'
import Card from './Card'

function Inspiration() {
  return (
    <div className='container'>
        <span className='flex py-9 justify-center text-5xl text-black font-bold text-center'> 
        Inspiration for your next adventure</span>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>  </div>
        
       

    </div>
  )
}

export default Inspiration