import React from 'react';
import './App.css';
import Header from './Header.js';
import SideNav from './SideNav.js';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <p className="title">Dashboard</p>
      </div>
     

  
    );
  }
  }

export default App;
