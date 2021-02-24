import logo from '../Images/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo"/>
      <span>&copy; Site do João Versão 08 - 2021</span>
      
      <div className="footer_coluna">
        <h2 class="coluna_title">Company</h2>

        <ul className="footer_links">
          <li className="links">
            <a href="#">About Us</a>
          </li>
          <li className="links">
            <a href="#">Contacts</a>
          </li>
          <li className="links">
            <a href="#">Terms of Use</a>
          </li>
          <li className="links">
            <a href="#">FAQ</a>
          <li className="links">
            <a href="#">Blogs</a>
          </li>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;