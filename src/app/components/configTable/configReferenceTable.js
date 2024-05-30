"use client"

import React, { useState } from "react";
import { RiEditLine, RiDeleteBin6Line } from "react-icons/ri";

function ReferenceConfigTable({ dummyData }) {

  const [editableId, setEditableId] = useState(null);

  return (
    <div className="w-full overflow-scroll h-[90%]">
      <table className="table rounded-3xl">
        <thead
          className="w-full h-[50px] bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
          style={{ borderRadius: "11px" }}
        >
          <tr className="rounded-3xl">
            <th className="text-center w-[10%]">No</th>
            <th className="text-center w-[20%]"></th>
            <th className="text-center w-[50%]">Questions</th>
            <th className="text-center w-[10%]">Edit</th>
            <th className="text-center w-[10%]">Delete</th>
          </tr>
        </thead>
        <tbody className="my-10">


          {
            dummyData.map((data, index) => {
              return (
                <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                  <td className="text-left ps-5">{index + 1}</td>
                  <td className="text-left ps-5">{data.name}</td>
                  <td className="text-center text-indigo-600">
                    {
                      editableId === data.id ? (
                        <input 
                          className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" 
                          type="text"
                          placeholder={ data.value } 
                        />

                      ) : (
                        data.value
                      )
                    }
                  </td>
                  <td className="text-center">
                    {
                      editableId === data.id ? (
                        <button 
                          className="w-[60px] h-[35px] bg-green-500 text-white rounded-xl flex justify-center items-center"
                          onClick={() => setEditableId(null)}
                        >Save</button>
                      ) : (
                        <button 
                          className="w-[60px] h-[35px] bg-[#66A2FA] text-xl text-white rounded-xl flex justify-center items-center"
                          onClick={() => setEditableId(data.id)}
                        >
                          <RiEditLine />
                        </button>  
                      )
                    }
                  </td>   
                  <td className="text-center">
                    <button className="w-[60px] h-[35px] bg-[#D10909] text-xl text-white rounded-xl flex justify-center items-center">
                      <RiDeleteBin6Line />
                    </button>
                  </td>              
                </tr>
              );
            })
          }
        
        
              

              

              

        
        </tbody>
      </table>
    </div>
  );
}

export default ReferenceConfigTable;
