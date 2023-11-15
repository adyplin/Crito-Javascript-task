import React from 'react'

const FooterBox = ({headline, text, title, description, paragraph}) => {
  return (
    <div>
      <ul>{headline}</ul>
      <a href="/services"><li>{text}</li></a>
      <a href="/services"><li>{title}</li></a>
      <a href="/services"><li>{description}</li></a>
      <a href="/services"><li>{paragraph}</li></a>
    </div>
  )
}

export default FooterBox