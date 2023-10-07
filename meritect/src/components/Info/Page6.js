import NavBar from "../NavBar.js"
import Slide6 from "./Slide6.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page6 = ({data}) => {  
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์</span><br/>&emsp;คือ 
เป็นศูนย์พักพิงสัตว์ส่วนตัวที่ตั้งอยู่ลึกในใจกลางประเทศไทย ซึ่งสุนัขที่ได้รับการช่วยเหลือจากการค้าเนื้อสุนัขที่ผิดกฎหมาย สถานการณ์ที่ไม่เหมาะสมและอุบัติเหตุ ตลอดจนสัตว์อื่นๆ ได้พบบ้านใหม่ที่รัก สัตว์เหล่านี้จํานวนมากมาหาเราอย่างบอบช้ําจนสูญเสียความไว้วางใจในมนุษยชาติ อาจต้องใช้เวลาหลายปีในการขัดเกลาทางสังคมอย่างเข้มข้นก่อนที่สุนัขเหล่านี้จะพร้อมที่จะไว้วางใจ <br/>มนุษย์อีกครั้ง
<br/>
<br/>

    กิจกรรมที่มูลนิธิให้ความช่วยเหลือ<br />
    &emsp;• ที่พักสำหรับสุนัขและแมว
 <br />
    &emsp;• หาบ้านให้กับสุนัขและแมว   <br />
    &emsp;• กระจายความตระหนักเกี่ยวกับการดูแลและรับเลี้ยงสัตว์เลี้ยง  <br />
    <br />
    ช่องทางการรับบริจาค: https://savedsouls-foundation.org/donate/
   
    

  </div>
    const infolocal = <div>
  133, Ban Khok Ngam, อำเภอ บ้านฝาง ขอนแก่น 40270<br/> Thailand, Khon Kaen 
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
                        <Slide6 />
                    </div>
                    <div className="Info-data"> 
                        <Info img="https://drive.google.com/uc?id=1nk-X0LYrA_tWdEBavLdWqXpPMc1YAr5V" name="saved souls foundation" info={infoText}/>
                        <Contect info1="info@savedsouls-foundation.org" info2="093 321 9365" info3={infolocal} link="https://savedsouls-foundation.org/" link1="https://www.facebook.com/SavedSoulsFoundation"/>
                        <OtherPage data={data}/>
                    </div>
                    
                </div>
            )}
            
                
        </div>   
    )
} 
export default Page6;
