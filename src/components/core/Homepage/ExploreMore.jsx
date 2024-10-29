import React, { useState } from 'react'
import { HomePageExplore } from "../../../data/homepage-explore"
import HighLightText from './HighLightText';
import CourseCard from './CourseCard'

const tabsname = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
]

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsname[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value)  => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className='text-4xl font-semibold text-center'>
                Unlock the 
                <HighLightText texttt={" Power of code"} />
            </div>

            <p className='text-center text-lg text-richblack-300 mt-3'>
                Learn to build anything you can imagine
            </p>

            <div className='mt-5 flex flex-wrap justify-center rounded-full w-full max-w-3xl mx-auto bg-richblack-800 mb-5 border-richblack-100  py-2 gap-2'>
                {
                    tabsname.map((element, index) => (
                        <div
                            className={`text-[14px] sm:text-[16px] flex flex-row items-center gap-2 
                            ${currentTab === element 
                            ? "bg-myfav-100 text-richblack-5 font-medium"
                            : "text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer
                            hover:bg-myfav-100 hover:text-richblack-5 px-4 py-2 sm:px-7 sm:py-2`}
                            key={index}
                            onClick={() => setMyCards(element)}
                        >
                            {element}
                        </div>
                    ))
                }
            </div>

            <div className='lg:h-[80px]'></div>

            {/* Course Card Group */}
            <div className='flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto mb-14 px-4'>
                {
                    courses.map((element, index) => (
                        <CourseCard
                            key={index}
                            cardData={element}
                            currentCard={currentCard}
                            setCurrentCard={setCurrentCard}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ExploreMore
