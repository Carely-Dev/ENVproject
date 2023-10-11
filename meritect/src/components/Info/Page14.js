import NavBar from "../NavBar.js"
import Slide14 from "./Slide14.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page14 = ({data}) => {  
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        window.scrollTo(0, 0);
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์</span><br/>&emsp; มูลนิธิต้องการช่วยเหลือคนชรายากไร้ ทั้งร่างกายและจิตใจ ช่วยเหลือค่าใช้จ่ายด้าน เสื้อผ้า เครื่องนุ่งห่ม ผ้าอ้อมผู้ใหญ่ รองเท้า แว่นตา และสิ่งของเครื่องใช้ประจำวันอื่นๆอีกมากมาย ค่ายารักษาโรค และค่าใช้จ่ายด้านสุขภาพ ค่าอาหารและน้ำดื่ม หรือเลี้ยงอาหารมื้อพิเศษสำหรับคนชราเพื่อยกระดับสภาพความเป็นอยู่ให้คนชราที่ยากไร้เพื่อให้คนชรายากไร้ได้รับการบรรเทาทุกข์และสามารถดำรงชีวิตในสังคมได้อย่างมีความสุขมากยิ่งขึ้น เเละเราอยากเป็นส่วนหนึ่งที่ช่วยเป็นสื่อกลางส่งผ่านความช่วยเหลือไปสู่คนแก่ที่ยากจนถูกทอดทิ้ง
    <br/>
    <br/>
    ขาดแคลนสิ่งของที่จำเป็นในการดำรงชีวิต เช่น รถเข็นวีลแชร์ , ไม้เท้า, <br/>เครื่องช่วยฟัง


    
    

  </div>
    const infolocal = <div>
  131/213 ต.บางรักพัฒนา อ.บางบัวทอง จ.นนทบุรี  11110 <br/> Thailand, Nonthaburi
</div>
const infoname = <div>
บ้านพักเด็กและครอบครัว จ.ขอนแก่น<br/> จ.ขอนแก่น
</div>
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
                    <Slide14 />
                </div>
                <div className="Info-data"> 
                    <Info img="https://drive.google.com/uc?id=1CDOEQaElKAzMkdRz9FrYd9o_1YiBf8eG" name="มูลนิธิสายธารสุขใจ" info={infoText}/>
                    <Contect info1="info@ropf.or.th" info2="094 923 4140" info3={infolocal} link="https://ropf.or.th " link1="https://www.facebook.com/profile.php?id=100066456287800"/>
                    <OtherPage data={data}/>
                </div>
                
            </div>
        )}
        
            
    </div>     
    )
} 
export default Page14;
