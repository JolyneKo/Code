import Button from './Button';

function Header({ title }) {

  const onClick = () => {
    console.log('click');
  }

  return (
    <header>
      <h1>Task tracker</h1>
      <Button color="green" text="Add" onClick={onClick}/>
    </header>
  )
}

export default Header;
