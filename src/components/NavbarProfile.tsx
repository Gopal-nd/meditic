import { FC } from 'react'
import { ModeToggle } from './ModeToggle'
import { getAuthSession } from '@/lib/auth'
import UserAccounNav from './UserAccounNav'

import { buttonVariants } from './ui/button'
import Link from 'next/link'
import { db } from '@/lib/db'
import { useSession } from 'next-auth/react'

interface NavbarProfileProps {
  
}

const NavbarProfile: FC<NavbarProfileProps> = async({}) => {
    const {data:session} = useSession()

  
    
  return (
    
    <div className="flex justify-end items-center gap-2 md:gap-4">
          <ModeToggle />

          {/* SearchBar  */}
          {session ? (
            <UserAccounNav user={session.user} />
          ) : (
            
              <Link href={"/sign-in"} className={buttonVariants()}>
                Sign In
              </Link>
            
          )}
        </div>
    
  )
}

export default NavbarProfile