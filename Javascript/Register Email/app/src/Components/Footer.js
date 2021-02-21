import logo from '../images/logo/logo.png';

function Footer() {
  return (
    <footer className="Footer">
      <div className="coluna">
        <h2>Alguma coisa</h2>
        <ul>
          <li>Blah</li>
          <li>Blah</li>
          <li>Blah</li>
          <li>Blah</li>
          <li>Blah</li>
        </ul>
      </div>
      <div className="coluna">
        <h2>Alguma coisa</h2>
        <ul>
          <li>Blah</li>
          <li>Blah</li>
          <li>Blah</li>
          <li>Blah</li>
          <li>Blah</li>
        </ul>
      </div>
      <div className="coluna">
        <h2>Alguma coisa</h2>
        <ul>
          <li>Blah</li>
          <li>Blah</li>
          <li>Blah</li>
          <li>Blah</li>
          <li>Blah</li>
        </ul>
      </div>
      
      <div className="colunaFinal">
        <img src={logo} alt="logo"/>
        <p class="footer_copy">&copy; Site do João - 2021</p>
      </div>
    </footer>
  )
}

export default Footer
