import React from 'react'
import './Tail.css'

const Tail = () => {
  return (
    <div className='tail-container-cont'>
      <div className='tail-container'>
        <div className='tail-container-det tail-container-det1'>
          <span className='tail-container-det-title'>Categories</span>
            <span className='tail-container-det-dis-text'>Furniture </span>
            <span className='tail-container-det-dis-text'>Appliances </span>
            <span className='tail-container-det-dis-text'>Marble </span>
            <span className='tail-container-det-dis-text'>Doors</span>
            <span className='tail-container-det-dis-text'>Electrical Sockets</span>
            <span className='tail-container-det-dis-text'>Gym Equipment</span>
            <span className='tail-container-det-dis-text'>Fit-Out</span>
            <span className='tail-container-det-dis-text'>Curtains</span>
            <span className='tail-container-det-dis-text'>Ceramics</span>
            <span className='tail-container-det-dis-text'>Sanitary Ware</span>
        </div>
        <div className='tail-container-det tail-container-det2'>
          <span className='tail-container-det-title'>Projects</span>
          <div className='tail-container-det-dis'>
            <span className='tail-container-det-dis-text'>Maryah Vista I </span>
          </div>
        </div>
        <div className='tail-container-det tail-container-det3'>
        <span className='tail-container-det-title'>Communities</span>
          <div className='tail-container-det-dis'>
            <span className='tail-container-det-dis-text'>Al Maryah Island</span>
          </div>
        </div>
        {/* <div className='tail-container-det tail-container-det4'>Text Area</div> */}
      </div>
      <div className='copyright'>Copyright © 2023 Design Factor. All rights reserved</div>
    </div>
  )
}

export default Tail