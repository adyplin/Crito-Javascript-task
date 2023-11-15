import React from 'react'
import WavyLines from '../../assets/images/Services-Element.svg'
import SectionTitle from '../Generics/SectionTitle'
import ServiceBox from '../Generics/ServiceBox'
import Button from '../Generics/Button'

const OurServices = () => {
  return (
    <section className="our-service">
    <div className="container">
        <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting"/>
        <div className="examples">
            <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services"/>
            <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services"/>
            <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services"/>
            <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services"/>
        </div>
        <div className="center-content">
        <Button type="transparent" title="Browse Services" url="/services" />
        </div>
    </div>
    <img className="wavy-lines" src={WavyLines} alt="background-lines" />
</section>
  )
}

export default OurServices