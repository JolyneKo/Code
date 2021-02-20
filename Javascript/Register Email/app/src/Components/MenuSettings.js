function MenuSettings({ isOpen }) {
  return (
    <div className={`container_settings ${isOpen ? 'settings_open' : ''}`}>
      <ul>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">Blah</a>
        </li>
        <li>
          <a href="#">Blah</a>
        </li>
        <li>
          <a href="#">Blah</a>
        </li>
      </ul>
    </div>
  )
}

export default MenuSettings
