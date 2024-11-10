import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const cheie_api = import.meta.env.VITE_API_KEY;
  return (
    <>
      Cheie API: {cheie_api}
    </>
  )
}

export default App
