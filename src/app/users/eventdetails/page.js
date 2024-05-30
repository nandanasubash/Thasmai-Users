"use client"

import React from 'react'
import NavLink from '../navlink/navlink'
import CouponLabel from '@/app/components/couponlabel/couponLabel'

function EventDetails() {
  return (
   

  
    <div className='flex items-center mx-5 justify-between'>
      <NavLink />
      <CouponLabel/>
    </div>
  )
}

export default EventDetails