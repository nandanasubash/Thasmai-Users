import React from "react";

function FeesTable({ data }) {
  return (
    <div className="overflow-scroll max-h-[32vh] px-3">
      <table className="table rounded-3xl">
        <thead
          className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
          style={{ borderRadius: "11px" }}
        >
          <tr className="rounded-3xl">
            <th className="text-center">Date</th>
            <th className="text-center">Name</th>
            <th className="text-center">Id</th>
            <th className="text-center">Branch</th>
            <th className="text-center">Phone</th>
            <th className="text-center">Email</th>
            <th className="text-center">FPSF</th>
            <th className="text-center">Latest Fee</th>
            <th className="text-center">Dist. Coupons</th>
            <th className="text-center">Avail. Coupons</th>
          </tr>
        </thead>
        <tbody className="my-10">
          {data.map((i, index) => {
            return (
              <tr
                key={index}
                className="font-semibold text-[0.8rem] text-black my-10"
              >
                <td className="text-center">{i.joinDate}</td>
                <td className="text-center text-indigo-600">{i.name} </td>
                <td className="text-center">{i.id} </td>
                <td className="text-center flex justify-evenly">
                  <div className="bg-[#d9d9d9] w-10 h-7 p-1 me-1 rounded">{i.branch.level}</div>      
                  <div className="bg-[#d9d9d9] w-10 h-7 p-1 rounded">{i.branch.node}</div> 
                </td>     
                <td className="text-center">{i.phone} </td>
                <td className="text-center">{i.email}</td>
                <td className="text-center">{i.FPSF}</td>
                <td className="text-center">{i.latestFee} </td>
                <td className="text-center">{i.distCoupons} </td>
                <td className="text-center">{i.availCoupons} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FeesTable;
