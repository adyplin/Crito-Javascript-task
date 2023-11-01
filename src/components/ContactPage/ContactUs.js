import React from 'react'
import Button from '../Generics/Button'

const ContactUs = () => {
  return (
    <section className="contact-us">
        <div className="container">
            <div className="message">
                <h2>Leave us a message<br /> for any information.</h2>
                <form>
                    <input type="text" name="username" id="username" placeholder="Name*" />
                    <input type="email" name="user_email" id="user_email" placeholder="Email*" />
                    <textarea name="message" id="message" placeholder="Your Message*"></textarea>
                    <Button type="theme" title="Send Message" url="/services"/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactUs