import React from 'react'
import "./about.css"
import Code from "../../img/technology-1283624_1920.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Code} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            I am a budding programmer looking to make a lasting impact on the world through creative colloboration.
          </p>
          <p className="a-desc">
            I am originally from the United States and recently moved to Prague.  I am looking to network and find creative people who inspire and influence me to creative beautiful and productive applications.
          </p>
      </div>
    </div>
  )
}

export default About
