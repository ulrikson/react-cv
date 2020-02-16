import React from 'react'
import '../styles/content.css'

import data from "./data.json"

function Projects() {
  return (
    <div className="content">
      <hr />
      <h2>PROJECTS</h2>
      <p><i>A selection of the developer projects I've been working on. Stay tuned for more.</i></p>

      {/* these will be mapped: */}

      {data.projects.map(project => {
        return (
          <div className="contentDiv">
            <h3>{project.title}</h3>
            <i className={project.icon1}></i>
            <i className={project.icon2}></i>
            <p>{project.paragraph}</p>
            <a href={project.href} target="blank_">{project.href && "Read more →"}</a>
          </div>
        );
      })}
    </div>
  )
}

export default Projects;
