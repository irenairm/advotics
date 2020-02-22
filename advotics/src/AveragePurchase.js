import React from 'react';
import Select, {components} from 'react-select';
import more from './icon-more.svg';
import arrow from './down-arrow.png';
import './App.css';

const options = [{value: 'last-6m', label: 'Last 6 months'},]
const DropdownIndicator = (
    props
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <img className='arrow-down-dropdown' src={arrow}/>
      </components.DropdownIndicator>
    );
  };
class AveragePurchase extends React.Component {
    render(){
        return (
           <div className = "average-purchase">
                    <p className = "average-purchase-title">AVERAGE PURCHASE VALUE</p>
                    <Select className="select" value={options} options={options} components= {{DropdownIndicator, IndicatorSeparator: () => null}}>
                        
                    </Select>
                    <img src={more} className="more-icon average"/>
                    
                    
                
           </div>
        );
        }
}

export default AveragePurchase;
