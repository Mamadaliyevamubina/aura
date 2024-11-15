import { useState } from 'react'
import './App.css'
import Department1 from './components/Department1'
import Department2 from './components/Department2'
import Department3 from './components/Department3'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col space-y-4'>
      <Department1/>
      <Department2/>
      <Department3/>
      
    </div>
  )
}

export default App
