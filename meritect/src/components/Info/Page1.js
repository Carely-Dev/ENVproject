
import NavBar from "../NavBar.js";
import Slide1 from "./Slide1.js";
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./loading.css"
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
import Footer from "../body/Footer.js";
const Page1 = ({data}) => {
    console.log(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        window.scrollTo(0, 0);
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์ <br/>&emsp;เพื่อปรับปรุงสวัสดิภาพของสุนัขและแมวในเอเชีย <br/>ส่งผลให้ชีวิตดีขึ้นสําหรับทั้งชุมชนสัตว์และมนุษย์ </span><br/>
    <br/>
    กิจกรรมที่มูลนิธิให้ความช่วยเหลือ<br />
    &emsp;• การให้ความช่วยเหลือสุนัข<br />
    &emsp;• การทำหมัน  <br />
    &emsp;• การฉีดวัคซีน  <br />
    &emsp;• การรักษาพยาบาล   <br />
    &emsp;• ศูนย์พักพิง  <br />
    &emsp;• การอุปการะ
  </div>
    const infolocal = <div>
        "มูลนิธิเพื่อสุนัขในซอย ซ.ไม้ขาว10 ม.4 ต.ไม้ขาว อ.ถลาง จ.ภูเก็ต 83110 <br/>เปิดทำการในวันจันทร์-วันศุกร์ ตั้งแต่เวลา 08:00 - 21:00 น."
    </div>
    return (
        <div   > 
            {loading ? (
                <BeatLoader className="page" color="#318CE7" size={50} />
            ) : (
                <div>
                    <div className="name">
                        <NavBar />
                        
                    </div>
                    <div className="slide">
                        <Slide1 />
                    </div>
                    <div className="Info-data"> 
                        <Info img="https://drive.google.com/uc?id=1dCi8KvlNGD9AgUFhly7A-GkCMyBZ3S4e" name="มูลนิธิเพื่อสุนัขในซอย, ประเทศไทย (Soi Dog - in Thai)" info={infoText}/>
                        <Contect info1="clinic@soidog.org" info2="076 681 029" info3={infolocal} link="https://www.soidog.org/th/content/contact-us" link1="https://www.facebook.com/SoiDogInThai/"/>
                        <OtherPage data={data} />
                        
                    </div>
                    

                    

                    
                    
                </div>
            )}
            
                
        </div>    
    );
}

export default Page1;
