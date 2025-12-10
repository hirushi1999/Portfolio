import React from 'react'
import './Hero.css'
import HeroImg from './assets/my_photo.png';
import { FaReact, FaJava, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { Wave } from "react-animated-text";

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Hi, I am Hirushi Nethmini</h2>
            <h4><Wave text="Hi, I am a Software Engineer." effect="fadeOut" effectChange={1.0} /></h4>
            
            <br />
            <p>
            Passionate about building meaningful digital solutions, I am a self-driven Software Engineer with solid experience in 
            full-stack development and real-world fintech projects. I thrive in fast-paced environments, enjoy learning new technologies,
             and consistently deliver quality solutions on time. I recently updated my portfolio to reflect my latest projects, achievements, 
             and technical growth, and I am excited to bring this experience to a new challenge.
            </p>
        </div>
        <div className='hero-img'>
          <div>
            <img src={ HeroImg } alt="" class="rounded-box" style={{ width: '300px', height: '300px'}}/>
          </div>

          <div>
            <div className='tech-icon large-icon' style={{color: '#00FFFF'}}>
              <FaReact />
            </div>
            <div className='tech-icon large-icon' style={{color: '#FFFF00'}}>
              <IoLogoJavascript />
            </div>
            <div className='tech-icon large-icon' style={{color: '#FF00FF'}}>
              <FaHtml5 />
            </div>
            <div className='tech-icon large-icon' style={{color: '#DDDDDD'}}>
              <FaJava />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero