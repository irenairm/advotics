import React from 'react';
import './App.css';
import Header from './Header.js';
import SideNav from './SideNav.js';
import Filter from './Filter.js';
import Insights from './Insights.js';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <div className="body">
          <p className="title">Dashboard</p>
          <Filter></Filter>
          <Insights></Insights>
        </div>
      </div>
     

  
    );
  }
  }

export default App;
