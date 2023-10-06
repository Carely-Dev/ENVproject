import NavBar from "../NavBar.js"
import Slide12 from "./Slide12.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page12 = () => {  
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
    return(
        <div   > 
            {loading ? (
                <BeatLoader className="page" color="#318CE7" size={50} />
            ) : (
                <div>
                    <div className="name">
                        <NavBar />
                        
                    </div>
                    <div className="slide">
                        <Slide12 />
                    </div>
                    
                </div>
            )}
            
                
        </div>    
    )
} 
export default Page12;
