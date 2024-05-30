import React from 'react'
import NavLink from '../navlink/navlink'
// import FinancialConfigTable from '../../components/configTable/configFinancialTable'
import ConfigurationTable from '../../components/configTable/configurationTable'
import dummyData from './dummy.json'

function Financial() {
  
  return (
    <div className="px-7 h-full">
      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-full h-[60%] mt-10 p-3 pt-5 bg-white rounded-[8px] shadow drop-shadow-md'>
          {/* <FinancialConfigTable /> */}
          <ConfigurationTable  dummyData={dummyData}/>
          <div className='w-full pe-10 flex justify-end'>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded me-3'>Back</button>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded'>Next</button>
          </div>
      </div>
    </div>
  )
}

export default Financial