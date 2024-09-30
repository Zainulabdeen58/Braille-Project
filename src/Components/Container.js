import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import ViewCart from './ViewCart';

function Container({children }) {
  return (
    <div>
        <Header/>
        <Navbar/>
        <ViewCart/>
        <div>{children}</div>   
    </div>
  )
}

export default Container;
