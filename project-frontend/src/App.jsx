import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const cheie_api = 'cheie';
  return (
    <>
      Cheie API: {cheie_api}
    </>
  )
}

export default App
