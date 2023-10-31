import React from 'react'
import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'
import img_GirlAtTable from '../assets/images/girl-and-table.png'
import img_Documents from '../assets/images/files.png'
import img_Books from '../assets/images/books.png'
import ArticleAndNewsBox from './Generics/ArticleAndNewsBox'

const ArticleAndNews = () => {
  return (
    <section className="article-and-news">
        <div className="container">
            <div className="headline">
                <SectionTitle title="Article & News" description="Get Every Single Articles & News" />
                <Button type="transparent" title="Browse Articles" url="/services" /> 
            </div>
            <div className="content container">
                <ArticleAndNewsBox date="25" month="mar" img={img_GirlAtTable} title="Business" text="How To Use Digitalization In The Classroom" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
                <ArticleAndNewsBox date="17" month="mar" img={img_Documents} title="Business" text="How To Implement Chat GPT In Your Projects" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
                <ArticleAndNewsBox date="13" month="mar" img={img_Books} title="Business" text="The Guide To Support Modern CSS Design" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
            </div>
            <div className="dots">
                <span className="active-dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    </section>
  )
}

export default ArticleAndNews