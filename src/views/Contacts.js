import React from 'react'
import Header from '../components/Homepage/Header';
import Footer from '../components/Homepage/Footer';
import '../contacts.css';
import Headline from '../components/ContactPage/Headline';
import ContactInfo from '../components/ContactPage/ContactInfo';
import ContactUs from '../components/ContactPage/ContactUs';
import LocateUs from '../components/ContactPage/LocateUs';


const Contacts = () => {
  return (
    <>
      <Header />
      <main>
      <Headline />
      <ContactInfo />
      <ContactUs />
      <LocateUs />
      </main>
      <Footer />
    </>
  )
}

export default Contacts