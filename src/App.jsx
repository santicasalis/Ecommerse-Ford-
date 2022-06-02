
//https://github.com/santicasalis/casalis-coder-react.git


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Container/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContex';
function App() {


  return (
    <BrowserRouter>

      <CartContextProvider>
        <div className='App'>

          <header >
            <NavBar />
          </header>

          <main>

            <Routes>

              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria/:id" element={<ItemListContainer />} />
              <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />




              <Route path="/*" element={<Navigate to='/' />} />

            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </CartContextProvider>

    </BrowserRouter>

  )
}

export default App
