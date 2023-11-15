import React from 'react'
import img_NewsletterLines from '../../assets/images/SignUp-Element.svg'
import Button from '../Generics/Button'


const Newsletter = () => {
  return (
    <section className="newsletter">
        <img className ="background-lines-right" src={img_NewsletterLines} alt="background-lines"/>
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form>
                <input type="text" placeholder="username@domain.com" />
                <Button type="theme" title="Subscribe" url="/services" />
            </form>
        </div>
    </section>
  )
}

export default Newsletter