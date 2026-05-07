import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agency = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArr = ['/Images/Carl.jpg', '/Images/Olivier.jpg', '/Images/CAMILLE.jpg', '/Images/Chantal.jpg', '/Images/joel.jpg', '/Images/MEGGIE.jpg', '/Images/MEL.jpg']
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger:imageDivRef.current,
        start: 'top 10%',
        end: 'top -140%',
        pin:true,
        pinReparent:true,
        pinSpacing:true,
        pinType:'transform',
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate: (elem) => {
          let imageArrIndex;
          if (elem.progress < 1) {
            imageArrIndex = Math.floor(elem.progress * imageArr.length)
          } else {
            imageArrIndex = Math.floor(elem.progress * imageArr.length - 1)
          }

          imageRef.current.src = imageArr[imageArrIndex]
        }
      }
    })

  })

  return (
    <div>
      <div className='section1 py-1'>
        <div ref={imageDivRef} className='h-[20vw] absolute w-[15vw] rounded-3xl overflow-hidden top-1/5 left-3/10 '>
          <img ref={imageRef} className='h-full object-cover w-full' src={imageArr[0]} alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[55vh] '>
            <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>Soixan7e <br />
              Douze</h1>
          </div>


          <div className='lg:pl-[40%] lg:mt-10 mt-6'>
            <p className='lg:text-[3.3rem] leading-14 text-4xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen w-full">

      </div>

    </div>
  )
}

export default Agency