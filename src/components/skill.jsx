import React from 'react'
import Form from './form'

function Skill() {
  return (
    <>
    <div className="sc">
    <div className="skills" id='skills'>
      <div id="technical-skills" class="skills-category">
                <h3>Technical Skills</h3>
                <div class="skills-grid">
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fab fa-html5"></i></div>
                        <h4>HTML5</h4>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fab fa-css3-alt"></i></div>
                        <h4>CSS3</h4>
                    </div>

                    <div class="skill-item">
                        <div class="skill-icon"><i class="fab fa-js"></i></div>
                        <h4>JavaScript</h4>
                        
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon"><i class="fab fa-react"></i></div>
                        <h4>React</h4>
                    </div>
                </div>
            </div>
    </div>

    <Form/>

    </div>
    </>
  )
}

export default Skill