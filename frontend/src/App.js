import './App.css';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import ProductDetails from './components/Product/ProductDetails.js';
import Products from './components/Product/Products.js'
import LoginSignUp from './components/User/LoginSignUp';
import React  from 'react';
import store from './store';
import { loadUser } from './actions/userAction';
import UserOptions from "./components/layout/Header/UserOptions.js"
import { useSelector } from 'react-redux';
import Profile from "./components/User/Profile.js"
import ProtectedRoute from './components/Route/ProtectedRoute';
import  UpdateProfile  from './components/User/UpdatedProfile.js';
function App() {

  const { isAuthenticated,user } = useSelector(state=>state.user);

  React.useEffect(()=>{
    store.dispatch(loadUser());
  },[])

  return (
    <div className="App">
      <Header/>
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:keyword' element={<Products/>}/>
        
          {isAuthenticated && <Route path='/account' element={<Profile/>}/>}
          {isAuthenticated && <Route path='/me/update' element={<UpdateProfile/>}/>}
        
        <Route path='/login' element={<LoginSignUp/>}/>  
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
