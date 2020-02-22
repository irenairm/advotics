import React from 'react';
import help from './Help@2x.png';
import arrow from './up-arrow.svg';
import './App.css';
import Turnover from './Turnover.js';
import AveragePurchase from './AveragePurchase';
import BestSelling from './BestSelling';
import TopCompetitor from './TopCompetitor';

class Insights extends React.Component {
    state = {show : true};
    render(){
        const {show } = this.state;
        return (
           <div className = "market-insights">
                    <p className = "market-insights-title">MARKET INSIGHTS</p>
                    <span className="help-toggle">
                        <img src={help} className="help-icon"/>
                        <a className="help" href="#">Click Here for Help</a>
                        <img src={arrow} className={show ? "arrow-up" : "arr-down"} onClick={() => this.setState({show:!show})}/>
                    </span>
                    {show
                    ?<div> 
                         <Turnover></Turnover>
                        <AveragePurchase></AveragePurchase>
                        <BestSelling></BestSelling>
                        <TopCompetitor></TopCompetitor>
                    </div>
                    : null
                    }
           </div>
        );
        }
}

export default Insights;
