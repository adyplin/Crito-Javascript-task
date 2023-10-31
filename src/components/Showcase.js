import React from 'react'
import ShowCaseElement from '../assets/images/showcase-Element.svg'
import ShowCaseImage from '../assets/images/showcase-image.svg'
import Button from './Generics/Button'


const Showcase = () => {
  return (
    <>
     <section className="showcase">
            <img className="background-lines" src={ShowCaseElement} alt="" />
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <Button type="yellow" title="Get Consulting" url="/services" />
                    <Button type="transparent" title="Learn More" url="/services" />
                </div>
                <img src={ShowCaseImage} alt="" />
            </div>
        </section>
    </>
  )
}

export default Showcase