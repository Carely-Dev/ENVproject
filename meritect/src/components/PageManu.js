import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import ManuPage from "./body/Manu.js"
const PageManu = () => {  
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
                    <NavBar />
                    <ManuPage />
                </div>
            )}
        </div>
    );

 } 
export default PageManu;