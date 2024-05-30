import React from "react";

function OperationsTable({ data }) {
  return (
    <div className="overflow-scroll max-h-[32vh] px-3">
      <table className="table rounded-3xl">
        <thead
          className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
          style={{ borderRadius: "11px" }}
        >
          <tr className="rounded-3xl">
            <th className="text-center">Date</th>
            <th className="text-center">Emp. Name</th>
            <th className="text-center">Expense Type</th>
            <th className="text-center">Amount</th>
            <th className="text-center">Bills</th>
            <th className="text-center">Remarks</th>
            <th className="text-center">Total Expense</th>
            <th className="text-center">Saturation Limit</th>
            <th className="text-center">Status</th>
          </tr>
        </thead>
        <tbody className="my-10">
          {data.map((i, index) => {
            return (
              <tr
                key={index}
                className="font-semibold text-[0.8rem] text-black my-10 "
              >
                <td className="text-center">{i.joinDate}</td>
                <td className="text-center text-indigo-600">{i.employeeName} </td>
                <td className="text-center">{i.expenseType} </td>
                <td className="text-center">{i.amount} </td>
                <td className="text-center">{i.bills} </td>
                <td className="text-center">{i.remarks}</td>
                <td className="text-center">{i.totalExpense}</td>
                <td className="text-center">{i.saturationLimit} </td>
                <td className="text-center">
                  <div className="bg-[#55ee9b] w-full h-7 p-1 text-white rounded">{i.status}</div>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OperationsTable;
