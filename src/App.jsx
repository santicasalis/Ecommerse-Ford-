
//https://github.com/santicasalis/casalis-coder-react.git

import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { ItemCount } from './components/ItemCount/ItemCount';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { Footer } from './components/Footer/Footer';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Detalle } from './components/ItemDetail/Detalle';
import DetalleContainer from './components/Container/DetalleContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="App">
    <header >
     <NavBar/>
    </header>
    
  <main>
  <section> 
  <ItemListContainer/>
  </section>

<DetalleContainer/>



  


  </main>
  
  
  <footer>
      <Footer/>
  </footer>
    </div>
    </BrowserRouter>
  )
}

export default App
/* <button type="button" onClick={() => setCount((count) => count + 1)}>
count is: {count}
</button>
*/