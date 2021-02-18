import React from 'react';
import BarraSuperior from './Components/BarraSuperior';
import Main from './Components/Main';
import Relacionados from './Components/Relacionados';
import Footer from './Components/Footer';

import './SCSS/BarraSuperior.scss';
import './SCSS/Main.scss';
import './SCSS/Relacionados.scss';
import './SCSS/Footer.scss';


function App() {
  return (
    <div className="container">
      <BarraSuperior/>
      <Main/>
      <Relacionados/>
      <Footer/>
    </div>
  );
}

export default App;