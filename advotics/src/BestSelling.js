import React from 'react';
import more from './icon-more.svg';
import './App.css';
import ProductTop from './ProductTop.js';
import Product from './Product.js';


class BestSelling extends React.Component {
    render(){
        return (
           <div className = "best-selling">
                    <p className = "best-selling-title">BEST SELLING SKU</p>
                    <img src={more} className="more-icon best"/>
                    <ProductTop></ProductTop>
                    <Product></Product>
                    
           </div>
        );
        }
}

export default BestSelling;
