"use client"
import React, { useEffect } from 'react';
import Chatbox from '@/app/components/chatbox/chatbox';

const page = ({params}) => {
  
  useEffect(()=>{
    console.log(params)

  },[])
  return (
    <div>
      
     <Chatbox/>
    </div>
  );
};

export default page;
