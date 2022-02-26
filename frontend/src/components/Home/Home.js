import React, { Fragment, useEffect } from 'react';
import './Home.css';
import Product from './Product.js';
import MetaData from '../../components/layout/MetaData'
import {getProduct} from '../../actions/productAction';
import { useSelector,useDispatch } from 'react-redux';


// const products =[ {
//     name:"Blue T-shirt",
//     images:[{url: "https://m.media-amazon.com/images/I/81XUSO4a8WL._UY445_.jpg"}],
//     price:'$3000',
//     _id:"saikat"
// }]

const Home = () => {

    const dispatch =  useDispatch();
    const {loading,error,products,productsCount} = useSelector(state=>state.products )
    // const data = useSelector(state=>state.products)
    // console.log(data)
    useEffect(()=>{
        dispatch(getProduct());
        // getProduct(dispatch);
    },[dispatch]);


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
            {products.map(product=>{
                return (<Product product={product}/>);
            })}
            
        </div>
    </Fragment>
  )
}

export default Home