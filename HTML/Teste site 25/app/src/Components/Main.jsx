import { useState } from 'react';
import Item from './Item';

function Main() {
  const [produtos, setProduto] = useState(() => ['Cenoura', 'Bolo', 'Batata']);
  const [novoProduto, setNovoProduto] = useState('');

  const handleAdd = () => {
    const inclui = produtos.filter(nome => nome.toLowerCase() === novoProduto.toLowerCase())


    if (novoProduto.length > 0 && inclui.length === 0 && novoProduto.match(/\S/gi) != null )
      setProduto(prevValue => [...prevValue, novoProduto]);
  }

  const handleNovoProduto = (e) => {
    setNovoProduto(e.target.value)
  }

  return (
    <main className="main">

      <h1>Lista de Compras</h1>

      <ul className="items">
        {produtos.map((produto, index) => <Item produto={produto} key={index + 1} setProduto={setProduto}/>)}
      </ul>

      <button className="btn_add" onClick={handleAdd}>Add</button>
      <input type="text" className="input_add" placeholder="nome do produto" onChange={handleNovoProduto}/>
    </main>
  )
}

export default Main;