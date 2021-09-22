import React from 'react'
import About from './about/About'
import Skill from './skills/Skill'
import Project from './projects/Project'
import Work from './work/Work'
import Contact from './contact/Contact'
function Body() {
    return (
        <div className="body">
           <section id="about">
                <About/>
           </section>
           <section id="project">
                <Project/>
           </section>
           <section id="skill">
                <Skill/>
           </section>
           <section id="work">
                <Work/>
           </section>
           <section id="contact">
                <Contact/>
           </section>
        </div>
    )
}

export default Body
