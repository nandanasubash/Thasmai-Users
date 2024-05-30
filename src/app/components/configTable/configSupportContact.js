"use client"
import React, { useState } from "react";

function SupportContactConfigTable({ dummyData }) {

  const [editableId, setEditableId] = useState(null);


  return (
    <div className="w-full overflow-scroll h-[90%]">
      <table className="table rounded-3xl">
        <thead
          className="w-full h-[50px] bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
          style={{ borderRadius: "11px" }}
        >
          <tr className="rounded-3xl">
            <th className="text-center w-[30%]">Name</th>
            <th className="text-center w-[25%]">Role</th>
            <th className="text-center w-[25%]">Phone</th>
            <th className="text-center w-[20%]"></th>
          </tr>
        </thead>
        <tbody className="my-10">
          {
            dummyData.map((data, index) => {
              return (
                <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                  <td className="text-center ps-5">
                    {
                      editableId === data.id ? (
                        <input 
                          className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" 
                          type="text"
                          placeholder={data.name} 
                        />
                      ) : (
                        data.name
                      )
                    }
               
                  </td>
                  <td className="text-center text-indigo-600">
                  {
                      editableId === data.id ? (
                        <input 
                          className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" 
                          type="text"
                          placeholder={data.role} 
                        />
                      ) : (
                        data.role
                      )
                    }
               
                    
                  </td>
                  <td className="text-center">
                   {
                      editableId === data.id ? (
                        <input 
                          className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" 
                          type="text"
                          placeholder={data.phone} 
                        />
                      ) : (
                        data.phone
                      )
                    }
               
                  </td>
                  <td className="text-center">
                    {
                      editableId === data.id ? (
                        <button 
                          className="w-[100px] h-[35px] bg-green-500 text-white rounded-xl"
                          onClick={ () => { setEditableId(null) } }
                        >Save</button>
                      ) : (
                        <button 
                          className="w-[100px] h-[35px] bg-[#66A2FA] text-white rounded-xl"
                          onClick={ () => { setEditableId(data.id) } }
                        >Edit</button>
                      )

                    }
                  </td>               
                </tr>
              )
            })
          }
        
              
        </tbody>
      </table>
    </div>
  );
}

export default SupportContactConfigTable;
