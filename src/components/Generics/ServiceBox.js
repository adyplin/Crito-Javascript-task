import React from 'react';

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="services">
    <hr />
        <h6>{title}</h6>
        <p>{description}</p>
        <a className="btn-black-next" href={url}><i className="fa-regular fa-arrow-right"></i></a>
        </div>
  )
}

export default ServiceBox