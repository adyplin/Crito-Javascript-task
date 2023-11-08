import React from 'react'

const ArticleAndNewsBox = ({date, month, img, title, text, description}) => {
  return (
    <div className="business">
      <div className="yellow-box">
        <h5>{date}</h5>
        <p>{month}</p>
      </div>
        <img src={img} />
        <p>{title}</p>
        <h6>{text}</h6>
        <p>{description}</p>
    </div>
  )
}

export default ArticleAndNewsBox