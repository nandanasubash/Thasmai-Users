import React, { useEffect, useState } from "react";
import DataTable from "@/app/components/datatable/mahadhanamtable";

import { useFilterStore } from "./filterstate";








import axios from "axios";
const RefPop = ({ refUserId }) => {
  const[refdetails,setRefDetails] = useState([])

  




  const filterState = useFilterStore((state) => {
    return state;
  });



  useEffect(()=>{
   (async function(){
    

  




  const response= await axios.post(`${process.env.NEXT_PUBLIC_ADMIN}findrefs`,{
    id:refUserId

  })
  console.log(response.data.refs);
  setRefDetails([...response.data.refs])

   })()
  },[])
  return (

       
            
          
              
                
                 
              <DataTable data={refdetails} filterState={filterState}/>

                
              
           
         
      
   
  );
};

export default RefPop;
