'use client'
import React, {useState, useEffect} from "react"

// import { Logo } from "./Logo";
import ThemeToggler from "./ThemeToggler"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { usePathname } from "next/navigation"

export const Header = () => {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();
    console.log(pathname);

    useEffect(() => {
        const scrollYPos  = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        return () => window.removeEventListener('scroll', scrollYPos);
    });

    return (
        <header
        className={` ${
            header 
                ? `py-4 bg-accent shadow-lg dark:bg accent` 
                : `py-6    dark:bg-transparent` 
        } sticky top-0 z-30 transition-all ${pathname === `/` && `bg-[#fwf9f5]`}`}
        >
            <div className='container mx-auto'>
                <div className='flex justify-end items-center'>
                        {/* <Logo/> */}
                    <div className='flex items-center gap-x-6'>
                        {/*desktop nav */}
                        <Nav 
                        containerStyles='hidden xl:flex gap-x-9 items-center' 
                        linkStyles='relative hover:text-primary transition-all'
                        underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full '
                        />
                        <ThemeToggler/>
                        {/*mobile nav */}
                        <div className=' xl:hidden '>
                            <MobileNav/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
