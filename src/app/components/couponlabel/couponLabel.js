import Image from "next/image";
import React from "react";


function CouponLabel({coupons}) {
  return (
    
  
    
    <div className="flex">
      <div class="bg-[#5799FD] w-20 h-10 rounded-l-xl flex justify-center items-center border-r-4">
        <Image src = '/cedis.png' className="" width = "20" height = "20"/>
      </div>
      <div class="bg-[#5799FD] w-28 h-10 rounded-r-xl font-bold text-white flex justify-center items-center ">
        {coupons.available_coupons} 
      </div>
    </div>
  );
}

export default CouponLabel;
