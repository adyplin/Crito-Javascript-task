import React from 'react'

const WhyChooseUsBox = ({type, title, description}) => {
    const getIconClassName = () => {
        switch(type) {
            case 'thumbs':
                return 'fa-thin fa-thumbs-up'
            case 'aperture':
                return 'fa-thin fa-aperture'
            case 'bezier':
                return 'fa-thin fa-bezier-curve'
            case 'head':
                return 'fa-thin fa-head-side-gear'
        }
    }

  return (
    <div className="examples">
        <i className={getIconClassName()}></i>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default WhyChooseUsBox