import React, { useRef } from 'react'
import Navbar from './Navbar'

const NavBarFull = () => {
    const first = useRef()
    return (
        <div className='h-screen w-full bg-black'>
            <div className='h-29'></div>
            <div>
                <div className='uppercase relative border-t font-[font2] text-[8vw] text-white'>
                    <h1 className=' flex leading-[0.8] pt-3 items-center justify-center'>Projets</h1>
                    <div className=' bg-[#D3FD50] text-black top-0 absolute'>
                        <div className='flex items-center'>
                            <h2 className='whitespace-nowrap flex leading-[0.8] pt-3 items-center justify-center'>Pour Tout voir</h2>
                            <img className='w-60 shrink-0 h-21 object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            <h2 className='whitespace-nowrap flex leading-[0.8] pt-3 items-center justify-center'>Pour Tout voir</h2>
                            <img className='w-60 shrink-0 h-21 object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                        </div>
                        <div className='flex items-center'>
                            <h2 className='whitespace-nowrap flex leading-[0.8] pt-3 items-center justify-center'>Pour Tout voir</h2>
                            <img className='w-60 shrink-0 h-21 object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            <h2 className='whitespace-nowrap flex leading-[0.8] pt-3 items-center justify-center'>Pour Tout voir</h2>
                            <img className='w-60 shrink-0 h-21 object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavBarFull