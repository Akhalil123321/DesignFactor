import React from 'react'
import "./VideoBackground.css"
import backVideo from "../../Images/Background.mp4"

const VideoBackground = () => {
  return (
    <div className='video-back-head'>
      <div className='video-Shadow3'></div>
      <div className='video-Shadow3'></div>
    <div className='video-Shadow1'></div>
    <div className='video-Shadow1'></div>
    <div className='video-Shadow2'></div>
      <video autoPlay muted loop className='video-back'>
        <source src={backVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoBackground