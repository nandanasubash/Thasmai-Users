"use client"
import { useEffect } from 'react'
import {useStore} from '../state/navbar-state'
import data from "./data.json"
import DataTable from '../components/datatable/datatable'
// import SortableTable from '../users/meditatorlist/table/page'


export default function Analytics(){
  console.log(data)
        const setNavbarText  = useStore(state => state.setNavbarText)
        setNavbarText("Analytics")
  
     return (



    <div className='flex h-screen justify-center items-center'>
      {/* <InputSwitch checked={rowClick} onChange={(e) => setRowClick(e.value)} />

      <DataTable value={products} selectionMode={rowClick ? null : 'checkbox'} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
          <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
      </DataTable> */}




<DataTable data = {data} />

      </div>
    )
}