import React from 'react';
import './admin.css';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';


export default function Admin() {
    return (
        <div>
        
            <div className="admincon">
           
            
            <Sidebar title="home"/>
            <Home/>

            </div>
       
            
    
  
            
        </div>
    )
}
