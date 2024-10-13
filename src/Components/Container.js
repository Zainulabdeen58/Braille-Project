import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import ViewCart from './ViewCart';
import Accessibility from './Accessibility';

function Container({children }) {
  return (
    <div>
        <Header/>
        <Navbar/>
        <ViewCart/>
        <Accessibility/>
        <div>{children}</div>   
    </div>
  )
}

export default Container;
