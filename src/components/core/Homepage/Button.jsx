import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, active, linkto}) => {
  return (
    
    <Link to={linkto}>
        <div className= {`text-center py-3 px-6 text-[13px] rounded-md font-bold
                        ${active ? "bg-myfav-100 text-black":"bg-richblack-800 border-[1px] border-richblack-600" }
                        hover:scale-95 transition-all duration-200
                        `}>
            {children}  
        </div>
    </Link>

  )
}

export default Button
