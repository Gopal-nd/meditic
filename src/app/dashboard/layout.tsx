'use client'

import { Icons } from '@/components/Icons'
import NavbarProfile from '@/components/NavbarProfile'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React,{ useState } from 'react'

export default function Component({children}:{children:React.ReactNode}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()
  const user = useSession()
  if(!user) return router.push('/sign-in')
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/health-form', label: 'Health Information' },
    { href: '/appointment', label: 'Appointment Booking' },
    { href: '/doctor-review', label: 'Doctor Review' },
    { href: '/prescriptions', label: 'Digital Prescriptions' },
    { href: '/reminders', label: 'Medication Reminders' },
  ]



  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64  border-r transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b   ">
        <Link href={"/"} className="flex gap-2 items-center">
          <Icons.logo className="w-10 h-10 sm:h-6 sm:w-6 " />
          <p className="hidden text-zinx-700 text-lg font-medium md:flex">
            Meditic
          </p>
        </Link>
          <button onClick={toggleSidebar} className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center px-6 py-3 "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        {/* Top bar for mobile */}
        <header className="flex items-center justify-between h-16 px-6 border-b lg:hidden">
        <Link href={"/dashboard"} className="flex gap-2 items-center">
          <Icons.logo className="w-10 h-10 sm:h-6 sm:w-6 " />
          <p className="hidden text-zinx-700 text-lg font-medium md:flex">
            Meditic
          </p>
        </Link>
        <div className='flex justify-end gap-4'>

          <button onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <NavbarProfile />
        </div>
        </header>

        

        {/* // main content  */}
        <div className='hidden lg:block border-b min-h-16 p-2 items-center'>
        <NavbarProfile />
        </div>
        <div className='p-2'>
        {children}
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  )
}