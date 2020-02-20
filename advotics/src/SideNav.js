import React from 'react';
import menu from './menu.png';
import icon from './icon.svg';
import './App.css';

class SideNav extends React.Component {
    render(){
        return (
           <div className="side-navbar">
                <div className = "menu"><img src={menu}/></div>
                <div className = "icon-background">
                    <div className ="rectangle"> <img className="icon" src={icon}/></div>
                </div>
           </div>
        );
        }
}

export default SideNav;
