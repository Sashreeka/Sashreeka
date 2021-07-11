import React from 'react';
import './admin.css';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';


export default function Admin() {
    return (
        <div>
            <div className="admincon">
            <Sidebar/>
            <Home/>

            </div>
       
            
    
  
            
        </div>
    )
}
