import { FC } from 'react'
import { ModeToggle } from './ModeToggle'
import { getAuthSession } from '@/lib/auth'
import UserAccounNav from './UserAccounNav'
import { Link } from 'lucide-react'
import { buttonVariants } from './ui/button'
import { useSession } from 'next-auth/react'

interface NavbarProfileProps {
  
}

const NavbarProfile: FC<NavbarProfileProps> = ({}) => {
    const {data:session} = useSession()
    
  return (
    <>
    <div className="flex justify-end items-center gap-2 md:gap-4">
          <ModeToggle />

          {/* SearchBar  */}
          {session ? (
            <UserAccounNav user={session.user} />
          ) : (
            <>
              <Link href={"/sign-in"} className={buttonVariants()}>
                Sign In
              </Link>
            </>
          )}
        </div>
    </>
  )
}

export default NavbarProfile