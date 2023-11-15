import React from 'react'


const ProjectAndCaseBox = ({img, title, description}) => {
 
  return (
    <a className="project" href="/services">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <div className="readmore">{description}<i className="fa-regular fa-arrow-up-right"></i></div>
    </a>
  )
}

export default ProjectAndCaseBox