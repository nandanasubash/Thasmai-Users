import React from "react";

function FinancialConfigTable({ data }) {
  return (
    <div className="w-full overflow-scroll max-h-[50vh]">
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
        <tbody className="my-10">
        
        
              <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                <td className="text-left ps-5">Point Threshold</td>
                <td className="text-center text-indigo-600">
                    <input className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" type="text" />
                </td>
                <td className="text-center">
                    <button className="w-[100px] h-[35px] bg-[#66A2FA] text-white rounded-xl">Edit</button>
                </td>                
              </tr>


              <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                <td className="text-left ps-5">Coupon Threshold</td>
                <td className="text-center text-indigo-600">
                    <input className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" type="text" />
                </td>
                <td className="text-center">
                    <button className="w-[100px] h-[35px] bg-[#66A2FA] text-white rounded-xl">Edit</button>
                </td>                
              </tr>

              <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                <td className="text-left ps-5">Coupon Saturation Limit</td>
                <td className="text-center text-indigo-600">
                    <input className="w-full h-[35px] border-none bg-[#D9D9D9] rounded" type="text" />
                </td>
                <td className="text-center">
                    <button className="w-[100px] h-[35px] bg-[#66A2FA] text-white rounded-xl">Edit</button>
                </td>                
              </tr>

              <tr className="font-semibold text-[0.8rem] text-black my-10 ">
                <td className="text-left ps-5">Fees</td>
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

export default FinancialConfigTable;
