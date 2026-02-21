import { useState } from 'react'
import './App.css'

function App() {
  const [isHighlighted, setIsHighlighted] = useState(false)
  const handleClick = () => {
    setIsHighlighted(!isHighlighted)
  }


  return (
    <>
      <div className="App">
        <h2>Declarative Toggle with React</h2>
        <button onClick={handleClick}>Toggle Highlight</button>
        <p className={isHighlighted ? 'highlight' : ''}>click the button to highlight this text or to remove the highlight</p>
      </div>
    </>
  )
}

export default App
