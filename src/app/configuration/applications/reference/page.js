"use client"

import React from 'react'
import NavLink from '../../navlink/navlink'
import NavLinkApp from '../NavlinkApp/navlinkApp'
import ReferenceConfigTable from '@/app/components/configTable/configReferenceTable'
import dummyData from './dummy'

function RefQuestionConfiguration() {
  return (
    <div className="px-7 h-full">
      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-[50%]'>
        <NavLinkApp />
      </div>

      {/* <div className='w-full mt-5 p-5 bg-white rounded-[8px] flex  shadow drop-shadow-md'>
        <p className='text-xl font-bold me-5'>Add new questions:</p>
        <div className='w-[70%] flex'>
          <input className="w-[80%] h-[35px] bg-[#D9D9D9] rounded-[8px] border-[#5799FD] border-2 focus:border-none" type='text' />
          <button className='w-[100px] ms-5 bg-[#39A307] text-white rounded-[8px]'>+ Add</button>
        </div>
      </div> */}

      <div className='w-full h-[60%] mt-5 p-3 pt-5 bg-white rounded-[8px] shadow drop-shadow-md'>
          <ReferenceConfigTable dummyData={dummyData}/>
          <div className='w-full h-[10%] pe-10 flex justify-end'>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded me-3'>Back</button>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded'>Next</button>
          </div>
      </div>
    </div>
  )
}

export default RefQuestionConfiguration