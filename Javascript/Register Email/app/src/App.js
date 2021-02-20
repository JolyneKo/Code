import { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import MainRegistered from './Components/MainRegistered';
import MenuSettings from './Components/MenuSettings';

import './CSS/Header.css';
import './CSS/Main.css';
import './CSS/Footer.css';

function App() {
  const [isRegistered, setIsRegistered] = useState(() => false);
  const [isOpen, setIsOpen] = useState(() => false);

  const abrirMenu = () => {
    setIsOpen((prevValue) => {
      return prevValue ? false : true
    });
  }

  const registrar = () => {
    setIsRegistered(true);
  }

  return (
    <>
      <Header abrirMenu={abrirMenu}/>
      {isOpen && <MenuSettings isOpen={isOpen}/>}
      {isRegistered ? <MainRegistered /> : <Main onRegister={registrar}/ >}
      <Footer />
    </>
  )
}

export default App
