import React from 'react';
import more from './icon-more.svg';
import sales from './SalesTurnover.svg';
import arrow from './DownArrow.svg';
import './App.css';

class Turnover extends React.Component {
    render(){
        return (
           <div className = "sales-turnover">
                    <span className="sales-turnover-toggle">
                        <p className = "sales-turnover-title">Sales Turnover</p>
                        <p className = "sales-turnover-sale">Rp 3,600,000</p>
                        <img src={more} className="more-icon"/>
                        <img src={arrow} className="red-arrow-icon"/>
                        <p className = "sales-turnover-desc">
                            <span className="sales-turnover-percentage">13.8% </span>
                            last period in products sold
                        </p>
                        
                        <img src={sales} className="sales-icon"/>
                    </span>
           </div>
        );
        }
}

export default Turnover;
