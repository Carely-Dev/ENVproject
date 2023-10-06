import NavBar from "../NavBar.js"
import Slide4 from "./Slide4.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page4 = ({data}) => {  
    const [loading, setLoading] = useState(false);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์</span><br/>&emsp;คือ จะประสานความช่วยเหลือซึ่งกันและกัน ตั้งแต่ การรักษาพยาบาล การดูแล การใช้บริการ การดูแลแบบประคับประคอง และสิทธิประโยชน์ เพื่อให้ผู้ป่วยมะเร็งมีคุณภาพชีวิต สามารถรับมือกับปัญหาที่เกิดขึ้นทุกมิติ มูลนิธิยังได้รับการสนับสนุนจากองค์กรทั้งภาครัฐ ภาคเอกชน ภาคประชาสังคมเป็น<br/>อย่างดีตลอดมา
        <br/><br/><span style={{fontSize:"32px"}}>บริจาคได้ที่</span><br/>
        &emsp;มูลนิธิเครือข่ายมะเร็ง
ธ.ไทยพาณิชย์
สาขากระทรวงสาธารณสุข
<br/> เลขที่บัญชี 340-224672-1 
  </div>
    const infolocal = <div>
  เลขที่ 186 ซอยรามอินทรา 39
แขวงอนุสาวรีย์ เขตบางเขน
จ.กรุงเทพฯ 10220
</div>
const infoname = <div>
บ้านพักเด็กและครอบครัว จ.ขอนแก่น<br/> จ.ขอนแก่น
</div>
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
                        <Slide4 />
                    </div>
                    <div className="Info-data"> 
                        <Info img="https://drive.google.com/uc?id=1mjCt0AWfIf4158qSq4bgkP5AFzN5PZ_X" name="มูลนิธิเครือข่ายมะเร็ง" info={infoText}/>
                        <Contect info1="sirintip@thaicancersociety.com" info2="062-592-2425, 092-519-2899" info3={infolocal} link="https://thaicancersociety.com/" link1="https://www.facebook.com/thaicancersociety"/>
                        <OtherPage data={data}/>
                    </div>
                    
                </div>
            )}
            
                
        </div> 
    )
} 
export default Page4;
