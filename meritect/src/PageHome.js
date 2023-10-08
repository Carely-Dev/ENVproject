import React from 'react';
import NavBar from './components/NavBar.js' ; 
import Slide from './components/Example.js';
import Info from './components/info.js';
import Foundation from './components/body/foundation.js';
import  { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
const PageHome = () => { 
    const [loading, setLoading] = useState(false);
    useEffect(() => { 
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
    return (
        <div>
            {loading ? (
                <BeatLoader className="page" color="#318CE7" size={50} />
            ) : (
                <div>
            <NavBar/>
            <Slide/>
            <Info/>
            <Foundation/>
            
        </div>
            )}
        </div>
        
    )
    
}
export default PageHome;