import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HighLightText from './HighLightText'
import CTAbutton from './Button'
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
   <div className='mt-16'>
        <div className='flex flex-row gap-[5rem] items-center '>

            <div className='w-[50%] '>
                <img
                    src={Instructor}
                    className='shadow-white'
                    alt='instructor'
                />
            </div>

            <div className='w-[50%] flex flex-col gap-10 '>
                <div className='text-4xl font-semibold'>
                    Become an <br /> 
                    <HighLightText texttt={" Instructor"} />
                </div>

                <p className='font-medium text-[16px] w-[90%] '>
                    Instructor from around the world teach million of students on <br /> learnNew. We provide the 
                    tools and skills to teach what you love.
                </p>

                <div className='w-fit'>
                    <CTAbutton action={true} linkto={"/signup"}>
                            <div className=' flex items-center gap-2'>
                                Start Teaching Today
                                <FaArrowRight/>
                            </div>
                    </CTAbutton>
                </div>
                
              

            </div>


        </div>
   </div>
  )
}

export default InstructorSection