import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
    <Nav/>
    <div className='min-h-[calc(100vh-32rem)]'>{children}  </div>
    <Footer/>
    </div>
  )
}

export default Layout