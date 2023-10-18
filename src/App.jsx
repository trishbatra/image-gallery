import { useState } from 'react'

import './App.css'
import Top from './Compnents/Top'
import SearchandImages from './Compnents/SearchandImages'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Top/>
      <hr className='border border-[#feddbf] mx-12'  />
      <SearchandImages/>
    </>
  )
}

export default App
