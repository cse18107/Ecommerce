import React, { Fragment, useEffect } from 'react';
import './Home.css';
import ProductCard from './ProductCard.js';
import MetaData from '../../components/layout/MetaData'
import {clearErrors, getProduct} from '../../actions/productAction';
import { useSelector,useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import {useAlert} from 'react-alert';


const Home = () => {
    const alert = useAlert();
    const dispatch =  useDispatch();
    const {loading,error,products,productsCount} = useSelector(state=>state.products )
    
    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
          }
        dispatch(getProduct());
    },[dispatch,alert, error]);


  return (
    <Fragment>
        <MetaData title="ECOMMERCE"/>
        <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href='#homeHeading'>
                <button>Scroll</button>
            </a>
        </div>
        <h2 className="homeHeading" id="homeHeading">Featured Products</h2>
        <div className="container" id="container">
            {loading && <Loader/>}
            {!loading && products && products.map(product=>{
                return (<ProductCard product={product}/>);
            })}
            
        </div>
    </Fragment>
  )
}

export default Home