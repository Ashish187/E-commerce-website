import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <main className="App">
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/products/:id" element={<ProductPage/>} />
      <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </main>
    </Router>
    </>
    
  );
}

export default App;
