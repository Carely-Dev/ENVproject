import React from "react"
import "./Data.css"
import Contect from "./contect.js"
const Data =(props) => {
    const {img, name ,info,   } = props
    return (
        <div >
            <div className="logo-data-info">
                <div className="logo-data">
                    <img src={img} alt="Logo"  />
                    <h1> 
                        {name}
                    </h1>
                </div>
                <div className="info-data-1">
                    <p>
                        {info}
                        
                    </p>
            </div>
        </div>
        </div>
    )
}
export default Data;