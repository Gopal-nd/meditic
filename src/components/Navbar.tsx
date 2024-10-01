import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/button";
import { getAuthSession } from "@/lib/auth";
import UserAccounNav from "./UserAccounNav";
import { ModeToggle } from "./ModeToggle";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed top-0 inset-x-0 h-fit  border-b border-zinc-300 z-[10] p-2">
      <div className="container flex max-w-7xl h-full mx-auto items-center justify-between gap-2">
        {/* <Logo /> */}
        <Link href={"/"} className="flex gap-2 items-center">
          <Icons.logo className="w-10 h-10 sm:h-6 sm:w-6 dark:text-white bg-white" />
          <p className="hidden text-zinx-700 text-lg font-medium md:flex">
            Meditic
          </p>
        </Link>
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
      </div>
    </div>
  );
};

export default Navbar;
