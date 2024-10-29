import React from 'react'
import HighLightText from './HighLightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.png'
import compare_with_others from '../../../assets/Images/Compare_with_others.png'
import plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png'
import Ctabutton from './Button'

const LeraingLanguageSection = () => {
  return (
    <div className='m-[100px]'> 
        <div className='flex flex-col gap-5'>

            <div className='text-4xl font-semobold text-center'>
              Your swiss Knife for 
              <HighLightText texttt={" learning any language"}/>
            </div>

            <div className='text-center text-richblack-600 mx-auto text-base mt-3 w-[70%]'>
              Using spin making learning multiple languages easy. With 20+ languages realistic vice-over, 
              progress tracking, custom schedule and more.
            </div>

            <div className='flex flex-row justify-center items-center '>
              <img 
              src={know_your_progress}
              className='object-contain -mr-32'
              alt='know_your_progress'
              />
              <img
               src={compare_with_others}
              className='object-contain'
              alt='compare_with_others'
              />
              <img
               src={plan_your_lessons}
              className='object-contain -ml-36'
              alt='plan_your_lessons'
              />
            </div>

            <div className='w-fit  mx-auto'>
              <Ctabutton active={true} linkto={"/signup"} >
                Learn More
              </Ctabutton>
            </div>


        </div>
    </div>
  )
}

export default LeraingLanguageSection