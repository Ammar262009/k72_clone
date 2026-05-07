import React from 'react'
import Video from '../components/Home/Video'
import HeroText from '../components/Home/HeroText'
import BottomText from '../components/Home/BottomText'

const Home = () => {
  return (
    <div>
      <div className='w-full fixed h-screen'>
        <Video />
      </div>
      <div className='h-screen min-h-screen items-center w-full justify-between relative flex-col flex'>
        <HeroText />
        <BottomText />
      </div>
    </div>
  )
}

export default Home