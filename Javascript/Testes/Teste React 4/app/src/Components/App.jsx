import { useState } from 'react';
import Produtos from './Produtos';
import ButtonDelete from './ButtonDelete';

function App() {
  const [produtos, setProdutos] = useState(['Batata', 'Cenoura']);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleSelect = (e) => {
    setSelectedProduct(e.target.innerText);
  }

  const handleDelete = () => {
    if (selectedProduct.length > 0) {
      setProdutos(() => produtos.filter(produto => produto !== selectedProduct))
    }
  }

  return (
    <>
      <ButtonDelete onDelete={handleDelete}/>
      <Produtos produtos={produtos} onSelect={handleSelect}/>
    </>
  )
}

export default App;