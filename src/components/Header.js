import React from 'react'
import CritoLogo from '../assets/images/Logo.svg'
import Button from './Generics/Button'

const Header = () => {
  return (
    <header>
        <div className="container">
            <a href="contacts.html"><button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button></a>
            <div className="logotype">
                <a href="Home">
                <img src={CritoLogo} alt="" />
                </a>
            </div>
            <div className="contactinformation-bar">
                <div className="content-box">
                    <i className="fa-regular fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </div>
                <div  className="content-box">
                    <i className="fa-regular fa-envelope"></i>
                    Info@crito.com
                </div>
                <div  className="content-box last">
                    <i className="fa-regular fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </div>
            </div>
            <div className="socialmedia-bar">
                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="menu">
                <nav>
                    <a className="active" href="Home">Home</a>
                    <a href="services">Service</a>
                    <a href="news">News</a>
                    <a href="contacts">Contact</a>
                </nav>
                <Button type="login" title="Login" url="/services" />
            </div>
        </div>
    </header>
  )
}

export default Header