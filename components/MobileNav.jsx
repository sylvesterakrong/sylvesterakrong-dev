import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

import { AlignJustify } from "lucide-react"
import Nav from "./Nav"
import Socials from "./Socials"
import Robot from '@/public/hero/Robot.json';
import Lottie from 'lottie-react'

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <AlignJustify className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent>
                <div className="flex flex-col items-center justify-between h-full00000000000000 py-8">
                    <div className="flex flex-col items-center gap-y-32">
                        <Nav 
                        containerStyles='flex flex-col items-center gap-y-6'
                        linkStyles='text-2xl'
                        />
                        
                        <Lottie 
                        animationData={Robot}
                        className='relative right-[3rem] '
                        />
                    </div>
                    <Socials 
                        containerStyles='flex gap-x-4 '
                        iconsStyles='text-2xl'
                        />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav