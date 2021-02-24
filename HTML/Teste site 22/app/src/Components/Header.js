import logo from '../Images/logo.png';

function Header( { openMenu } ) {
  return (
    <header className="barra-superior">
      <img src={logo} alt="logo" className="nav_logo"/>
    
      <ul className="nav_links">
        <li className="link">
          <a href="#.">Home</a>
        </li>
        <li className="link">
          <a href="#.">News</a>
        </li>
        <li className="link">
          <a href="#.">Explore</a>
        </li>
        <li className="link">
          <a href="#.">About Us</a>
        </li>
        <li className="link">
          <a href="#.">Contact Us</a>
        </li>
      </ul>

      <button className="nav_login">Login</button>

      <div className="menu-icon" onClick={openMenu}>
        <div className="linha"></div>
        <div className="linha"></div>
        <div className="linha"></div>
      </div>
    </header>
  )
}

export default Header;