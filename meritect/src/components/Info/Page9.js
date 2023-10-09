import NavBar from "../NavBar.js"
import Slide9 from "./Slide9.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page9 = ({data}) => {  
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        window.scrollTo(0, 0);
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์</span><br/>
    &emsp;• เพื่อช่วยเหลือผู้ป่วยโรคมะเร็งผู้ยากไร้ ที่ได้รับการรักษาในโรงพยาบาลศิริราช<br/>
    &emsp;• เพื่อสนับสนุนกิจกรรมเกี่ยวกับการศึกษาโรคมะเร็งในโรงพยาบาลศิริราช<br/>
    &emsp;• เพื่อสนับสนุนกิจกรรมเกี่ยวกับการวิจัยโรคมะเร็งในโรงพยาบาลศิริราช<br/>

<br/>

ช่องทางการร่วมบริจาค <br/>
&emsp;หากท่านมีความประสงค์จะบริจาคเงินเพื่อช่วยเหลือผู้ป่วยมะเร็งในโรงพยาบาลศิริราช สามารถบริจาคผ่านช่องทางต่าง ๆ ได้ดังนี้
<br />
    &emsp;&emsp;• บริจาคด้วยตนเอง
    <br /> &emsp; &emsp;📍บริจาคได้ที่ มูลนิธิโรคมะเร็งโรงพยาบาลศิริราช อาคารมหิดลบำเพ็ญ ชั้น 2
       ใน วันจันทร์ – ศุกร์ เวลา 07.30 –16.30 น. หยุดวันเสาร์ – อาทิตย์ <br/>และวันหยุดนักขัตฤกษ์
 <br />
    &emsp;• หาบ้านให้กับสุนัขและแมว   <br />
    &emsp;• กระจายความตระหนักเกี่ยวกับการดูแลและรับเลี้ยงสัตว์เลี้ยง  <br />
    
    &emsp; &emsp;📍บริจาคเป็นเช็คหรือธนาณัติ <br/>
    &emsp;กรุณาสั่งจ่ายในนาม “มูลนิธิโรคมะเร็งโรงพยาบาลศิริราช”
(ถ้าเป็นธนาณัติ ที่ทำการ ปณ.ศิริราช) ตึกมหิดลบำเพ็ญ ชั้น 2 เลขที่ 2 ถนนพรานนก แขวงศิริราช เขตบางกอกน้อย กรุงเทพฯ 10700

  </div>
    const infolocal = <div>
  มูลนิธิโรคมะเร็งโรงพยาบาลศิริราช อาคารมหิดลบำเพ็ญ ชั้น 2
เลขที่ 2 ถนนพรานนก <br/>แขวงศิริราช เขตบางกอกน้อย
กรุงเทพฯ 10700
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
                        <Slide9 />
                    </div>
                    <div className="Info-data"> 
                        <Info img="https://drive.google.com/uc?id=1c5FHXVHWjsW_r4Yb80oZW8bjHB82kY_f" name="มูลนิธิโรคมะเร็งโรงพยาบาลศิริราช" info={infoText}/>
                        <Contect info1="CA_SIRIRAJ@gmail.com" info2="02-419-9117-8" info3={infolocal} link="https://ca-siriraj.org/" link1="https://www.facebook.com/profile.php?id=100081549946435"/>
                        <OtherPage data={data}/>
                    </div>
                    
                </div>
            )}
            
                
        </div>   
    )
} 
export default Page9;
