import { useState } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './CSS/Menu.css';
import './CSS/Header.css';
import './CSS/Main.css';
import './CSS/Footer.css';

function App() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(() => false);
  
  function openMenu() {
    setIsMenuOpen((prevValue) => !prevValue);
    const menu = document.querySelector('.menu');
    menu.style.height = (!isMenuOpen) ? '100%' : '0';
  }

  return (
    <>
      <Header openMenu={openMenu}/>
      <Menu/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App;