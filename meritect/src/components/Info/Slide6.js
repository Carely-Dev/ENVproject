import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../../components/slide.css"
import Icon1 from '../image/Group7.png'
import Icon2 from '../image/Group8.png'
const Slide6 = () => {
    const images = [
        'https://drive.google.com/uc?export=download&id=1hhudjBl9i_DMA2DdmGY87GRgWv8NcgN2'
        ,'https://drive.google.com/uc?export=download&id=1zsTmJ4jyGIm7r7x2oEts_FS8GxIyO2dS'
        ,'https://drive.google.com/file/d/1dowmyr_LsUs1qon3X7DJES8xKi2yI0va/view?usp=drive_link'
        ,'https://drive.google.com/uc?export=download&id=1nXEgKxHrktv13JYyHwlTVkqINqbz5CkJ'
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

export default Slide6;