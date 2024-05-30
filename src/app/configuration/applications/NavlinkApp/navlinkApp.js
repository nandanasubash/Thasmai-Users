"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link"

function NavLinkApp() {
    const pathname = usePathname()

  return (
    <nav className='w-full mt-5 flex justify-between'>
        <Link href = '/configuration/applications/registration' className={`${pathname === '/configuration/applications/registration' ? 'link px-5 py-1 bg-[#5799FD] text-white text-[14px] font-normal rounded-lg' : 'link rounded-md px-5 py-1 text-black text-[14px] font-normal'}`}>Registration</Link>
        <Link href = '/configuration/applications/reference' className={`${pathname === '/configuration/applications/reference' ? 'link px-5 py-1 bg-[#5799FD] text-white text-[14px] font-normal rounded-lg' : 'link rounded-md px-5 py-1 text-black text-[14px] font-normal'}`}>Reference</Link>
        <Link href = '/configuration/applications/meditationTime' className={`${pathname === '/configuration/applications/meditationTime' ? 'link px-5 py-1 bg-[#5799FD] text-white text-[14px] font-normal rounded-lg' : 'link rounded-md px-5 py-1 text-black text-[14px] font-normal'}`}>Meditation Time</Link>
        <Link href = '/configuration/applications/meditationVideo' className={`${pathname === '/configuration/applications/meditationVideo' ? 'link px-5 py-1 bg-[#5799FD] text-white text-[14px] font-normal rounded-lg' : 'link rounded-md px-5 py-1 text-black text-[14px] font-normal'}`}>Meditation Video</Link>
        
    </nav>
  )
}

export default NavLinkApp