import React from 'react'
import FooterElement from '../../assets/images/footer-element.svg'
import WhiteCrito from '../../assets/images/LogoWhite.svg'
import FooterBox from '../Generics/FooterBox'

const Footer = () => {
  return (
    <footer>
        <img className="foot-element" src={FooterElement} alt="background-lines" />
        <div className="container">
            <div className="crito">
                <a className="logo" href="/"><img src={WhiteCrito} alt="crito logotype" /></a>
                <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Placeat obcaecati voluptas<br /> voluptates! Voluptates laborum nam<br /> ratione minus necessitatibus, iure<br /> praesentium.</p>
            </div>
            <div className="content-box container">
                <FooterBox headline="Company" text="About" title="Features" description="works" paragraph="Career" />
                <FooterBox headline="Help" text="Customer support" title="Delivery Details" description="Terms & Conditions" paragraph="Privacy Policy" />
                <FooterBox headline="Resources" text="Free eBooks" title="Development Tutorial" description="How to - Blog" paragraph="Youtube Playlist" />
                <FooterBox headline="Resources" text="Free eBooks" title="Development Tutorial" description="How to - Blog" paragraph="Youtube Playlist" />
            </div>
        </div>
        <div className="copyright">
            <span>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</span>
            <div className="social-media">
                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </footer>

  )
}

export default Footer