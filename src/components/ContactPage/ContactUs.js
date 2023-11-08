import React, { useState } from 'react'


const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState (false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const user ={name, email, message}
    const json = JSON.stringify(user)

    const result = await fetch(
      'https://win23-assignment.azurewebsites.net/api/contactform',
      {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: json,
      }
    )

    if(result.status === 200) {
      setFormSubmitted(true)
      alert ('Allt gick bra, tack för ditt meddelande')
    } else if (result.status === 400) {
      alert ('Något gick fel');
    }

    if (!name || !email || !message) {
      setErrorMessage('*Vänligen fyll i samtliga fält')
      return
    }
  }
  
  return (
    <section className="contact-us">
        <div className="container">
          <div className="message">
            <div className="title">
                <h2>Leave us a message<br /> for any information.</h2>
            </div>
            {formSubmitted ? (
              <p className="success">Meddelandet har skickats <br /> Vi återkommer så snabbt vi kan</p>
            ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p className="errorMessage">{errorMessage}</p>
              <div className="input-group">
                <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} placeholder="Name*" required />
              </div>
              <div className="input-group">
                <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email*" required/>
              </div>
                <div className="input-group">
                  <textarea rows="6" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message*" required></textarea>
                </div>
                <button className="btn-theme" onClick={handleSubmit}>Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
            </form>
            )}
          </div>
        </div>
    </section>
  ) 
}

export default ContactUs