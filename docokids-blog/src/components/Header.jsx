import React from 'react'
import '../styles/Header.scss'

const Header = () => {
  return (
  <nav className="NavBar">
  <img src="https://docokids-test.herokuapp.com/static/img/logo.png" alt="Logo-Img" className="Logo-Nav" />
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/">¿Cócomo funciona?</a></li>
    <li><a href="/">Planes</a></li>
    <li><a href="/">Nosotros</a></li>
    <li><a href="/">Blog</a></li>
  </ul>
  <a href='/'><span>Inicia sesión</span></a>
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz8+WlpZLS0v7+/vu7u5vb29TU1PDw8Pz8/N8fHyCgoITExMzMzOsrKyPj4+6urrU1NTo6Oizs7NCQkJkZGQoKCilpaUtLS05OTmenp7IyMiFhYVaWlpqamoLCwt+baPtAAACfUlEQVR4nO3di27CMAyF4TBWoAxYx2UX2Abv/5RbpSE2aXLSJpJl5/+ewEdQSlLXCQEAAAAAAAAAAAAAAAAA/Fu2H5/3dnyu2uWgfLv5xJ75Ljlf02kXO1LXpAWcHbQrHe0wSwm4XGvXmWGdcDU2G+0qs2ziX9SVdo2ZVrGAW+0Ks20jCZ+1C8z2LAecaddXgPx7+qhdXgGPYsKzdnkFnMWEL9rlFfAiJrxol1eCmFC7uCLEhJb/sV2txYT32uUVcBATWl03/daJCd+1yyvgXUzo4Mf0IgcMr9oFZnuNJGzetCvM9BZdIFq/EiNXof3v6SkeMISpdpUZpikBQ3jSrnO0p7SA3+tgixvCk8k8aS/xx2561K53oGOXvuV9Dbm9s2M7OB4AAAAAAAAAALBj2Z6mdpwGvm4Rmv1C+1nSYIt94rsIvdZmN/umTQ34oF3qaA9pAe19QW8WKQFtPuG+mscDWu/0lru8g4dm/Vi7gvVXZqIvzTTa9RUg3xbtNgvdyG1Ddm+FN/JN0Vqf0H82YkL7LcKxJmHt6oqo/DO0uaj46ygm9P9b6v9+6P8/jf//pRWsLfyvDytY41ewT2P5ppi411bBfmkFe949588tAAAAAAAAAACAJc7nRO06aw/Yhs36mtkcen1Onte21y51tMSZe+7nJp60q8ySMPvS/fzSxvrc+egMWtvzWXuxOcLa9RXg+yrsyVei/5nsdg+zupHn6vs/G0G7uiIqT2j9ft+Tz5mxuWz6Sz4ryHqXd0/u9Lbfqh9t1nd/7loFZ+eZf2kmev5hBWdY+j+HtIKzZCs4Dzj4P9O5Z+1c7g9euAAAAAAAAAAAAAAAAABQhS+ZyFZoP93BCgAAAABJRU5ErkJggg==" alt="Icon-Menu" className="Icon-Menu" />
</nav>

  )
}

export default Header