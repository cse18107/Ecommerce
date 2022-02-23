import React, { Fragment } from 'react';
import './Home.css';
import Product from './Product.js';

const product = {
    name:"Blue Tshirt",
    images:[{url: "https://m.media-amazon.com/images/I/81XUSO4a8WL._UY445_.jpg"}],
    price:'$3000',
    _id:"saikat"
}

const Home = () => {
  return (
    <Fragment>
        <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href='#container'>
                <button>Scroll</button>
            </a>
        </div>
        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container">
            <Product product={product}/>
        </div>
    </Fragment>
  )
}

export default Home