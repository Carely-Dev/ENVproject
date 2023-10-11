import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../../components/slide.css"
import Icon1 from '../image/Group7.png'
import Icon2 from '../image/Group8.png'
const Slide4 = () => {
    const images = [
        "https://drive.google.com/uc?id=1v960X2YIonHtDPkFXpk6i9AtMlpJKSgc",
        "https://drive.google.com/uc?export=download&id=10tC6xTCSA4KDcIAYITJuAn0osnSutB4H",
        "https://drive.google.com/uc?export=download&id=11SlGcOV-bC-9pHfxraSnsijzi6uAVDDh",
        "https://drive.google.com/uc?export=download&id=1Qe5GFojHRSGBvaENkXF4v30S-LmfhgdK",
        "https://drive.google.com/uc?export=download&id=1htkZgCz4Of7os4MQsB04T1NODbEHQqIu",
    ]
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
            <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[4]})` }}>  
            </div>
            </div>
            
            
            </Slide>
        
    );
};

export default Slide4;