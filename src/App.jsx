
//https://github.com/santicasalis/casalis-coder-react.git


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Container/ItemDetailContainer';
import { Card } from './components/Card/Card';
import { InputCount } from './components/InputCount/InputCount';






function App() {
  

  return (
  <BrowserRouter>
    <div className='App'>

        <header >
           <NavBar/>
        </header>
       
      <main>
   
      <Routes>
       <Route  path="/"  element={<ItemListContainer/>}   />
       <Route path="/categoria/:id" element={<ItemListContainer/>}/>
       <Route  path="/detalle/:detalleId"  element={ <ItemDetailContainer/>}   />
       <Route  path="/card" element={ <Card/>} />

        
  
  
       <Route  path="/*"  element={ <Navigate to= '/' />}   /> 

       </Routes>
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