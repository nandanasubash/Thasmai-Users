"use client"

import React from 'react'
import NavLink from '../../navlink/navlink'
import NavLinkApp from '../NavlinkApp/navlinkApp'

function MeditationVideo() {
  return (
    <div className="px-7 h-full">
      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-[50%]'>
        <NavLinkApp />
      </div>
      <div className='w-full h-[60%] mt-10 p-3 pt-5 bg-white rounded-[8px] shadow drop-shadow-md'>
          {/* <FinancialConfigTable /> */}

          <div className="w-full p-5 flex items-center">
            <p>Paste URL here:</p>
            <input 
              className="min-w-[60%] h-[40px] mx-3 ps-5 rounded-[8px] border-2 border-[#66A2FA] focus:outline-[#6aa4fb] focus:bg-[#D9D9D9]" 
              type="string" 
            />
            <button className="w-[150px] h-[40px] text-white bg-green-500 rounded-[8px]">Upload</button>
          </div>

          {/* <div className='w-full pe-10 flex justify-end'>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded me-3'>Back</button>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded'>Next</button>
          </div> */}
      </div>
    </div>
  )
}

export default MeditationVideo