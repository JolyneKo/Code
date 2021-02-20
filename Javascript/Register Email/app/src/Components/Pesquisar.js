import { useState } from 'react';

function Pesquisar() {
  const [resultado, setResultado] = useState(() => "");

  const pesquisar = () => {
    if (resultado !== '') {
      const resultadosPesquisa = resultado.split(' ').join('+');
      const url = `https://google.com/search?q=${resultadosPesquisa}`;
      window.open(url, '_blank');
    }
  }

  const onChange = (event) => {
    setResultado(event.target.value);
  }

  return (
    <div className="Pesquisar">
      <input type="search" className="barraPesquisa" placeholder="Search" onChange={onChange}/>
      <button className="Pesquisar_btn" onClick={pesquisar}>Pesquisar</button>
    </div>
  )
}

export default Pesquisar
