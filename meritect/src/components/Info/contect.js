import imgEmail from "../image/mail.png"
import imgCall from "../image/call (1) 1.png"
import imgLocal from "../image/maps-and-flags.png"
import imgWeb from "../image/world-wide-web (1) 1.png"
import imgFace from "../image/facebook (1) 1.png"
import "../Info/contect.css"
const contect = (props) => { 
    const { info1 , info2 , info3 ,link,link1 } = props
    return (
        <div>
        <div className="box">
            <h1>ข้อมูลติดต่อ</h1>
            <div className="email">
                <img src={imgEmail}  />
                <p>{info1}</p>
            </div>
            <div className="call">
                <img src={imgCall}  />
                <p>{info2}</p>
            </div>
            <div className="local">
                <img src={imgLocal}  />
                <p>{info3}</p>
            </div>
            <div className="webface">
                <div className="Web" > 
                    <a href={link} target="_blank" >  <img src={imgWeb}  /></a>
                </div>
                <div className="facebook"> 
                    <a href={link1} target="_blank" >  <img src={imgFace}  /></a>
                </div>
            </div>
            
        </div>
        </div>
    )
}
export default contect;