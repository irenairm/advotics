import React from 'react';
import more from './icon-more.svg';
import './App.css';
import ProductTop from './ProductTop.js';
import Product from './Product.js';


class TopCompetitor extends React.Component {
    render(){
        return (
           <div className = "top-competitor">
                    <p className = "top-competitor-title">TOP COMPETITOR SKU</p>
                    <img src={more} className="more-icon top"/>
                    <ProductTop></ProductTop>
                    <Product></Product>
                    
           </div>
        );
        }
}

export default TopCompetitor;
