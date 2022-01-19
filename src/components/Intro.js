import React from 'react'
import './intro.css';

const Intro = () => {
    return (
      <div className="i">
        <div className="i-left">
          <div className='i-left-wrapper'>
            <h2 className="i-intro">Hello, my name is</h2>
            <h1 className="i-name">Zach Rickers</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Programmer</div>
                <div className="i-title-item">Educator</div>
                <div className="i-title-item">Artist</div>
                <div className="i-title-item">Dancer</div>
                <div className="i-title-item">Traveler</div>
              </div>
            </div>
          </div>
        </div>
        <div className="i-right">right</div>

      </div>
  )
}

export default Intro
