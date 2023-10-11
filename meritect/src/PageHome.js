import React from 'react';
import NavBar from './components/NavBar.js' ; 
import Slide from './components/Example.js';
import Info from './components/info.js';
import Foundation from './components/body/foundation.js';
import Footer from "./components/body/Footer.js";
import  { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
const PageHome = () => { 
    const [loading, setLoading] = useState(false);
    useEffect(() => { 
        window.scrollTo(0, 0);
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
            <Footer/>
        </div>
            )}
        </div>
        
    )
    
}
export default PageHome;