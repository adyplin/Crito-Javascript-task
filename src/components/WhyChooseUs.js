import React from 'react'
import WomenWithBook from '../assets/images/women-with-book-2.png'
import WhyChooseUsBox from './Generics/WhyChooseUsBox'
import SectionTitle from './Generics/SectionTitle'

const WhyChooseUs = () => {
  return (
    <section className="choose-us">
    <div className="container">
        <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency"/>
        <WhyChooseUsBox type="thumbs" title="Process Excellence" description="Lorem ipsum, dolor sit amet consectetur."/>
        <WhyChooseUsBox type="aperture" title="Strategic Planning" description="Lorem ipsum, dolor sit amet consectetur."/>
        <WhyChooseUsBox type="bezier" title="Experience Design" description="Lorem ipsum, dolor sit amet consectetur."/>
        <WhyChooseUsBox type="head" title="Artificial Inteligence" description="Lorem ipsum, dolor sit amet consectetur."/>
    </div>
    <div className="content-box">    
        <div className="image">
            <img src={WomenWithBook} alt="two women talking" />
        </div>
        <div className="grey-box"></div>
    </div>    
</section>
  )
}

export default WhyChooseUs