import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/products" element={ <Products /> }/>
          <Route path="/products/:id" element={ <Product /> }/>
          <Route path="/cart" element={ <Cart /> }/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
