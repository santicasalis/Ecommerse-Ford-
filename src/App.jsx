
//https://github.com/santicasalis/casalis-coder-react.git

import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { ItemCount } from './components/ItemCount/ItemCount';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { Footer } from './components/Footer/Footer';





function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <header >
     <NavBar/>
    </header>
    
  <main>
  <section> 
  <ItemListContainer/>
  </section>

  </main>
  
      <Footer/>
    </div>
  )
}

export default App
/* <button type="button" onClick={() => setCount((count) => count + 1)}>
count is: {count}
</button>
*/