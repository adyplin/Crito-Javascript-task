import React from 'react'
import Header from '../components/Homepage/Header'
import Footer from '../components/Homepage/Footer'
import Button from '../components/Generics/Button'


const NotFound = () => {
  return (
    <div className="wrapper-grid">
    <Header />
    <main>
        <section className="page_404">
            <div className="container">
                <div className="row">	
                    <div className="box_404">
                        <div className="image-content">
                        <h1>404</h1>
                        </div>
                        <div className="content_box_404">
                            <h3 className="h2">Looks like you're lost</h3>
                            <p>The page you're looking for is not available!</p>
                            <Button type="theme" title="Back to home" url="/" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
    </div>
  )
}

export default NotFound