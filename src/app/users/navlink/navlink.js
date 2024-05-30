"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link"

function NavLink() {
    const pathname = usePathname()

  return (
    <nav className='w-[30rem] mt-5 flex justify-around'>
    <Link href = '/users/meditatorlist' className={`${pathname === '/users/meditatorlist' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Meditator List</Link>
    <Link href = '/users/mahadhanam' className={`${pathname === '/users/mahadhanam' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Mahadhanam</Link>
    <Link href = '/users/eventdetails'className={`${pathname === '/users/eventdetails' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Event Details</Link>
    </nav>
  )
}

export default NavLink