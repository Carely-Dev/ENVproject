import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../../components/slide.css"
import Icon1 from '../image/Group7.png'
import Icon2 from '../image/Group8.png'
const Slide2 = () => {
    const images = [
        "https://drive.google.com/uc?id=1SA0IDM83Vn_pKD6ymH5ognGhZX-5w4gL",
        "https://drive.google.com/uc?id=1kSD0eZRhAorfsAWG1kTGVqzvM4bNVbM3",
        "https://drive.google.com/uc?id=1cUBsh003QAYbLwaX4Q_AVLRdKohiAoHF",
        "https://drive.google.com/uc?id=1xEtmGGQcgPKlp3kWRdEXyunqvFGBlLHa",
        

    ];
    const buttonStyle = {
        width: "32px",
        height: "32px",
        background: 'none',
        border: '0px',
        margin: '50px' ,
        marginLeft: '16px',
        // border : '1px solid red'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><img src={Icon1} alt="Logo"  /></button>,
        nextArrow: <button style={{ ...buttonStyle }}><img src={Icon2} alt="Logo"  /></button>
    }
    

    return (
        
            <Slide {...properties}>
            <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[0]})` }}>  
            </div>
            </div>
            <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[1]})` }}>  
            </div>
            </div>
            <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[2]})` }}>  
            </div>
            </div>
            <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[3]})` }}>  
            </div>
            </div>
            </Slide>
        
    );
};

export default Slide2;