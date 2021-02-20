import React, { useState } from 'react';
import './CSS/index.css';


function App() {
  const [count, setCount] = useState(() => 0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <span class="num">{count}</span>
      
      <div class="buttons">
        <button class="button increment" onClick={increment}> + </button>
        <button class="button decrement" onClick={decrement}> - </button>
      </div>
    </div>
  );
}

export default App;