import React from 'react'

const TeamMemberBox = ({img, title, description}) => {
 
    return (
      <div className="img">
        <img src={img} />
        <h4>{title}</h4>
        <p></p>{description}
      </div>
    )
  }

export default TeamMemberBox