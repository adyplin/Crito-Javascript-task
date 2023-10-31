import React from 'react'
import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'
import TeamMemberBox from './Generics/TeamMemberBox'
import img_Kristine from '../assets/images/Kristine.svg'
import img_Mark from '../assets/images/Mark.svg'
import img_Kimberly from '../assets/images/Kimberly.svg'
import img_Justin from '../assets/images/Justin.svg'
import ReviewBox from './Generics/ReviewBox'
import img_Cassandra from '../assets/images/Cassandra.png'
import img_Amanda from '../assets/images/Amanda.png'
import img_Jack from '../assets/images/Jack.png'

const TeamMembers = () => {
  return (
    <section className="team-members">
        <div className="container">
            <div className="headline">
                <SectionTitle title="Meet Our Team" description="Experience Team Members"/>
                <Button type="browse" title="Browse Team" url="/services" />
            </div>
            <div className="images">
                <TeamMemberBox img={img_Kristine} title="Kristine Palmer" description="Chief operation Officer" />
                <TeamMemberBox img={img_Mark} title="Mark Aubri" description="Senior Consultant" />
                <TeamMemberBox img={img_Kimberly} title="Kimberly Hansen" description="Senior Consultant" />
                <TeamMemberBox img={img_Justin} title="Justin Willoman" description="Senior Tech Consultant" />
            </div>
            <div className="dots">
                <span className="dot"></span>
                <span className="active-dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
        <div className="bg-employees">
            <div className="content-box">
                <SectionTitle title="Testimonial" description="What Our Client Says"/>
                <div className="employees container">
                    <ReviewBox img={img_Cassandra} title="Cassandra Warren" description="Business Manager, Dorfus" />
                    <ReviewBox img={img_Amanda} title="Amanda Tulling" description="Senior Developer, Square" />
                    <ReviewBox img={img_Jack} title="Jack McDogglas" description="Key Account Manager, Gobona" />
                </div>
                <Button type="black" title="All Reviews" url="/services"/>
            </div>
        </div>
    </section>
  )
}

export default TeamMembers