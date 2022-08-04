import React from 'react'
import '../styles/Card.scss'

const Card = ({data}) => {
  return (
    <>
    {data.map(obj => (
        <section className="section-Blog--Card" key={obj.id}>
        <div >
          <img src={obj.image} alt='Card-img' className="Card-img" />
          <div className="Container-Card--Text">
            <h1> {obj.title} </h1>
            <p>por</p>
            <span className="Card-img--eye" /><p>0 vistas</p>
            <p>
              {obj.intro}
            </p>
            <div className="Card-Botton">
              <a href='/'>Leer más</a>
            </div>
          </div>
        </div>
      </section>
    ))}
    </>

  )
}

export default Card