import videoBG from '../assets/videoBG.mp4';
import React from 'react'

function Videobg() {
  return (
    <div className='video__container'>
      <video src={videoBG} autoPlay loop muted className='video'></video>
    </div>
  )
}

export default Videobg
