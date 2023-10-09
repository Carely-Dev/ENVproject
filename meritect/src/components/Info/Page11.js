import NavBar from "../NavBar.js"
import Slide11 from "./Slide11.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page11 = ({data}) => {  
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        window.scrollTo(0, 0);
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์</span><br/>&emsp;คือ 
    ดูแลผู้สูงอายุกิจวิจารณ์ไลฟ์แคร์ 
ดูแลดุจญาติมิตร เอื้อคุณภาพชีวิต แด่คนที่คุณรัก
เรามุงเน้นการดูแลสุขภาพผู้สูงอายุแบบองค์รวมทั้งกายและจิตใจ 
การดูแลกิจวัตรประจำวัน การทำกิจกรรมนันทนาการ การทำกายภาพขั้นพื้นฐาน
การบริการซักรีดเสื้อผ้า เป็นสถานที่ที่เป็นเหมือนบ้านสำหรับคุณพ่อคุณแม่ที่ต้องการมีคนดูแล
<br/><br/>
กิจกรรมที่มูลนิธิให้ความช่วยเหลือ <br/>
&emsp; • การดูแลกิจวัตรประจำวัน <br/>
&emsp; • การทำกิจกรรมนันทนาการ <br/>
&emsp; • การทำกายภาพขั้นพื้นฐาน     <br/>
&emsp; • การบริการซักรีดเสื้อผ้าคนไข้ <br/>
&emsp; • อาหารหลักและอาหารว่าง 3 มื้อ  

    
    

  </div>
    const infolocal = <div>
  428 หมู่16 ถ.แก่นพยอม ต.บ้านเป็ด อ.เมื่องขอนแก่น จ.ขอนแก่น 40000<br/> Thailand, Khon Kaen 
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
                        <Slide11 />
                    </div>
                    <div className="Info-data"> 
                        <Info img="https://drive.google.com/uc?id=1tkKApDrKH-Mr-0DQT2nc9r8ZDx6oG6E9" name="Kitwichan Life Care" info={infoText}/>
                        <Contect info1="kitwichanlifecare@gmail.com" info2="093 228 6141" info3={infolocal} link="https://kitwichanlifecare.com/" link1="https://www.facebook.com/KitwichanLifeCare/"/>
                        <OtherPage data={data}/>
                    </div>
                    
                </div>
            )}
            
                
        </div>    
    )
} 
export default Page11;
