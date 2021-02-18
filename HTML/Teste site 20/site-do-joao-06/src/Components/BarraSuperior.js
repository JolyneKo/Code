import React from 'react';
import logo1 from '../images/logo.png';
import logo2 from '../images/logo2.png'

function BarraSuperior() {
  return (
    <header className="BarraSuperior">
      <img src={logo1} alt="logo" className="logo" />
      <i className="fas fa-sun iconSuperior" onClick={ligarLightTheme}></i>
      <nav>
        <ul className="links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function ligarLightTheme() {
  const barra = document.querySelector('.BarraSuperior');
  const logo = document.querySelector('.logo');
  const main = document.querySelector('.container');

  barra.classList.toggle('light');
  main.classList.toggle('lightMain');

  if (barra.classList.contains('light'))
    logo.setAttribute('src', logo2)
  else
    logo.setAttribute('src', logo1);
}

export default BarraSuperior;