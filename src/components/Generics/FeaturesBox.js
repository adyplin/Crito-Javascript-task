import React from 'react'

const FeaturesBox = ({type, title, description}) => {

    const getIconClassName = () => {
        switch(type) {
            case 'handshake':
                return 'fa-regular fa-handshake'
            case 'lightbulb':
                return 'fa-regular fa-lightbulb-on'
            case 'finance':
                return 'fa-light fa-chart-mixed-up-circle-dollar'
            case 'parachute':
                return 'fa-light fa-parachute-box'
        }
    }

  return (
    <div className="side">
        <i className={getIconClassName()}></i>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default FeaturesBox