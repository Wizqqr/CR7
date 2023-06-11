import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main/Main.jsx';
import { Cart } from './pages/Cart/Cart.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart'element={<Cart/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
