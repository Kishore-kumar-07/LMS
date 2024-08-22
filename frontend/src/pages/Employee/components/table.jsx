import React from 'react'

function table() {
  const tableHead = ["Leave Type","Op Balance", "Eligibility", "Total Eligibility", "Availed", "LOP", "Leave Lapsed","Leave Encashed","closing Balance","Max Leave Carry Forward","Availed(Including future month leave availed)","Closing Balance(Including fututre month leave availed)"];

  const currentData = ["Paternity Leave","Paternity Leave","Paternity Leave"]
  const value = [[1,2,3,4,5,6,7,8,9,10,11],[1,2,3,4,5,6,7,8,9,10,11],[1,2,3,4,5,6,7,8,9,10,11]];
  return (
    <>
    <div className='w-[100%] my-3 p-5 bg-slate-100 rounded-lg'>
        <div className='flex flex-wrap flex-col w-[100%]'>
          <table className='table-fixed w-[100%] border-collapse border border-gray-400'>
          <thead className='bg-blue-600'>
              <tr>
                <th colSpan={tableHead.length} className="px-5 py-2 text-left text-xs text-white uppercase">
                  Leave Balance Management
                </th>
              </tr>
            </thead>
            <thead className="divide-y divide-gray-200 bg-white">
              <tr className="bg-gray-50">
                {tableHead.map((val, index) => (
                  <th key={index} className="px-5 py-2 bg-black text-left text-xs text-gray-500 uppercase  text-balance break-words">
                    {val}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.map((val,index)=>  <tr key={index} className="border border-gray-400">
                  <td className='p-3 border border-gray-400 '><div className='flex justify-center items-center uppercase'>{val}</div></td>
                  {value[index].map((val, i) => (
                    <td key={i} className='border border-gray-400'><div className='flex justify-center items-center'>{val}</div></td>
                  ))}
                </tr>)}
            </tbody>
          
          </table>
        </div>
      </div>
    </>
  )
}

export default table
