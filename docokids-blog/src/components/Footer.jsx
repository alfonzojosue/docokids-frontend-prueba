import React from 'react'
import '../styles/Footer.scss'

const Footer = () => {
  return (
   <footer className="Container-footer">
  <section className="section-Footer">
    <h2>Encuéntranos en </h2>
    <span /><p>info@docokids.com</p>
    <ul>
      <li><img  alt='insta'  /></li>
      <li><img   alt='facebook'  /></li>
      <li><img   alt='twitter'  /></li>
      <li><img   alt='Github'  /></li>
      <li><img  alt='Email' /></li>
    </ul>
  </section>
  <section className="section-Footer">
    <h2>Acesso Rápido</h2>
    <ul>
      <li><a href='/'>  Preguntas frecuentes</a></li>
      <li><a href='/'>  Otros servicios</a></li>
      <li><a href='/'>  Término y condiciones</a></li>
      <li><a href='/'>  Política de datos</a></li>
    </ul>
  </section>
  <section className="section-Footer">
    <h2>Newsletter</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deleniti veniam, distinctio aliquid aperiam</p>
    <div className="input-checkbox"><input type="checkbox" /><p>He leido y acepto las políticas de uso de datos.</p></div>
    <div className="container-email">
      <input type="text" className="input-email" /> <img  alt="sobre" />
    </div>
  </section>
</footer>

  )
}

export default Footer