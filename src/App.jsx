
//https://github.com/santicasalis/casalis-coder-react.git

import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';





function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      
   
      <header >
     
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        
      </header>
    </div>
  )
}

export default App
