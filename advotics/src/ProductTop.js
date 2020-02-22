import React from 'react';
import prod from './NoPath.png';
import './App.css';


class ProductTop extends React.Component {
    render(){
        return (
           <span className = "product-label-top">
                    <img src={prod} className="prod-picture-top"/>
                    <p className = "product-name-top">[Nama Product]</p>
                    <span className="prod-desc-top">
                        <p className = "product-price-top">Rp XXXX</p>
                        <p className = "product-quantity-top">[jml terjual]</p>       
                    </span>      
           </span>
        );
        }
}

export default ProductTop;
