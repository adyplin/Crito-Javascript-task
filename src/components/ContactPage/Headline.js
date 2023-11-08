import React from 'react'
import img_BackgroundLines from '../../assets/images/showcase-Element.svg'

const Headline = () => {
  return (
    <section className="contact_headline">
        <img className="background-lines" src={img_BackgroundLines} alt="" />
        <div className="title">
            <p  className="home">Home</p>
            <p className="contact">Contact</p>
            <h1 className="connect">Let's Connect</h1>
        </div>
    </section>
  )
}

export default Headline