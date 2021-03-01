import { useState } from 'react';

function Item({ produto, setProduto }) {
  const [quantidade, setQuantidade] = useState(1);

  const handleIncrement = () =>{
    setQuantidade(prevValue => ++prevValue)
  }

  const handleDecrement = () => {
    setQuantidade(prevValue => (prevValue > 0) ? --prevValue : 0)
  }
  
  const handleDelete = () => {
    console.log(produto);
    setProduto(prevValue => {
      const resultado = prevValue.filter(value => value !== produto);
      return [...resultado];
    })
  }

  return (
    <li className="item">
      <div className="info_produto" onDoubleClick={handleDelete}>
        <span>{quantidade}</span> 
        <span>{produto}</span>
      </div>


      <div className="buttons">
        <button className="btn_increment" onClick={handleIncrement}>+</button>
        <button className="btn_decrement" onClick={handleDecrement}>-</button>
      </div>
    </li>
  )
}

export default Item;