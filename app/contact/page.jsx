'use client'
import { MailIcon, HomeIcon } from "lucide-react"
import Lottie from 'lottie-react'
import Robot from '@/public/hero/Robot.json';
import Form from "@/components/Form";


const Contacts = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              <div>Say Hello😊 </div>
            </div>
            <h1 className="h1 max-w-md mb-8">Ready to collaborate on your next big project?</h1>
            <p className="subtitle max-w-[400px]">Let's build something extraordinary together—tailored to your vision and goals.</p>
          </div>
            <div className="hidden xl:flex w-full"> 
              <Lottie 
                animationData={Robot}
                className='relative right-[3rem] '
                />
            </div>
        </div>
        <div className="grid xl:grid-cols-2 mb-[182px] xl:mb-[180px]">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon 
                size={18} className="text-primary"/>
                <div>akrongsylvester@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon 
                size={18} className="text-primary"/>
                <div>Accra-Ghana</div>
            </div>
          </div>
            <Form/>
        </div>
      </div>
    </section>
  )
}

export default Contacts