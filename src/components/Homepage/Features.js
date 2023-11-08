import React from 'react'
import Button from '../Generics/Button'
import FeaturesBox from '../Generics/FeaturesBox'

const Features = () => {
  return (
    <section className="features">
      <div className="container">
          <div className="section-title">
              <p>Features</p>
              <h2>Our Accounting is trusted by thousand of companies</h2>
              <Button type="learn-more" title="Learn More" url="/services" />
          </div>
          <div className="advices">
              <FeaturesBox type="handshake" title="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
              <FeaturesBox type="lightbulb" title="Startup Business" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
              <FeaturesBox type="finance" title="Financial Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
              <FeaturesBox type="parachute" title="Risk Manangement" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
          </div>
      </div>
    </section>
  )
}

export default Features