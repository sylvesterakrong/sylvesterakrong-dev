import { GanttChartSquare, Blocks, Gem, GitPullRequestArrow } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: 'Web Development',
        description: 'Crafting cutting-edge websites that blend creativity and functionality, delivering seamless digital experiences. We build scalable, responsive solutions tailored to your business goals, ensuring your online presence stands out.',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8}/>,
        title: 'Mobile App Development',
        description: 'Transform your ideas into mobile applications that engage users and drive results. Whether iOS or Android, we create intuitive, high-performance apps that deliver value and innovation in every touch.',
    },
    {
        icon: <GitPullRequestArrow size={72} strokeWidth={0.8}/>,
        title: 'Web Extension Development',
        description: 'Empower your users with powerful web extensions that enhance functionality and streamline workflows. From custom browser tools to seamless integrations, we build extensions that simplify and elevate the user experience.',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8}/>,
        title: 'UI/UX Design',
        description: 'Design that speaks volumes—our UI/UX solutions focus on creating intuitive, aesthetically pleasing interfaces that prioritize user satisfaction. We turn complex ideas into beautiful, user-friendly designs that leave lasting impressions.',
    },
];


const Services = () => {
  return (
    <section className="mb-12 mt-[150px]  xl:mb-36">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 pb-6 xl:mb-22 text-center mx-auto">
                ⚙️ My Services
            </h2>

            {/*Grid lines*/}
            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8 sm:gap-y-12 sm:gap-x-5">
                {servicesData.map((item, index) => {
                    return(
                        <Card className='w-full max-w-[424px] h-[400px] flex flex-col pt-16 pb-12 justify-center items-center relative mb-6' 
                        key={index}>
                            <CardHeader className='text-primary absolute -top-[70px] '>
                                <div className="w-[130px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center"> 
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4 mt-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Services