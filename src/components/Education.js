import React from 'react'
import '../styles/content.css'

import data from "./data.json"

function Education() {
  return (
    <div className="content">
      <hr />
      <h2>EDUCATION</h2>
      <p><i>BSc in Economics and currently pursuing another degree in Statistics</i></p>

      {/* these will be mapped: */}

      {data.education.map(education => {
        return (
          <div className="contentDiv">
            <h3>{education.title}</h3>
            <p>{education.paragraph}</p>
            <a href={education.href} target="blank_">{education.href && "About →"}</a>
          </div>
        );
      })}
    </div>
  )
}

export default Education;
