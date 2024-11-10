import { useState } from 'react';

function App() {
  
  const apiKey = import.meta.env.VITE_API_KEY; 

  return (
    <>
      <div>Hello world</div>
      <div>API Key: {apiKey}</div>
    </>
  );
}

export default App;
