import React from 'react'
import Button from '../Homepage/Button'
import HighLightText from './HighLightText'
import { FaArrowRight } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const Codeblock = ({
    position, heading, subheading, ctabutton1, ctabutton2, Codeblock, backgroundgradient, codecolor
}) => {
  return (
    <div className= {`flex  ${position} my-20 justify-between gap-10 `}>
        {/* section 1 */}
        <div className='w-[50%] flex flex-col gap-8 pl-5'>
            {heading}
            <div className='text-richblack-300  font-bold '>
                {subheading}
            </div>

            <div className='flex flex-row gap-8 mt-7'>
                <Button active={ctabutton1.active} linkto={ctabutton1.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabutton1.btntext}
                    <FaArrowRight/>
                </div>
                </Button>

                <Button active={ctabutton2.active} linkto={ctabutton2.linkto}>
                       {ctabutton2.btntext}
                </Button>
            </div>


        </div>

        {/* section 2 */}
        <div className='h-fit flex flex-row text-10[px] py-4 w-[100%] lg:w-[500px]'>
            {/* gradient addiotn */}

            <div className='flex text-center flex-col w-[10%] text-richblack-400  font-inter font-bold '>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>
            <div className= {`w-[90%] flex flex-col font-bold gap-2 font-mono ${codecolor} pr-2`}>
                <TypeAnimation
                    sequence={[Codeblock, 5000, ""]}
                    repeat={Infinity}
                    cursor={true}
                   style={
                        {
                            whiteSpace: "pre-line",
                            display: "block",
                        }
                   }
                   omitDeletionAnimation={true}
                />
            </div>

        </div>


    </div>
  )
}

export default Codeblock