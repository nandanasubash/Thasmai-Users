"use client"

import React from 'react'
import FeedbackTable from '../components/feedback/feedbackTable'
import data from "./data"
import Chatbox from '../components/chatbox/chatbox'




export default function Feedback(){
    return (
    <div>
    
    <input class="m-4 border-none h-9" id="inputField1" type="text" placeholder="From date"/>
    <input class="m-5 border-none h-9" id="inputField2" type="text" placeholder="To date"/>
    <input class="m-5 border-none h-9" id="inputField3" type="text" placeholder="Priority"/>
    <button class="m-5 bg-[#5799FD] py-2 px-5 rounded text-white">Submit</button>
    
    <FeedbackTable data={ data }/>
    
    </div>

    )
}

