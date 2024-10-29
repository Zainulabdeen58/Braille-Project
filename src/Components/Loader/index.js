import React from 'react'
import './style.css'

function Loader() {
  return (
    <div className='flex flex-col justify-center items-center h-[100dvh]'>
      <span class="loader"></span>
      <p className='text-3xl'>Loading...</p>
    </div>
  )
}

export default Loader
