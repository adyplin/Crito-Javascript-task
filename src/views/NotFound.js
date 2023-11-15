import React from 'react'
import Header from '../components/Homepage/Header'
import ErrorPage from '../assets/images/ErrorPage.png'
import { Link } from 'react-router-dom'



const NotFound = () => {
  return (
    <div className="wrapper-grid">
    <Header />
    <main>
        <section className="page_404">
            <div className="container">	
                <div className="box_404">
                    <div className="image-content">
                    <h1>404</h1>
                    <h3>Page Not Found</h3>
                    <img className="ErrorPage" src={ErrorPage} alt="404 Error" />
                    </div>
                    <div className="content_box_404">
                        <p>The page you're looking for is not available!</p>
                        <Link to="/" className="btn-theme" >Back to home <i className="fa-regular fa-arrow-up-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
  )
}

export default NotFound