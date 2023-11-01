import React from 'react'
import ContactInfoBox from '../Generics/ContactInfoBox'

const ContactInfo = () => {
  return (
    <section class="contact-info">
        <div class="container">
            <ContactInfoBox type="location" title="Visit us" text="Sveavägen 31" description="111 34 STOCKHOLM"/>
            <ContactInfoBox type="phone" title="Call us" text="+46 (8) 121 470 50" description="+46 (8) 121 470 51"/>
            <ContactInfoBox type="envelope" title="Email us" text="info@crito.com" description="support@crito.com"/>
        </div>
    </section>
  )
}

export default ContactInfo