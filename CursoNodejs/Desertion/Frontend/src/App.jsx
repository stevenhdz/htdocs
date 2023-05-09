import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  setCount(2)

  return (
    <>
      <div>
        {count}
      </div>
    </>
  )
}

export default App
