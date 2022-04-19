import './App.css';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import ProductDetails from './components/Product/ProductDetails.js';
import Products from './components/Product/Products.js'
import LoginSignUp from './components/User/LoginSignUp';
import React,{useState}  from 'react';
import store from './store';
import { loadUser } from './actions/userAction';
import UserOptions from "./components/layout/Header/UserOptions.js"
import { useSelector } from 'react-redux';
import Profile from "./components/User/Profile.js"
import  UpdateProfile  from './components/User/UpdatedProfile.js';
import  UpdatePassword  from './components/User/UpdatedPassword.js';
import  ForgotPassword  from './components/User/ForgotPassword.js';
import  ResetPassword  from './components/User/ResetPassword.js';
import  Cart  from './components/Cart/Cart.js';
import  Shipping  from './components/Cart/Shipping.js';
import  ConfirmOrder  from './components/Cart/ConfirmOrder.js';
import  Payment  from './components/Cart/Payment.js';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

function App() {

  const { isAuthenticated,user } = useSelector(state=>state.user);

  const [ stripeApiKey, setStripeApiKey ] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    console.log(data);
    setStripeApiKey(data.stripeApiKey)
  }

  React.useEffect(()=>{
    store.dispatch(loadUser());
    getStripeApiKey();
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
          {isAuthenticated && <Route path='/password/update' element={<UpdatePassword/>}/>}
          {isAuthenticated && <Route path='/shipping' element={<Shipping/>}/>}
          {isAuthenticated && <Route path='/order/confirm' element={<ConfirmOrder/>}/>}
          
          {isAuthenticated && <Route path='/process/payment' element={<Elements stripe={loadStripe(stripeApiKey)}><Payment/></Elements>}/>}
          
          <Route path='/password/forgot' element={<ForgotPassword/>}/>
          <Route path='/password/reset/:token' element={<ResetPassword/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        
        <Route path='/login' element={<LoginSignUp/>}/>  
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
