"use client"
import React from 'react'

function filterchip() {
  return (
    <div className='h-full  flex justify-evenly items-center my-2 snap-center shrink-0'>
        <div className='bg-white max-w-48  text-black font-semibold rounded-xl flex items-center justify-center px-7 py-3 '></div>
        <div className='bg-white max-w-48  text-black font-semibold rounded-xl flex items-center justify-center px-7 py-3 '></div>
        <div className='bg-white max-w-48  text-black font-semibold rounded-xl flex items-center justify-center px-7 py-3 '></div>
        
        <div className='bg-white w-11 h-11  rounded-full flex justify-center items-center text-black font-semibold cursor-pointer' >X</div>
    </div>
  )
}

export default filterchip