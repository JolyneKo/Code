import { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import MenuSettings from './Components/MenuSettings';

import './CSS/Header.css';
import './CSS/Main.css';
import './CSS/Footer.css';

function App() {
  const [isOpen, setIsOpen] = useState(() => false);

  const abrirMenu = () => {
    setIsOpen((prevValue) => {
      return prevValue ? false : true
    });
  }

  return (
    <>
      <Header abrirMenu={abrirMenu}/>
      {isOpen && <MenuSettings isOpen={isOpen}/>}
      <Main />
      <Footer />
    </>
  )
}

export default App
