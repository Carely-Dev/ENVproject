import React from 'react';
import NavBar from './components/NavBar.js' ; 
import Slide from './components/Example.js';
import Info from './components/info.js';
import Foundation from './components/body/foundation.js';
const PageHome = () => { 
    return (
        <div>
            <NavBar/>
            <Slide/>
            <Info/>
            <Foundation/>
        </div>
    )
    
}
export default PageHome;