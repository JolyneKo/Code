import logo from '../images/logo/logo.png';
import { FiSettings } from 'react-icons/fi';
import Pesquisar from './Pesquisar';

function Header({ abrirMenu }) {
  return (
    <header className="barra-superior">
      <img src={logo} alt="logo" className="superior_logo"/>
      <Pesquisar/>
      <FiSettings className="superior_settings_icon" onClick={abrirMenu}/>
    </header>
  )
}

export default Header
