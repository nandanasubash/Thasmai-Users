"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link"

function NavLink() {
    const pathname = usePathname()

  return (
    <nav className='w-full mt-5 flex justify-between'>

    <Link href = '/configuration/financial' className={`${pathname === '/configuration/financial' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Financial</Link>
    <Link href = '/configuration/applications/registration' className={`${pathname.startsWith('/configuration/applications') ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Applications</Link>
    <Link href = '/configuration/operations'className={`${pathname === '/configuration/operations' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Operations</Link>
    <Link href = '/configuration/support-contact'className={`${pathname === '/configuration/support-contact' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Support & Contact</Link>
    
    </nav>
  )
}

export default NavLink