import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <main className="App">
      <Routes>
      <Route exact path="/" element={<Home/>} />
      </Routes>
    </main>
    </Router>
    </>
    
  );
}

export default App;
