import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <h2>Counter App</h2>
        <div>
          <span>
            {count}
          </span>
        </div>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
        <button>
          Reset
        </button>
      </div>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

export default App
