import React from 'react';
import '../index.css';
import Header from '../components/Homepage/Header';
import Footer from '../components/Homepage/Footer';
import Showcase from '../components/Homepage/Showcase';
import Ads from '../components/Homepage/Ads';
import Features from '../components/Homepage/Features';
import AboutCompany from '../components/Homepage/AboutCompany';
import OurServices from '../components/Homepage/OurServices';
import WhyChooseUs from '../components/Homepage/WhyChooseUs';
import ProjectAndCase from '../components/Homepage/ProjectAndCase';
import TeamMemebers from '../components/Homepage/TeamMembers';
import ArticleAndNews from '../components/Homepage/ArticleAndNews';
import Newsletter from '../components/Homepage/Newsletter';


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