import React from 'react'

const ContactInfoBox = ({type, title, text, description}) => {
  
    const getIconClassName = () => {
        switch(type) {
            case 'location':
                return 'fa-regular fa-location-dot'
            case 'phone':
                return 'fa-regular fa-phone'
            case 'envelope':
                return 'fa-regular fa-envelope'
        }
    }

  return (
    <div className="contacts">
        <i className={getIconClassName()}></i>
        <h4>{title}</h4>
        <p>{text}</p>
        <p>{description}</p>
    </div>
  )
}

export default ContactInfoBox