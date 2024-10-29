import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import HighLightText from '../components/core/Homepage/HighLightText'
import CTAButton from '../components/core/Homepage/Button'
import Banner from '../assets/Images/banner.mp4'
import Codeblock from '../components/core/Homepage/Codeblock'
import TimeLineSection from '../components/core/Homepage/TimeLineSection'
import LeraingLanguageSection from '../components/core/Homepage/LeraingLanguageSection'
import InstructorSection from '../components/core/Homepage/InstructorSection'
import ExploreMore from '../components/core/Homepage/ExploreMore'
import Footer from '../components/Common/Footer'
import ReviewSlider from "../components/Common/ReviewSlider"

const Home = () => {
  return (
    <div>
        {/* SECTION 1 */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white 
                        justify-between '>

            <Link to={"/signup"} >

                <div className='group mx-auto rounded-full mt-24 font-bold bg-richblack-800 text-richblack-200
                                transition-all duration-200 hover:scale-95 w-fit'>
                    <div className='flex flex-row items-center gap-1 rounded-full px-7 py-[5px]
                                transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>

            </Link>

            <div className='text-center text-4xl font-semibold mt-8'>
                Empower Your Future with 
                <HighLightText texttt={" Coding Skills"}/>
            </div>

            <div className='w-[90%] font-bold text-center text-lg text-richblue-100 mt-4'>
                With the online coding courses, you can learn at your own pace, from anywhere in the world, 
                and can get access to a wealth of resources including hands-on-projects, quizzes, personalised 
                feedback from Instructors.
            </div>

            <div className='flex flex-row mt-5 gap-7'>
                <CTAButton active = {true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                <CTAButton active = {false} linkto={"/login"}>
                    Book a Demo
                </CTAButton>

            </div>

            <div className='shadow-[0_0_20px_0] shadow-[#00A36C] mx-5 my-12'>
                <video muted loop autoPlay>
                    <source src={Banner} type='video/mp4' />
                </video>
            </div>

            {/* // code section one */}
            <div>
                <Codeblock
                    position={"lg:flex-row"}
                    heading={ 
                            <div className='text-4xl font-semibold'>
                                Unlock Your
                                <HighLightText texttt={" coding potential "} />
                                with our online courses
                            </div>
                         }
                         subheading = {
                            "Our is courses are designed and taught by industry experts who have years of experience in coding and passionate about sharing their knowledge with you."
                         }
                         ctabutton1={
                            {
                                btntext: "try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                         } 
                         ctabutton2={
                            {
                                btntext: "Learn More",
                                linkto: "/login",
                                active: false,
                            }
                         }  

                         Codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahreaf="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
                         codecolor={"text-yellow-100"}
                
                />
            </div>

            {/* // code section two */}
            <div>
                <Codeblock
                    position={"lg:flex-row-reverse"}
                    heading={ 
                            <div className='text-4xl font-semibold'>
                                Start  <br />
                                <HighLightText texttt={" coding in seconds"} />
                            </div>
                         }
                         subheading = {
                            "Go ahead, give it a try. Our hands-on learning environment means you will be writing real code from your very first lesson"
                         }
                         ctabutton1={
                            {
                                btntext: "try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                         } 
                         ctabutton2={
                            {
                                btntext: "Learn More",
                                linkto: "/login",
                                active: false,
                            }
                         }  

                         Codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahreaf="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
                         codecolor={"text-yellow-100"}
                
                />
            </div>

            <ExploreMore/>

        </div>

        {/* SECTION 2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>
        
                
                <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto'>
                    <div className='h-[50px]'></div>
                    <div className=' flex flex-row mx-auto gap-[5rem] text-white '> 
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3'>
                                Explore Full Catelog 
                                <FaArrowRight/>
                            </div>
                        </CTAButton>
                        <CTAButton active={false} linkto={"/signup"}>
                            <div className='flex items-center gap-3'>
                                Learn More
                                <FaArrowRight/>
                            </div>
                        </CTAButton>

                    </div>
                </div>

                <div className='flex flex-col w-11/12 max-w-maxContent mx-auto gap-7 items-center justify-between'>

                    <div className='flex flex-row gap-[5rem] mb-10 mt-[100px]'>
                                <div className='text-4xl font-semibold w-[45%]'>
                                    Get the Skills you need for a 
                                    <HighLightText texttt={" job that is in demand"}/>
                                </div>
                                <div className='flex flex-col w-[40%] gap-10 items-start'>
                                    <div className='text-[16px]'>
                                    The modern learnNew plateform dictates its own terms. Today, to be a competitive 
                                        specialist requires more than professional skills.
                                    </div>
                                    <CTAButton active={true} linkto={"/signup"}>
                                        <div>Learn More</div>
                                    </CTAButton>
                                </div>
                            
                    </div> 

                    <TimeLineSection/>
                    <LeraingLanguageSection/>
                </div>

        </div> 


        {/* SECTION 3 */}
         <div className='w-11/12 mx-auto flex flex-col max-w-maxContent justify-between bg-myfav-50 gap-5
                text-richblack-300 first-letter '>

                <InstructorSection/>
                
                <h2 className='text-center text-4xl pt-11 font-semibold'>Reviews from other learners</h2>

                {/* Reaview slider code*/}
                    <ReviewSlider/>
         </div>

        {/* FOOTER */}
        <Footer/>

    </div>
  )
}

export default Home