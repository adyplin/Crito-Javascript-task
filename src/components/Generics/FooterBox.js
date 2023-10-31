import React from 'react'

const FooterBox = ({headline, text, title, description, paragraph}) => {
  return (
    <div>
        <ul>{headline}</ul>
        <a href="#"><li>{text}</li></a>
        <a href="#"><li>{title}</li></a>
        <a href="#"><li>{description}</li></a>
        <a href="#"><li>{paragraph}</li></a>
    </div>
  )
}

export default FooterBox