import React from 'react'

const Video = () => {
    return (
        <video
            className="w-full h-full object-cover block"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/HeroVideo.mp4"
        />
    )
}

export default Video