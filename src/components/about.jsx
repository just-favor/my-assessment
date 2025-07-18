import React from 'react'
import Image from '../assets/selfi.JPG'

function About() {
  return (
    <section className="about" id='about'>
        <div className="about-img">
            {/* <img src={Image} alt="" /> */}
        </div>
        <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div class="about-text">
                    <h3>Who I Am</h3>
                    <p>I'm a passionate web developer and designer with a strong focus on creating user-friendly and visually appealing websites.
                         With over 3 years of experience in the field, I've worked on a variety of projects ranging from small business websites to complex web applications.</p>
                    
                    <h3>My Journey</h3>
                    <p>My journey in web development started when I was in college, where I discovered my passion for coding and design.
                         Since then, I've been constantly learning and improving my skills to stay up-to-date with the latest technologies and trends in the industry.</p>
                    
                    <div class="personal-info">
                        <div class="info-item">
                            <span class="info-title">Name:</span>
                            <span class="info-value">Ogbewe Favour</span>
                        </div>
                        <div class="info-item">
                            <span class="info-title">Email:</span>
                            <span class="info-value">vivasfavor@gmail.com</span>
                        </div>
                        <div class="info-item">
                            <span class="info-title">Location:</span>
                            <span class="info-value">Port-Harcourt, Nigeria</span>
                        </div>
                        <div class="info-item">
                            <span class="info-title">Availability:</span>
                            <span class="info-value">Available for Freelance</span>
                        </div>
                    </div>
                </div>
      </div>
    </section>
  )
}

export default About