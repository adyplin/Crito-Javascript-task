import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Showcase from '../components/Showcase';
import Ads from '../components/Ads';
import Features from '../components/Features';
import AboutCompany from '../components/AboutCompany';
import OurServices from '../components/OurServices';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectAndCase from '../components/ProjectAndCase';
import TeamMemebers from '../components/TeamMembers';
import ArticleAndNews from '../components/ArticleAndNews';
import Newsletter from '../components/Newsletter';


const Home = () => {
  return (
    <div className="wrapper-grid">
        <Header />
        <main>
        <Showcase />
        <Ads />
        <Features />
        <AboutCompany />
        <OurServices />
        <WhyChooseUs />
        <ProjectAndCase />
        <TeamMemebers />
        <ArticleAndNews />
        <Newsletter />
        </main>
        <Footer />
    </div>
  )
}

export default Home