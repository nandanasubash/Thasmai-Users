import React from "react";

function RegPageConfigTable({ data }) {
  return (
    <div className="w-full overflow-scroll h-[90%]">
      <table className="table rounded-3xl">
        <thead
          className="w-full h-[50px] bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
          style={{ borderRadius: "11px" }}
        >
          <tr className="rounded-3xl">
            <th className="text-center w-[30%]">Field</th>
            <th className="text-center w-[55%]">Value</th>
            <th className="text-center w-[15%]">Description</th>
          </tr>
        </thead>
        <tbody className="my-10 overflow-y-auto">
        
        
              <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                <td className="text-left ps-5">Registartion Page Prompt</td>
                <td className="text-center text-indigo-600">
                    <input className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" type="text" />
                </td>
                <td className="text-center">
                    <button className="w-[100px] h-[35px] bg-[#66A2FA] text-white rounded-xl">Edit</button>
                </td>                
              </tr>


              <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                <td className="text-left ps-5">Registartion Page Reference</td>
                <td className="text-center text-indigo-600">
                    <input className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" type="text" />
                </td>
                <td className="text-center">
                    <button className="w-[100px] h-[35px] bg-[#66A2FA] text-white rounded-xl">Edit</button>
                </td>                
              </tr>

              <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                <td className="text-left ps-5">Registartion footer Text</td>
                <td className="text-center text-indigo-600">
                    <input className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" type="text" />
                </td>
                <td className="text-center">
                    <button className="w-[100px] h-[35px] bg-[#66A2FA] text-white rounded-xl">Edit</button>
                </td>                
              </tr>

              <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                <td className="text-left ps-5">Registration success card message</td>
                <td className="text-center text-indigo-600">
                    <input className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" type="text" />
                </td>
                <td className="text-center">
                    <button className="w-[100px] h-[35px] bg-[#66A2FA] text-white rounded-xl">Edit</button>
                </td>                
              </tr>


              <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                <td className="text-left ps-5">Registration success card phone number</td>
                <td className="text-center text-indigo-600">
                    <input className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" type="text" />
                </td>
                <td className="text-center">
                    <button className="w-[100px] h-[35px] bg-[#66A2FA] text-white rounded-xl">Edit</button>
                </td>                
              </tr>


              <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                <td className="text-left ps-5">Registration success page heading</td>
                <td className="text-center text-indigo-600">
                    <input className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" type="text" />
                </td>
                <td className="text-center">
                    <button className="w-[100px] h-[35px] bg-[#66A2FA] text-white rounded-xl">Edit</button>
                </td>                
              </tr>


              <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                <td className="text-left ps-5">Registration success page text</td>
                <td className="text-center text-indigo-600">
                    <input className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" type="text" />
                </td>
                <td className="text-center">
                    <button className="w-[100px] h-[35px] bg-[#66A2FA] text-white rounded-xl">Edit</button>
                </td>                
              </tr>


              
              
            
        
        </tbody>
      </table>
    </div>
  );
}

export default RegPageConfigTable;
