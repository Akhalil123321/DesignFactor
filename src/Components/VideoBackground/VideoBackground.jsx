import React from 'react'
import "./VideoBackground.css"
import backVideo from "../../Images/Background.mp4"

const VideoBackground = () => {
  return (
    <div className='video-back-head'>
      <video autoPlay muted loop className='video-back'>
        <source src={backVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoBackground