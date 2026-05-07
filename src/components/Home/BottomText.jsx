import React from 'react'
import { Link } from 'react-router-dom'

const BottomText = () => {
  return (
    <div className='uppercase font-[font2] flex gap-3 mb-[0.8vh]'>
      <div className='rounded-full text-[5.7vw] border-[0.2rem] hover:text-[#d3fd50] hover:border-[#d3fd50] cursor-pointer mt-[2.5rem] mr-[0.625rem] mb-0 ml-[0.625rem] leading-tight border-white px-[2rem] text-white'>
        <Link to='/projects'>Projects</Link>
      </div>
      <div className='rounded-full text-[5.7vw] border-[0.2rem] hover:text-[#d3fd50] hover:border-[#d3fd50] cursor-pointer mt-[2.5rem] mr-[0.625rem] mb-0 ml-[0.625rem] leading-tight border-white px-[2rem] text-white'>
        <Link to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default BottomText