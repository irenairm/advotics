import React from 'react';
import prod from './NoPath.png';
import './App.css';


class Product extends React.Component {
    render(){
        return (
            <div>
                <span className = "product-label">
                    <img src={prod} className="prod-picture"/>
                    <p className = "product-name">[Nama Product]</p>
                    <span className="prod-desc">
                        <p className = "product-price">Rp XXXX</p>
                        <p className = "product-quantity">[jml terjual]</p>       
                    </span>      
                </span>
                <span className = "product-label no2">
                    <img src={prod} className="prod-picture"/>
                    <p className = "product-name">[Nama Product]</p>
                    <span className="prod-desc">
                        <p className = "product-price">Rp XXXX</p>
                        <p className = "product-quantity">[jml terjual]</p>       
                    </span>      
                </span>
                <span className = "product-label no3">
                    <img src={prod} className="prod-picture"/>
                    <p className = "product-name">[Nama Product]</p>
                    <span className="prod-desc">
                        <p className = "product-price">Rp XXXX</p>
                        <p className = "product-quantity">[jml terjual]</p>       
                    </span>      
                </span>
                <span className = "product-label no4">
                    <img src={prod} className="prod-picture"/>
                    <p className = "product-name">[Nama Product]</p>
                    <span className="prod-desc">
                        <p className = "product-price">Rp XXXX</p>
                        <p className = "product-quantity">[jml terjual]</p>       
                    </span>      
                </span>
            </div>
           
        );
        }
}

export default Product;
