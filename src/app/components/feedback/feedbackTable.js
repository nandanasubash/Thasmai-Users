"use client"
import React, { useState } from 'react';
import Chatbox from '../chatbox/chatbox';
import { useRouter } from 'next/navigation';

function FeedbackTable({ data }) {
  const router = useRouter()
  const [visibleChatIndex, setVisibleChatIndex] = useState(null);

  const toggleChatVisibility = (index) => {
    setVisibleChatIndex(index === visibleChatIndex ? null : index);
  };

  
  
  
  

  function handleShow(username){

router.push(`/feedback/chat/${username}`)
  }
  return (
    <div className="mt-5 w-full justify-between bg-white">
      <div className="overflow-scroll max-h-[32vh] px-3">
        <table className="table rounded-3xl">
          <thead className="bg-[#5799FD] text-white sticky text-[0.9rem]" style={{ borderRadius: "11px" }}>
            <tr className="rounded-3xl">
              <th className="text-center">Name</th>
              <th className="text-center">Date</th>
              <th className="text-center">Feedback</th>
              <th className="text-center"></th>
            </tr>
          </thead>
          <tbody className="my-10">
            {data.map((user, index) => {
              return (
                <tr key={index} className="font-semibold text-[0.8rem] text-black my-10">
                  <td className="text-center text-indigo-600">{user.Name}</td>
                  <td className="text-center">{user.Date}</td>
                  <td className="text-center">{user.Feedback}</td> 
                  <td className="text-center">
                    <button className="bg-[#5799FD] py-2 px-5 rounded text-white" onClick={() => handleShow(user.Name)}>
                      {visibleChatIndex === index ? 'Hide Chat' : 'Show Chat'}
                    </button>
                    {visibleChatIndex === index && <Chatbox />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <button className="m-4 bg-blue-500 py-2 px-5 rounded text-white">Previous</button>
        <button className="m-4 bg-blue-500 py-2 px-5 rounded text-white">Next</button>
      </div>
    </div>
  );
}

export default FeedbackTable;
