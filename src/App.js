import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CheckOut from './components/CheckOut';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextComponent from './CartContextComponent';

export default function App() {
  return (
    <>
      <CartContextComponent>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextComponent>
    </>
  );
}
