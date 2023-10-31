import React from 'react'

const Button = ({type, url, title}) => {

    const getButtonClassName = () => {
        switch(type) {
            case 'transparent':
                return 'btn-transparent'
            case 'black':
                return 'btn-black'
            case 'next-black':
                return 'btn-black-next'
            case 'learn-more':
                return 'btn-learn-more'
            case 'browse':
                return 'btn-browse'
            case 'login':
                return 'btn-login'
            default: 
                return 'btn-theme'
                
        }
    }
  return (
    <a className={getButtonClassName()} href={url}>{title}
        <i className="fa-regular fa-arrow-up-right"></i>
    </a>

  )
}

export default Button