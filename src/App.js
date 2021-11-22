import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <main className="App">
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/products/:id" element={<ProductPage/>} />
      </Routes>
    </main>
    </Router>
    </>
    
  );
}

export default App;
