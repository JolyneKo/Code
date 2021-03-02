
function Produtos({ produtos, onSelect}) {
  return (
    <ul className="produtos">
      {produtos.map((produto, index) => <li onDoubleClick={onSelect} key={index + 1}>{produto}</li>)}
    </ul>
  )
}

export default Produtos;