import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import ProjectAndCaseBox from '../Generics/ProjectAndCaseBox'
import ArticleOne from '../../assets/images/article-image-1.png'
import ArticleTwo from '../../assets/images/article-image-2.png'
import ArticleThree from '../../assets/images/article-image-3.png'
import ArticleFour from '../../assets/images/article-image-4.png'


const ProjectAndCase = () => {
  return (
    <section className="project-and-case">
    <div className="container">
        <SectionTitle title="Project & Case Studies" description="Let's Look At Our Global Projects"/>
        <div className="project-and-cases">
            <ProjectAndCaseBox img={ArticleOne} title="Grow your business" description="Read More"/>
            <ProjectAndCaseBox img={ArticleTwo} title="Why your client needs a responsive website" description="Read More"/>
            <ProjectAndCaseBox img={ArticleThree} title="Educate your employees to get better result" description="Read More"/>
            <ProjectAndCaseBox img={ArticleFour} title="Business Insights is a important piece of your business" description="Read More"/> 
        </div>
        <div className="center-content">
            <Button type="black" title="All Recent Projects" url="/services" />
        </div>
    </div>
</section>
  )
}

export default ProjectAndCase