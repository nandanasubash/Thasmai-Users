"use client"


import React, { useEffect, useRef } from "react";
import { useOperationsFilterStore } from './filterState'
import { useStore } from "../../state/navbar-state";
import NavLink from '../navlink/navlink';
import FilterChip from "./filterChips";
import Image from "next/image";
import OperationsTable from "@/app/components/datatable/operationsTable";
import data from './data.json'

function Operations() {

  const fieldRef = useRef()
  const operatorRef = useRef()
  const dataRef = useRef()

  const filterState =  useOperationsFilterStore((state) => {
    return state;
  });
  

  useEffect(()=>{console.log('hi',filterState.fieldValue);filterState.setFieldText(filterState.fieldValue)},[])
  useEffect(()=>{filterState.setFieldText(filterState.fieldValue)},[filterState.fieldValue])  

  const setNavbarText = useStore((state) => state.setNavbarText);
  setNavbarText("Financial");

  function handleFieldChange(e) {
    const value = e.target.value;
    // console.log(value, filterState);
    filterState.setFieldText(value);
  }


  return (
    <div className="px-7">
      <div className="flex items-center justify-start ">
        <NavLink />
        {/* <CouponLabel /> */}
      </div>

      <div className="mt-5 w-full flex justify-between bg-slate-100">
        
      <select 
          className="px-5 h-10 focus:outline-none  rounded-xl shadow-lg bg-white text-black"
          ref={fieldRef}
          onChange={(e) => {
            handleFieldChange(e);
          }}
          onLoad={(e) => {
            // handleFieldChange(e);
            console.log(filterState.fieldValues[0]);
            filterState.setFieldText(filterState.fieldValues[0])
          }}
          defaultValue={filterState.fieldValue}
        >
            <option disabled selected>
              Choose field
            </option>
            { filterState.fieldValues.map((i,index)=>{
              return (
                <option key = {index} value = {i}>{i}</option>
              )
            })}
        </select>


        <select 
          className=" px-5 h-10 focus:outline-none  rounded-xl shadow-lg bg-white  text-black "
          ref = {operatorRef}
        >
            <option disabled selected>
              Choose operator
            </option>

            { filterState.fieldValue === "DOJ" &&
              filterState.dojOperator.map((i, index) => {
                return (
                  <option key={index} value={i} >
                    {i}
                  </option>
              );
            })}

            { filterState.fieldValue === "Name" &&
              filterState.stringOperator.map((i, index) => {
                return (
                  <option key={index} value={i}>
                    {i}
                  </option>
                );
            })}

            { filterState.fieldValue === "Id" && (
              <option value="equalto">Equal to</option>
            )}

            { filterState.fieldValue === "Coupon" &&
              filterState.integerOperator.map((i, index) => {
                return (
                  <option key={index} value={i}>
                    {i}
                  </option>
                );
            })}

            { filterState.fieldValue === "Phone" && (
              <option value="equalto">Equal to</option>
            )}

            { filterState.fieldValue === "Email" &&
              filterState.stringOperator.map((i, index) => {
                return (
                  <option key={index} value={i}>
                    {i}
                  </option>
                );
            })}

            {filterState.fieldValue === "Status" &&
              filterState.statusOperator.map((i, index) => {
                return (
                  <option key={index} value={i}>
                    {i}
                  </option>
                );
            })}

        </select>

        <input
          type="text"
          placeholder="Value" 
          ref = {dataRef}
          className={ `${filterState.fieldValue === "DOJ" ||
            filterState.fieldValue === "Status" ? "placeholder:text-slate-400 h-10 text-center px-4  focus:outline-none  rounded-xl bg-[#EEEAEA] border-none text-slate-100" 
            : "placeholder:text-black h-10 text-center px-4  focus:outline-none  rounded-xl shadow-lg"}`}
          disabled={
            filterState.fieldValue === "DOJ" ||
            filterState.fieldValue === "Status"
          }
        />

        
        {/* <DatePicker/> */} 
        <button 
          className="px-4 h-10 bg-white text-black rounded-xl shadow-lg" 
          onClick={(e)=>{
            filterState.setFilter({field : fieldRef.current.value, operator : operatorRef.current.value, value : dataRef.current.value}) 
          }}
        >
          AND
        </button>
      
        <button className="px-4 h-10 bg-white text-black rounded-xl shadow-lg">
          OR
        </button>
        <button className="px-6 h-10 bg-[#5799FD] rounded-xl text-white font-semibold shadow-lg">
          Find
        </button>
        
      </div>

      <div className="w-full h-[10vh] max-h-48 bg-[#5799FD] rounded-xl overflow-y-auto shadow my-5 grid grid-cols-2 items-center snap-mandatory snap-y py-10">
      
        { filterState.filters.map((i,index) => {
            return (
              <FilterChip filter = {i} key = {index}/>
            )
          }) 
        }
        
      </div>
          
      {/*------------------- Table Container -------------------------*/}
      <div className="w-full h-[55vh] bg-white shadow-2xl rounded-xl">

        <div className="w-full flex rounded-xl">
          <div className="w-[70%] flex justify-between px-3 py-5 bg-white text-black rounded-xl">
            <select className="w-48 h-10 px-2  focus:outline-none border-none bg-[#EEEAEA] text-[#585858] rounded-xl">
              <option disabled>Choose operator</option>
              <option selected>Name</option>
              <option>Vue</option>
              <option>React</option>
            </select>
            <div>
              <input
                type="text"
                placeholder="Value"
                className=" w-48 h-10   placeholder:text-black text-center outline-none   focus:outline-none  rounded-xl border-none bg-[#EEEAEA] text-[#585858]"
              />
            </div>

            <img src="/search.png" className="h-[2.5rem]" alt="search icon" />

            <select className=" px-3 w-48 h-10 focus:bg-white focus:outline-none border-none bg-[#EEEAEA] text-[#585858] rounded-xl ">
              <option disabled selected>
                Select Rows
              </option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>

          </div>

          <div className="w-[30%] h-full px-3 flex justify-center items-center">
            <div className="w-[30%] h-full pt-4 text-sm flex justify-center items-center ">Sum Total</div>
            <div className="w-[35%] h-full flex flex-col text-center">
              <p className="text-xs mb-1">D.Coupons</p>
              <div className="bg-[#5799FD] w-full h-10 rounded-l-xl font-bold text-white flex justify-center items-center border-r-4">40
                <Image src = '/cedis.png' className="" width = "20" height = "20"/>
              </div>
            </div>
            <div className="w-[35%] h-full flex flex-col text-center">
              <p className="text-xs mb-1">Available Coupons</p>
              <div className="bg-[#5799FD] w-full h-10 rounded-r-xl font-bold text-white flex justify-center items-center">10000
                <Image src = '/cedis.png' className="" width = "20" height = "20"/>
              </div>
            </div>
          </div>

        </div>


        <OperationsTable data={data}/>

      </div> {/* ----close table container----*/}



      
    </div>
  )
}

export default Operations
