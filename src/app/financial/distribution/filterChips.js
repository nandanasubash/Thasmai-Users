import React from 'react'
import { useDistributionFilterStore } from "./filterState";


function FilterChip({ filter, key }) {
  
    const filterState = useDistributionFilterStore((state) => {
        return state;
    });
    
  return (
    <div className='h-full  flex justify-evenly items-center my-2 snap-center shrink-0' key = {key}>
        <div className='bg-white max-w-48  text-black font-semibold rounded-xl flex items-center justify-center px-7 py-3 '>{filter.field}</div>
        <div className='bg-white max-w-48  text-black font-semibold rounded-xl flex items-center justify-center px-7 py-3 '>{filter.operator}</div>
        <div className='bg-white max-w-48  text-black font-semibold rounded-xl flex items-center justify-center px-7 py-3 '>{filter.value.length > 6 ? filter.value.slice(0,6):filter.value}</div>

        <div className='bg-white w-11 h-11  rounded-full flex justify-center items-center text-black font-semibold cursor-pointer' onClick={()=>filterState.deleteFilter(key)}>X</div>
    </div>
  )
}

export default FilterChip