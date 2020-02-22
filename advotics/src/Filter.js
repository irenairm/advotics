import React from 'react';
import calendar from './calendar@2x.png';
import arrow from './down-arrow.png';
import './App.css';

class Filter extends React.Component {
    state = {show : true};
    render(){
        const {show } = this.state;
        return (
           <div className = "filter">
                        <img src={calendar} className="calendar-icon"/>
                        <p className="period-title">Period</p>
                        <p className="period">11 September 2018 - 14 September 2018</p>
                        <img src={arrow} className="arrow-down" onClick={() => this.setState({show:!show})} />
                        {show
                        ?<div className="filter-date-picker"> 
                            "Hello"
                        </div>
                        : null
                        }
           </div>
        );
        }
}

export default Filter;
