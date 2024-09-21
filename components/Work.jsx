'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules';
import ProjectCard from '@/components/ProjectCard'


const projectData=[
    {
        name:'Blogtree',
        category: 'NextJS, Bulma CSS, Vercel',
        description: 
        'A blog website built with Next JS to allow users express their ideas.',
        link:'https://blogtree.vercel.app/',
        github:'https://github.com/sylvesterakrong/BlogTREE/'
    },
    {
        name:'Ninja View Autotrader',
        category: 'Javascript, HTML5, CSS3, Ngrok',
        description: 'A chrome extension to help customers automate their trading on Trading View~(Freelance)',
        link:'https://chromewebstore.google.com/detail/ninjaview/jpfpombogpcpoaibfnafejolcpegggfp?hl=en&pli=1/',
        github:'/sylvesterakrong/components/Work.jsx'
    },
    {
        name:'Elegant Builders Ltd',
        category: 'NextJS, Tailwind CSS, Vercel',
        description: 
        'A website that gives the company a good internet presence and puts them on top of their competitors. Sleek elegant design.',
        link:'https://elegantbuildersltd.vercel.app/',
        github:'/sylvesterakrong/components/Work.jsx'
    },
    {
        name:'Malici-Chrome Extension',
        category: 'Javascript, HTML5, CSS3, Ngrok',
        description: 'This project focused on improving safety online by helping to filter urls and sort them into safe or unsafe.',
        link:'/sylvesterakrong/components/Work.jsx',
        github:'https://github.com/sylvesterakrongMalici-Chrome-extension'
    },
]



const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            {/*text*/}
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center">
                <h2 className="section-title mb-4">🚀Latest Projects</h2>
                <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nam</p>
                <Link href= '/projects'>
                    <Button>🚀 All projects</Button>
                </Link>
            </div>
            {/*slider */}
            <div 
            className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                <Swiper  
                className='h-[480px]' 
                slidesPerView={1} 
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                }} 
                spaceBetween={30} 
                modules={{Pagination}} 
                pagination={{clickable:true}}
                >
                    {projectData.slice(0, 4).map((project, index) => {
                        return(
                            <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work