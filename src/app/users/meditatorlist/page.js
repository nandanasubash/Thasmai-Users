"use client";
import { useStore } from "../../state/navbar-state";
import { useFilterStore } from "./filterstate";
import NavLink from "../navlink/navlink";
import CouponLabel from "@/app/components/couponlabel/couponLabel";
import DataTable from "@/app/components/datatable/datatable";
import { useState } from "react";
import data from "./data.json";
import { useEffect, useRef } from "react";
import DatePicker from "./datepicker";
import FilterChip from "./filterchips";
import axios from "axios";
import Image from "next/image";

import Cart from "../cart";

import download from "js-file-download";

function MeditatorList() {
  const fieldRef = useRef();
  const operatorRef = useRef();
  const dataRef = useRef();

  const searchRef = useRef();
  const textRef = useRef();

  const distributeRef = useRef();

  const limitref = useRef(0);


  const [filterToggle, setFilterToggle] = useState(false);

  const [cartToggle, setCartToggle] = useState(false); //for popup -when cart button clicked

  const [errorToggle, setErrorToggle] = useState({ message: "", err: false }); //copoun validation

  




  
  
  const [pagenumber,setPagenumber] = useState(0)







  const filterState = useFilterStore((state) => {
    return state;
  });

  const [fetchToggle, setFetchToggle] = useState(false);

  async function fetchData() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE}list-meditators`
      );

      // console.log(response)
      filterState.setAppointmentData([...response.data.users]);

  filterState.setCouponCount(response.data.totalCoupons,response.data.totalDistributedCoupons)

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [filterToggle, fetchToggle]);

  async function handleSearch() {
    try {
      console.log(searchRef.current.value);
      console.log(textRef.current.value);

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE}searchfield?field=${searchRef.current.value}&value=${textRef.current.value}`
      );
      console.log(response,"serach");
      filterState.setAppointmentData([...response.data.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function handleDistribute() {
    try {
    if(filterState.distributedList.size > 0 &&  distributeRef.current.value.length > 0 ){

      const couponCount = parseInt(distributeRef.current.value);
      const uidArray = filterState.appointmentData.map((item) => item.UId);
      console.log("uidArray", uidArray);
      if (couponCount % filterState.distributedList.size === 0) {
        const dl = [];
        filterState.distributedList.forEach((i) => {
          dl.push(i);
        });
        console.log(dl);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE}coupon-systemDistribute`,
          {
            totalCoupons: couponCount,
            distributedIds: dl,
          }
        );
        console.log(response.data, "fbnujk");
        filterState.setToastData(true, response.data.message);
        setFetchToggle(!fetchToggle);

        setTimeout(() => {
          filterState.setToastData(false);
        }, 5000);
      }
    }
    else{
      console.log(filterState.distributedList,distributeRef.current.value,"apple")
      if(filterState.distributedList.size === 0 ){
        filterState.SetValidToastData(true,"Select atleast one user")
        setTimeout(()=>{
          filterState.SetValidToastData(false)
        },5000)
      }
    
    
      else if( distributeRef.current.value.length === 0 ){
        filterState.SetValidToastData(true,"Coupon is empty")
        setTimeout(()=>{
          filterState.SetValidToastData(false)
        },5000)
      }
    
    }
   }
    catch (error) {
      console.error("Error distributing coupons:", error);
    }
  }

  //handleRedeem

  async function handleRedeem() {
    try {
      const couponCount = parseInt(distributeRef.current.value);
      const uidArray = filterState.appointmentData.map((item) => item.UId);
      console.log("uidArray", uidArray);

      const dl = [];

      filterState.distributedList.forEach((i) => {
        dl.push(i);
      });
      console.log(dl);
      localStorage.setItem("redeem", JSON.stringify(dl));
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE}redeem`,
        {
          coupons: couponCount,
          UIds: dl,
        }
      );
      console.log(response.data, "fbnujk");
      filterState.setToastData(true, response.data.message);

      setFetchToggle(!fetchToggle);

      setTimeout(() => {
        filterState.setToastData(false);
      }, 5000);
    } catch (error) {
      console.error("Error distributing coupons:", error);
    }
  }

  async function handleLimit(event){
    

     console.log(event.target.value,"value of e");

      (async function (){
       const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE}list-meditators?page=${pagenumber ? pagenumber: undefined}&limit=${Number(event.target.value)}`)
       console.log(response.data,"limit");
      })()
 
  }

  async function handleExport() {
    try {
      const couponCount = parseInt(distributeRef.current.value);
      const redeemedList = localStorage.getItem("redeem");

      let template = "";

      for (let i = 0; i < JSON.parse(redeemedList).length; i++) {
        template += `UIds[]=${JSON.parse(redeemedList)[i]}`;
      }

      console.log(template);

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE}download?${template}`,
        {
          responseType: "blob", // Set the response type to blob
        }
      );

      console.log(response.data, "fbnujk");

      // Create a Blob from the response data
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create a link element and click it to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "export.xlsx");
      document.body.appendChild(link);
      link.click();

      // Clean up resources
      link.remove();
      window.URL.revokeObjectURL(url);

      filterState.setToastData(true, response.data.message);

      setTimeout(() => {
        filterState.setToastData(false);
      }, 5000);
    } catch (error) {
      console.error("Error distributing coupons:", error);
    }
  }

  //handleExport

  // async function handleExport() {
  //   try {
  //     const couponCount = parseInt(distributeRef.current.value);

  //   const redeemedList = localStorage.getItem("redeem");

  // let template = ``

  //   for(let i = 0; i < JSON.parse(redeemedList).length; i++){
  //   template += `UIds[]=${JSON.parse(redeemedList)[i]}`
  //   }
  //   console.log(template);

  //     const response = await axios.get(`clashttp://192.168.1.78:5000sName/api/v1/superadmin/download?${template}`, {

  //       UIds: redeemedList
  //    });
  //     console.log(response.data ,"fbnujk")
  //     download(response.data,"export.xlsx")
  //     filterState.setToastData(true,response.data.message);

  //     setTimeout(()=>{
  //       filterState.setToastData(false)
  //     },5000)

  //   } catch (error) {
  //     console.error('Error distributing coupons:', error);
  //   }
  // }

  //handleAdd
  async function handleAdd() {
    try {
    if(filterState.distributedList.size > 0 &&  distributeRef.current.value.length > 0 ){

      const couponCount = distributeRef.current.value;
      const uidArray = filterState.appointmentData.map((item) => item.UId);
      console.log("uidArray", uidArray, couponCount);

      const dl = [];

      filterState.distributedList.forEach((i) => {
        dl.push(i);
      });
      console.log("qwerty", dl);
      localStorage.setItem("redeem", JSON.stringify(dl));

      const cart_data = JSON.parse(localStorage.getItem(`meditator_cart`));
      if (cart_data) {
        console.log(cart_data, "cart data");
        const addcart = new Set([...cart_data, ...dl]);
        const finaldl = [];
        for (const i of addcart) {
          finaldl.push(i);
        }
        localStorage.setItem("meditator_cart", JSON.stringify(finaldl));
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE}coupons-cart`,
          {
            couponsToDistribute: couponCount,
            UIds: dl,
          }
        );
        console.log(response.data, "fbnujk");
        filterState.setToastData(true, response.data.message);
      } else {
        localStorage.setItem("meditator_cart", JSON.stringify(dl));
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE}coupons-cart`,
          {
            couponsToDistribute: couponCount,
            UIds: dl,
          }
        );
        console.log(response.data, "fbnujk");
        filterState.setToastData(true, response.data.message);
      }
      setTimeout(() => {
        filterState.setToastData(false);
      }, 5000);

      setFetchToggle(!fetchToggle);
    }



    else{
      console.log(filterState.distributedList,distributeRef.current.value,"apple")
      if(filterState.distributedList.size === 0 ){
        filterState.SetValidToastData(true,"Select atleast one user")
        setTimeout(()=>{
          filterState.SetValidToastData(false)
        },5000)
      }
    
  
      else if( distributeRef.current.value.length === 0 ){
        filterState.SetValidToastData(true,"Coupon is empty")
        setTimeout(()=>{
          filterState.SetValidToastData(false)
        },5000)
      }
  
    }
   }


   
   catch (error) {
      console.error("Error distributing coupons:", error);
    }
  }

  async function handleClick() {
    try {
      const config = {
        "starts with": "like",
        equalto: "=",
        "greater than": ">",
        "less than": "<",
        "not equalto": "<>",
      };
      console.log(config["starts with"]);

      const filteredData = filterState.filters.map((i, ind) => {
        const field = i.field;
        const operator = i.operator.toLowerCase();
        const value =
          i.field.toLowerCase() === "firstname" ? `${i.value}%` : i.value;
        console.log(field, value, operator);

        return {
          field: field,
          operator: config[`${operator}`],
          value: value,
          logicaloperator: i.logicaloperator,
        };
      });
      filteredData[filteredData.length - 1].logicaloperator = "null";
      console.log(filteredData);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE}execute-query`,
        {
          queryConditions: filteredData,
          page: 1,
          pageSize: 10,
        }
      );
      //undo
      console.log(response, "sdfghnbg");
      filterState.setAppointmentData([...response.data.results]);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }

  useEffect(() => {
    console.log("hi", filterState.FieldValue);
    filterState.setFieldText(filterState.FieldValue);
  }, []);
  useEffect(() => {
    filterState.setFieldText(filterState.FieldValue);
  }, [filterState.FieldValue]);

  const setNavbarText = useStore((state) => state.setNavbarText);

  setNavbarText("Users");

  function handleFieldChange(e) {
    const value = e.target.value;
    console.log(value, filterState);
    filterState.setFieldText(value);
  }

  return (
    <div className="px-7">
      <div className="flex items-center justify-between ">
        <NavLink />
        <div className="flex items-center justify-between">
          <CouponLabel coupons={filterState.couponCount} />

          <div
            className="w-28 px-3 py-3 border-2 border-emerald-500 rounded-full text-black font-semibold flex justify-between items-center mx-5"
            onClick={handleExport}
          >
            <span>export</span>
            <Image src="/backward.png" width={10} height={10} />
          </div>
          <Image
            src="/shopping-cart.png"
            width={20}
            height={20}
            onClick={() => filterState.setCartToggle((prevState) => !prevState)}
          />
        </div>
      </div>

      <div className="mt-5 w-full flex justify-between bg-slate-100">
        <select
          ref={fieldRef}
          className="px-5 h-10 focus:outline-none  rounded-xl shadow-lg bg-white text-black"
          onChange={(e) => {
            handleFieldChange(e);
          }}
          onLoad={(e) => {
            // handleFieldChange(e);

            console.log(filterState.FieldValues[0]);
            filterState.setFieldText(filterState.FieldValues[0]);
          }}
          defaultValue={filterState.FieldValue}
        >
          <option disabled selected>
            Choose field
          </option>
          {filterState.FieldValues.map((i, index) => {
            return (
              <option key={index} value={i}>
                {i}
              </option>
            );
          })}
        </select>

        <select
          className=" px-5 h-10 focus:outline-none  rounded-xl shadow-lg bg-white  text-black "
          ref={operatorRef}
        >
          <option disabled selected>
            Choose operator
          </option>
          {filterState.FieldValue === "DOJ" &&
            filterState.dojOperator.map((i, index) => {
              return (
                <option key={index} value={i}>
                  {i}
                </option>
              );
            })}

          {filterState.FieldValue === "firstName" &&
            filterState.stringOperator.map((i, index) => {
              return (
                <option key={index} value={i}>
                  {i}
                </option>
              );
            })}

          {filterState.FieldValue === "UId" && (
            <option value="equalto">Equal to</option>
          )}
          {filterState.FieldValue === "coupons" &&
            filterState.integerOperator.map((i, index) => {
              return (
                <option key={index} value={i}>
                  {i}
                </option>
              );
            })}
          {filterState.FieldValue === "Phone" && (
            <option value="equalto">Equal to</option>
          )}
          {filterState.FieldValue === "Email" &&
            filterState.stringOperator.map((i, index) => {
              return (
                <option key={index} value={i}>
                  {i}
                </option>
              );
            })}

          {filterState.FieldValue === "Status" &&
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
          ref={dataRef}
          className={`${
            filterState.FieldValue === "DOJ" ||
            filterState.FieldValue === "Status"
              ? "placeholder:text-slate-400 h-10 text-center px-4  focus:outline-none  rounded-xl bg-[#EEEAEA] border-none text-slate-100"
              : "placeholder:text-black h-10 text-center px-4  focus:outline-none  rounded-xl shadow-lg"
          }`}
          disabled={
            filterState.FieldValue === "DOJ" ||
            filterState.FieldValue === "Status"
          }
        />

        {/* <DatePicker/> */}
        <button
          className="px-4 h-10 bg-white text-black rounded-xl shadow-lg"
          onClick={(e) => {
            filterState.setFilter({
              field: fieldRef.current.value,
              operator: operatorRef.current.value,
              value: dataRef.current.value,
              logicaloperator: "and",
            });
            dataRef.current.value = "";
          }}
        >
          AND
        </button>
        <button
          className="px-4 h-10 bg-white text-black rounded-xl shadow-lg"
          onClick={(e) => {
            filterState.setFilter({
              field: fieldRef.current.value,
              operator: operatorRef.current.value,
              value: dataRef.current.value,
              logicaloperator: "or",
            });
            dataRef.current.value = "";
          }}
        >
          OR
        </button>
        {/* <button className="px-6 h-10 bg-[#5799FD] rounded-xl text-white font-semibold shadow-lg" onClick={()=>{console.log('clicked');handleClick()}}>
          null
        </button> */}
        <button
          className="px-6 h-10 bg-[#5799FD] rounded-xl text-white font-semibold shadow-lg"
          onClick={() => {
            console.log("clicked");
            handleClick();
          }}
        >
          Find
        </button>

        <button className="px-6 h-10  rounded-xl bg-green-400 text-white font-semibold shadow-lg">
          Save
        </button>
      </div>
      <div className="w-full h-[10vh] max-h-48 bg-[#5799FD] rounded-xl overflow-y-auto shadow my-5 grid grid-cols-2 items-center snap-mandatory snap-y py-10">
        {filterState.filters.map((i, index) => {
          return (
            <FilterChip
              filter={i}
              index={index}
              setFilterToggle={setFilterToggle}
              filterToggle={filterToggle}
            />
          );
        })}
      </div>

      <div className="w-full h-[55vh] bg-white shadow-2xl rounded-xl ">
        <div className="w-full flex justify-between px-3 py-5 bg-white text-black">
          <select
            className=" w-32 h-10 px-2  focus:outline-none border-none bg-[#EEEAEA] text-[#585858] rounded-xl"
            ref={searchRef}
          >

            <option disabled>Choose operator</option>
            {filterState.FieldValues.map((field) => (
              <option value={field}>{field} </option>
            ))}
          </select>
          <div>
            <input
              type="text"
              placeholder="Value"
              ref={textRef}
              className=" w-40 h-10   placeholder:text-black text-center outline-none   focus:outline-none  rounded-xl border-none bg-[#EEEAEA] text-[#585858]"
            />
          </div>
          <img
            src="/search.png"
            className="h-[2.5rem]"
            alt="search icon"
            onClick={handleSearch}
          />
          <select className=" px-3 h-10 focus:bg-white focus:outline-none border-none bg-[#EEEAEA] text-[#585858] rounded-xl "onChange={handleLimit}>
            <option disabled selected>
              Select Rows
            </option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>











          <div className="relative">
            <input
              type="text"
              placeholder="Coupons"
              ref={distributeRef}
              className="placeholder:text-[#585858] text-center w-28 h-10 focus:outline-none border-none bg-[#EEEAEA] rounded-xl text-[#585858]"
            />

            <img src="/cedis.png" className="absolute right-5 top-[0.5rem] " />
          </div>
          <button
            className="px-5 h-10 bg-[#676967] text-white font-semibold rounded-xl"
            onClick={handleRedeem}
          >
            Redeem
          </button>

          <button
            className="w-28 h-10 bg-[#676967] text-white font-semibold rounded-xl"
            onClick={handleAdd}
          >
            Add
          </button>

          <button
            className="px-5 h-10 bg-[#5799FD] text-white font-semibold rounded-xl"
            onClick={handleDistribute}
          >
            Distribute
          </button>
        </div>

        {/* <SortableTable/> */}
        <DataTable
          data={filterState.appointmentData}
          filterState={filterState}
          setFetchToggle ={setFetchToggle}
          fetchToggle = {fetchToggle}
        />
      </div>



    







    




    
      { 
        filterState.validToastData.validToastToggle && <div className="toast toast-center toast-middle">
    
    <div className="alert alert-success">
    <span>{filterState.validToastData.validToastText}</span>
    </div>
    </div>
      }

    
      {filterState.toastData.toggle && (
        <div className="toast toast-center toast-middle">
          <div className="alert alert-success">
            <span>{filterState.toastData.message}</span>
          </div>
        </div>
      )}

      
      <div className="absolute  z-50 top-64 right-96  flex  items-center">
        {filterState.cartToggle && (
          <Cart
            setCartToggle={filterState.setCartToggle}
            setFetchToggle={setFetchToggle}
            fetchToggle={fetchToggle}
            distributedList={filterState.distributedList}
          />
        )}
        {/* <div className="absolute z-50 top-64 right-96 flex items-center">
     {cartToggle && <Cart setCartToggle={setCartToggle} />}
       </div> */}
      </div>
    </div>
  );
}

export default MeditatorList;
