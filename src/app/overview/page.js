"use client";

// import CarouselPlugin from "../components/carousal/carousal";
import ColumnChart from "../components/columnchart/columnchart";
import Piechart from "../components/piechart/pichart";

import { useStore } from "../state/navbar-state";

export default function Overview() {
  const setNavbarText = useStore((state) => state.setNavbarText);
  setNavbarText("Overview");

  return (
    <div>
      <div className="flex justify-around mb-4">
       
        <div className="w-[47%] h-[13rem]  rounded-md bg-white flex justify-center items-center shadow-lg">
          <ColumnChart />
        </div>
        <div className="w-[47%] h-[13rem]  rounded-md bg-white flex justify-center items-center shadow-lg">
          <Piechart />

          <div>
            <div className="color-span flex items-center">
              <div className="w-4  h-4 rounded-sm bg-[#26CC7C] mx-4"></div>
              <div>Distribution</div>
            </div>
            <div className="color-span flex items-center">
              <div className="w-4  h-4 rounded-sm bg-[#58C2D9] mx-4"></div>
              <div>Donation</div>
            </div>
            <div className="color-span flex items-center">
              <div className="w-4  h-4 rounded-sm bg-[#597EDD] mx-4"></div>
              <div>Fees</div>
            </div>
          </div>
        </div>
      </div>
      <div className="center flex justify-around mb-4">
        <div className="w-[22%] h-[8rem] bg-white rounded-md flex justify-center items-center shadow-lg">
          <div className="w-10 h-10 bg-[#A2BCFF] rounded-full mx-2"></div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-black">75</span>
            <span className="text-lg  text-black">New Joinees</span>
          </div>
        </div>
        <div className="w-[22%] h-[8rem] bg-white rounded-md flex justify-center items-center shadow-lg">
          <div className="w-10 h-10 bg-[#A2BCFF] rounded-full mx-2"></div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-black">500</span>
            <span className="text-lg  text-black">Morning Meditators</span>
          </div>
        </div>
        <div className="w-[22%] h-[8rem] bg-white rounded-md flex justify-center items-center shadow-lg">
          <div className="w-10 h-10 bg-[#A2BCFF] rounded-full mx-2"></div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-black">575</span>
            <span className="text-lg  text-black">Total Meditators</span>
          </div>
        </div>
        <div className="w-[22%] h-[8rem] bg-white rounded-md flex justify-center items-center shadow-lg">
          <div className="w-10 h-10 bg-[#A2BCFF] rounded-full mx-2"></div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-black">500</span>
            <span className="text-lg  text-black">Waiting List</span>
          </div>
        </div>
      </div>
      <div className="bottom flex justify-around ">
        <div className="w-[47%] h-56 bg-white rounded-md shadow-lg">
            <span className="text-black font-semibold">Recent Evenlist</span>

           {/* <CarouselPlugin /> */}
           

        </div>
        <div className="w-[47%] h-56 bg-white rounded-md shadow-lg  flex flex-col  px-7">
          <span className="my-3 font-semibold">Comments</span>
          


          <div className="overflow-y-scroll text-white ">
            <div className="w-full h-16 bg-[#FF7979] rounded-sm mb-3">
              
              <div className="flex px-5 items-center justify-center">
              <div className="w-7 h-7 bg-indigo-300 rounded-full"></div>

                <div className="flex flex-col w-full">
                  <div className="flex justify-between">
                <span>Jeffin</span>
                <span>18/01/2024</span>
                </div>
                
                <div>
                  Lorem ipsum dolor sit amet ipsum dolor sit amet 
                </div>
                </div>
              </div>
            </div>
            <div className="w-full h-16 bg-[#7DB1FF] rounded-sm mb-3">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
