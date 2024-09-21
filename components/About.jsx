'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import{ User2, MailIcon, PhoneCall, GraduationCap, Briefcase} from 'lucide-react';
import Robot from '@/public/hero/Robot.json';
import Lottie from 'lottie-react'
import { GearIcon } from "@radix-ui/react-icons";

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Sylvester Akrong',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+233240207132',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'akrongsylvester@gmail.com',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Bachelor of Science in Information Technology',
    }, 
];

const qualificationData = [
    {
        title: 'experience',
        data: [
            {
                company: 'Freelance remote',
                role: 'Software engineer and IT Support',
                years: 'December 2023 to Present',
                description: 'Provinding software with distinct UI designs and a smooth experience as well as technical assistance and technical support to clients.'
            },
            {
                company: 'Kwame Nkrumah University of Science and Technology, UITS, Kumasi-Ghana',
                role: 'IT Support - National service',
                years: 'December 2023 to October 2024',
                description: 'Technical Assistance and Technical Support to the university community which included the univeristy teaching and non-teaching staff and also students'
            },
            {
                company: 'University of Professional Studies, Accra-Ghana',
                role: 'Junior Software Engineer - Internship',
                years: 'December 2022 to December 2022',
                description: 'An internship which helped me learn the fundamentals of software development . I also worked on the documentation for the student admission portal during my time there. I also had the opportunity to build projects in react native and also got guidance and coaching from the Director and other engineers'
            },
            {
                company: 'Presec Robotics and Programming Club, Accra-Ghana',
                role: 'Head of Hardware - Part-time',
                years: 'December 2022 to December 2022',
                description: 'I was in-charge of designing and building standard robots for various competitions both locally and internationally.'
            },
        ]
    },
    {
        title: 'education',
        data: [
            {
                university: 'Kwame Nkrumah University of Science and Technology, Kumasi-Ghana',
                qualification: 'Bachelor of Science in Information Technology',
                years: '2024 to date',
            },
            {
                university: 'Kwame Nkrumah University of Science and Technology, Kumasi-Ghana',
                qualification: 'Diploma Information Technology',
                years: '2021-2023',
            },
            {
                university: 'Presbyterian Boys Secondary School, Legon-Accra,Ghana',
                qualification: 'High School Diploma (WASSCE)',
                years: '2018-2020',
            },
        ]
    }
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML5, CSS3, Javascript, React JS, Next JS, Tailwind CSS',
            },
            {
                name: 'Front-end Development'
            },
            {
                name: 'Python',
            },
            {
                name: 'Automation',
            },
            {
                name: 'Flutter, React Native'
            },
            {
                name: 'Mobile App development',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                name: 'VScode, Firebase, Powershell,',
            },
            {
                name: 'Figma, Adobe Lightroom,'
            },
            {
                name: 'Vercel, Adobe After Effects,',
            },
            {
                name: 'Canva, Expo, Adobe XD',
            },
            {
                name: 'NPM, Git, Github'
            },
        ]
    },
];


const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

  return (
    <section className="xl:h-[860px] pb-18 pt-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            🦊 About me
            </h2>
            <div className="flex flex-col xl:flex-row" >
                {/*Image*/}
                <div className="flex justify-center xl:flex-1 relative text-center mx-auto">
                        {/*Lottie Robot annimation */}
                        <Lottie 
                        animationData={Robot}
                        className="relative mb-0 top-[10px] right-[5rem] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]"/>
                </div>
                {/*tabs */}
                <div className="flex-1"> 
                    <Tabs defaultValue="personal">
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value ='personal'> Personal Info </TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value ='qualifications'> Qualifications </TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'> Skills </TabsTrigger>
                        </TabsList>
                        {/*Tabs content */}
                        <div className="text-lg mt-12 xl:mt-8">
                            {/*personal*/}
                            <TabsContent value='personal'>
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-4">
                                        Passionate Software Engineer Dedicated To Crafting Intuitive Digital Experiences.
                                    </h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-9">
                                        As a passionate software engineer, I thrive on building sleek, user-friendly interfaces and solving complex technical challenges. My expertise spans across web and mobile development, automation, and creating innovative solutions that elevate the user experience. With a dedication to continuous learning, I embrace new technologies to deliver impactful results.
                                    </p>
                                    {/*icons*/}
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {infoData.map((item, index) => {
                                            return(
                                                <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                    <div className="text-primary">{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    {/*languages */}
                                    <div className="flex flex-col gap-y-2">
                                        <div className="text-primary">Languages Skills</div>
                                        <div className="border-b border-border"></div>
                                            <div>Fluent in English</div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/*Qualifications Info*/}
                            <TabsContent value='qualifications'> 
                                <div>
                                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>

                                    {/*experience and education */}
                                    <div className="grid md:grid-cols-2 gap-y-8">
                                        {/*experience*/}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <Briefcase/>
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'experience').title}
                                                </h4>
                                            </div>
                                            {/*list*/}
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'experience').data.map((item, index) => {
                                                    const {company, role, years} = item;
                                                    return(
                                                        <div className="flex gap-x-8 group" key ={index}>

                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>

                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                <div className="text-lg leading-none text-muted-foreground ">{role}</div>
                                                                <div className="text-base font-medium mb-4">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        {/*education*/}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <GraduationCap size={28}/>
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                            </div>
                                            {/*list*/}
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'education').data.map((item, index) => {
                                                    const {university, qualification, years} = item;
                                                    return(
                                                        <div className="flex gap-x-8 group" key ={index}>

                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>

                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                <div className="text-lg leading-none text-muted-foreground ">{qualification}</div>
                                                                <div className="text-base font-medium mb-4">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/*Skills*/}
                            <TabsContent value='skills'>
                                 <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-8 ">What I Use Everyday</h3>
                                    <div className="mb-16">
                                        <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        {/*skill list*/}
                                        <div>
                                        {getData(skillData, 'skills').data.map(
                                            (item, index) =>{
                                                const {name} = item;
                                                return(
                                                    <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                        <div className="font-medium">
                                                            {name}
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        )}
                                        </div>
                                    </div>
                                    {/*tools*/}
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        <div className="justify-center"> 
                                            {getData(skillData, 'tools'). data.map((item, index) => {
                                                const {name} = item;
                                                return(
                                                        <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                        <div className="font-medium">
                                                            {name}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                 </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
)
}

export default About