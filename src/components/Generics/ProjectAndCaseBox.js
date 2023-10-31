import React from 'react'


const ProjectAndCaseBox = ({img, title, description}) => {
 
  return (
    <a class="project" href="#">
        <img src={img} />
        <h3>{title}</h3>
        <div class="readmore">{description}<i class="fa-regular fa-arrow-up-right"></i></div>
    </a>
  )
}

export default ProjectAndCaseBox