import logo from '../Images/logo.png';

function Header() {
  return (
    <header className="navbar">
      <img src={logo} alt="logo"/>
      <nav className="navigation">
          <ul className="links">
            <li className="links"><a href="#.">Home</a></li>
            <li className="links"><a href="#.">News</a></li>
            <li className="links"><a href="#.">Contacts</a></li>
            <li className="links"><a href="#.">Support</a></li>
            <li className="links"><a href="#.">About Us</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header;