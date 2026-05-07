import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap/all"
import { useLocation } from 'react-router-dom'


const Stairs = ({ children }) => {

    const CurrentPath = useLocation().pathname

    const pageRef = useRef(null)
    const stairParentRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block',
            delay:-0.1
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.25
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none',
        })
        tl.to('.stair', {
            y: 0,
        })
        gsap.from(pageRef.current,{
            opacity:0,
            delay:1.3,
        })
    }, [CurrentPath])

    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed overflow-hidden top-0 l-0 z-1 '>
                <div className='h-full w-full z-1 flex'>
                    <div className="h-full stair bg-black w-1/5"></div>
                    <div className="h-full stair bg-black w-1/5"></div>
                    <div className="h-full stair bg-black w-1/5"></div>
                    <div className="h-full stair bg-black w-1/5"></div>
                    <div className="h-full stair bg-black w-1/5"></div>
                </div>
            </div>
            <div ref={pageRef}>
                {children}
            </div>
        </div>
    )
}

export default Stairs