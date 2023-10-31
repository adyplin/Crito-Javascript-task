import React from 'react'
import Paperz from '../assets/images/paperz.png'
import Dorfuz from '../assets/images/dorfus.png'
import Martino from '../assets/images/martino.png'
import Square from '../assets/images/square.png'
import Gobona from '../assets/images/gobona.png'

const ads = () => {
  return (
    <section className="ads">
        <div className="container">
            <img src={Paperz} alt="Paperz logo" />
            <img src={Dorfuz} alt="Dorfus logo"  />
            <img src={Martino} alt="Martino logo" />
            <img src={Square}alt="Square logo" />
            <img src={Gobona} alt="Gobona logo" />
        </div>
    </section>
  )
}

export default ads