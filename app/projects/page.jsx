'use client'
import React, {useState} from 'react'
import { Tabs, TabsList, TabsContent,TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const projectData=[
  {
      name:'Blogtree',
      category: 'NextJS',
      description: 
      'A blog website built with Next JS to allow users express their ideas.',
      link:'https://blogtree.vercel.app/',
      github:'https://github.com/sylvesterakrong/BlogTREE/'
  },
  {
      name:'Ninja View Autotrader',
      category: 'Javascript, HTML',
      description: 'A chrome extension to help customers automate their trading on Trading View~(Freelance)',
      link:'https://chromewebstore.google.com/detail/ninjaview/jpfpombogpcpoaibfnafejolcpegggfp?hl=en&pli=1/',
      github:'/sylvesterakrong/components/Work.jsx'
  },
  {
      name:'Elegant Builders Ltd',
      category: 'NextJS',
      description: 
      'A website that gives the company a good internet presence and puts them on top of their competitors. Sleek elegant design.',
      link:'https://elegantbuildersltd.vercel.app/',
      github:'/sylvesterakrong/components/Work.jsx'
  },
  {
      name:'Malici-Chrome Extension',
      category: 'Javascript, HTML, CSS',
      description: 'This project focused on improving safety online by helping to filter urls and sort them into safe or unsafe.',
      link:'/sylvesterakrong/components/Work.jsx',
      github:'https://github.com/sylvesterakrongMalici-Chrome-extension'
  },
]

const uniqueCategories = ['all projects',
  ...new Set(projectData.map((item) => item.category ))];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects')
  const filterProjects = projectData.filter(project => {
    return category === 'all projects' 
    ? project 
    : project.category === category;
  });




  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
        💡My Projects
        </h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[880px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return(
                <TabsTrigger 
                onClick={() => setCategory(category)}
                value={category} 
                key={index}
                className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
              {filterProjects.map((project, index) => {
                return(
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project}/>
                  </TabsContent>
                )
              })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects