import React from 'react'
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import Timelineimage from '../../../assets/Images/TimelineImage.png'

const Timeline = [
      {
        Logo: Logo1,
        Heading: "Leadership",
        Desciption: "Fully committed to the success company",
      },
      {
        Logo: Logo2,
        Heading: "Responsibility",
        Desciption: "Student will always be our top priority",
      },
      {
        Logo: Logo3,
        Heading: "Flexibility",
        Desciption: "The ability to switch is an important skill",
      },
      {
        Logo: Logo4,
        Heading: "Solve the Problem",
        Desciption: "Code your way to a solution",
      },
]

const TimeLineSection = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-10 items-center mb-14 mt-10'>
              
            {/* LEFT BOX */}
            <div className='flex flex-col gap-10 w-full lg:w-[45%]'>
                {
                  Timeline.map((Element, index) => (
                    <div className='flex flex-col sm:flex-row gap-6' key={index}>
                        <div className='w-[50px] h-[50px] bg-white flex items-center justify-center'>
                            <img src={Element.Logo} alt={Element.Heading} />
                        </div>
                        <div>
                            <h2 className='font-semibold text-[18px]'>{Element.Heading}</h2>
                            <p className='text-base'>{Element.Desciption}</p>
                        </div>
                    </div>
                  ))
                }
            </div>
            
            {/* RIGHT PART */}
            <div className='relative w-full lg:w-[45%]'>
                <img src={Timelineimage} alt="timelineimg" className='shadow-richblack-700 w-full h-auto' />
                <div className='absolute bg-caribbeangreen-700 uppercase text-white flex flex-col md:flex-row py-7
                                left-[50%] translate-x-[-50%] translate-y-[-50%] gap-4'>
                    <div className='flex items-center gap-2 border-b md:border-b-0 md:border-r-2 border-caribbeangreen-300 px-4 md:px-7'>
                        <p className='text-2xl md:text-3xl font-bold'>10</p>
                        <p className='text-caribbeangreen-300 text-sm md:text-base'>Years of Experience</p>
                    </div>
                    <div className='flex items-center gap-2 border-t md:border-t-0  border-caribbeangreen-300 px-4 md:px-7'>
                        <p className='text-2xl md:text-3xl font-bold'>250</p>
                        <p className='text-caribbeangreen-300 text-sm md:text-base'>Types of Courses</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TimeLineSection
