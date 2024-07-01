"use client"
import Link from 'next/link';
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname()
    return (
        <>
            {(pathname === "/" || pathname === "/about-us") &&
                <nav className='w-full flex justify-center items-center h-20'>
                    <div className='max-w-[1500px] w-full flex justify-between items-center px-8'>
                        <div>
                            logo
                        </div>
                        <div className='flex gap-6 font1'>
                            <Link className={`text-lg md:text-xl lg:text-2xl hover-underline-animation  ${pathname === '/' ? 'active' : ''}`} href={"/"}>Home</Link>
                            <Link className={`text-lg md:text-xl lg:text-2xl hover-underline-animation  ${pathname === '/about-us' ? 'active' : ''}`} href={"/about-us"}>AboutUs</Link>
                        </div>

                    </div>
                </nav>}

        </>

    )
}

export default Navbar