'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"
import Robot from '@/public/hero/Robot.json';
import Lottie from 'lottie-react'
import {
    RiTodoFill,
    RiArrowDownSLine,
    RiBriefcase4Fill
 } from 'react-icons/ri'


import Badge from "./Badge"
import Socials from "./Socials"



const Hero = () => {
    return (
      <section className='py-12 xl:py-24 h-auto xl:pt-28 bg-yellow-100 bg-no-repeat bg-bottom bg-contain dark:bg-accent'>
          <div className='container mx-auto'>
              <div className='flex justify-between gap-x-8'>
                  {/*Text*/}
                  <div className='flex max-w-[400px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                      <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Software Engineer</div>
                      <h1 className='h1 mb-4'>Hello, my name is Sylvester Akrong</h1>
                      <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                          A brief description with insights into myself, my vocational journey and what I do professionally.
                      </p>
                      {/*Button*/}
                      <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href='/contact'>
                                <Button className='gap-x-2'>
                                    Contact me <Send size={18}/>
                                </Button>
                            </Link>
                            <a href="/Sylvester_Akrong_Resume.pdf" download>
                                <Button variant='secondary' className='gap-x-2'>
                                    Download CV 
                                    <Download size={18}/>
                                </Button>
                            </a>
                      </div>
                      {/*Socials*/}
                      <Socials 
                      containerStyles='flex gap-x-6 mx-auto xl:mx-8'
                      iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
                      />
                  </div>
                  {/*Image*/}
                  <div className="hidden xl:flex relative">
                    <div className="bg-hero_light dark:bg-hero_light1 w-[700px] h-[700px] bg-no-repeat absolute -top-1 -right-2"></div>
                        {/*Badge*/}
                        <Badge 
                        containerStyles='absolute top-[8%] right-[37rem]'
                        icon={<RiBriefcase4Fill />} 
                        endCountNum={3} 
                        badgeText='Year Of Experience'
                        />
                        <Badge 
                        containerStyles='absolute top-[40%] right-[40rem]'
                        icon={<RiTodoFill />} 
                        endCountNum={4} 
                        endCountText=''
                        badgeText='Finished Projects'
                        />

                        {/*Lottie Robot annimation */}
                        <Lottie 
                        animationData={Robot}
                        className='relative mb-0 top-[10px] right-[5rem] '
                        />
                    </div>
              </div>
              {/*Icon*/}
              <div className="flex justify-center mt-8 animate-bounce">
                  <RiArrowDownSLine className="text-3xl text-primary"/>
              </div>
          </div>
      </section>
    );
  };
  
  export default Hero;
  