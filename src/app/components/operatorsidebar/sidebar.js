"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'

function SideBar() {
  const pathname = usePathname()
  

  return (
    <div>
      <div className="bg-white h-screen flex flex-col items-center py-8 ">
        <div className="logo px-5">
          {/* <Image src = '/../../../public/logo.jpeg' className='w-48 h-10'/> */}
          <img src="/logo.png" className="h-16" />
        </div>
        <div className="navitems w-full">
          <ul className="sidebar">
            
           
            
           
           
            <Link href="/operator">
              <li className={`${pathname.startsWith('/operator') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Operator Management</li>
            </Link>
            <Link href="/feedback">
              <li className={`${pathname.startsWith('/feedback') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Feedback Views</li>
            </Link>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
