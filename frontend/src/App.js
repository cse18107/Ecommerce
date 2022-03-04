import './App.css';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import ProductDetails from './components/Product/ProductDetails.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
