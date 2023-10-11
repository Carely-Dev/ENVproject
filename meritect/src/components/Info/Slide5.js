import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../../components/slide.css"
import Icon1 from '../image/Group7.png'
import Icon2 from '../image/Group8.png'
const Slide5 = () => {
    const images = [
        'https://drive.google.com/uc?export=download&id=1Ppv5aVGANqOG7uIxobEDjuoeQSsXG0qR',
        'https://drive.google.com/uc?export=download&id=10iYlYIw7Qoloo50yzjcvR-N_KrR5WHYu',
        "https://drive.google.com/uc?export=download&id=1UmYbGge3kWHz6iDgXvv1E6dYaCbnjVGJ",
        'https://drive.google.com/uc?export=download&id=1UmYbGge3kWHz6iDgXvv1E6dYaCbnjVGJ'
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

export default Slide5;