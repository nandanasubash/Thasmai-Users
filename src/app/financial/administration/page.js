"use client"

import React, { useEffect, useRef } from "react";

import NavLink from '../navlink/navlink';
import Filterchip from "../filterchip/filterchip";
import Image from "next/image";


function Administration() {

 


  return (
    <div className="px-7">
      <div className="flex items-center justify-start ">
        <NavLink />
        {/* <CouponLabel /> */}
      </div>

      
          
      {/*------------------- Container -------------------------*/}
      <div className="w-full h-[75vh] mt-5 p-10 bg-white shadow-2xl rounded-xl">

        <div className="h-[50%]">
           
          <div className="w-[230px] h-[230px] rounded-full p-8 bg-[#94AFDA] flex justify-center items-center">
            <div className="w-[160px] h-[160px] rounded-full bg-white shadow-sm shadow-black flex flex-col justify-center items-center">
              <p className="font-bold text-xl">$1,25,000</p>
              <p className="text-sm text-[#939393]">Account Balance</p>
            </div>
          </div>

        </div>
        <div className="h-[50%] p-2">
          <div className="w-[400px] h-full p-3 bg-white rounded-[10px] shadow drop-shadow-lg">
            <h1 className="h-[15%] text-[#0061F4] font-semibold">Recent Transactions</h1>

            <table className="w-full h-[60%] text-[12px]">
              <thead className="h-[40px]">
                <tr>
                  <td className="w-[80%] font-medium">Date</td>
                  <td className="w-[20%] font-medium">Amount</td>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[20px]">
                  <td>08.01.2024  at  1:50 PM</td>
                  <td>₹ 10,000</td>
                </tr>
                <tr className="h-[20px]">
                  <td>08.01.2024  at  1:50 PM</td>
                  <td>₹ 10,000</td>
                </tr>
                <tr className="h-[20px]">
                  <td>08.01.2024  at  1:50 PM</td>
                  <td>₹ 10,000</td>
                </tr>
                </tbody>
            </table>
            
            <div className="w-full h-[25%] text-right">
              <button className="w-[100px] h-[35px] mt-3 text-[14px] font-semibold text-white bg-[#5799FD] rounded-[62px]">View All</button>
            </div>

          </div>

        </div>

        
      </div> {/* ----close container----*/}



      
    </div>
  )
}

export default Administration