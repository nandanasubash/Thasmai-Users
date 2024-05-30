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
            <Link href="/overview" >
              <li className={`${pathname.startsWith('/overview') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Overview</li>
            </Link>
            <Link href="/users">
              <li className={`${pathname.startsWith('/users') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5  hover:bg-[#dbeafe]'}`}>Users</li>
            </Link>
            <Link href="/financial/distribution">
              <li className={`${pathname.startsWith('/financial') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Financial</li>
            </Link>
            <Link href="/analytics">
              <li className={`${pathname.startsWith('/analytics') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Analytics / Insights</li>
            </Link>
            <Link href="/configuration">
              <li className={`${pathname.startsWith('/configuration') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Configuration Parameters</li>
            </Link>
            <Link href="/notifications">
              <li className={`${pathname.startsWith('/notifications') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Notifications / Broadcast</li>
            </Link>
            <Link href="/operator">
              <li className={`${pathname.startsWith('/operator') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Operator Management</li>
            </Link>
            <Link href="/feedback">
              <li className={`${pathname.startsWith('/feedback') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Feedback Views</li>
            </Link>
            <Link href="/logging">
              <li className={`${pathname.startsWith('/logging') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Logging / Error Handling</li>
            </Link>
            <Link href="/support">
              <li className={`${pathname.startsWith('/support') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Support & Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
