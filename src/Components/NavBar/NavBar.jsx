import React from 'react'
import { useState } from 'react'
import "./NavBar.css"

const NavBar = () => {
  const [list, setList] = useState(false)
  const listState = list ? 'fa-icon-open':'fa-icon-close'
  const circleState = list ? 'circle-open' : 'circle-close'
  return (
    <div className='nav'>
    <div className={listState} onClick={() => setList(!list)}>
      <span className='fa-line1'></span>
      <span className='fa-line2'></span>
      <span className='fa-line3'></span>
    </div>
      <img src='' alt=''/>
      <div className={circleState}></div>
    </div>
  )
}

export default NavBar