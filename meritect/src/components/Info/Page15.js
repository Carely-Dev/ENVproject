import NavBar from "../NavBar.js"
import Slide15 from "./Slide15.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page15 = ({data}) => {  
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        window.scrollTo(0, 0);
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์</span><br/>&emsp; เป็นองค์กรพัฒนาเอกชนเพื่อสาธารณประโยชน์ โดยไม่
แสวงหาผลกำไร ก่อตั้งขึ้นในเดือนธันวาคม 2542 มีจุดมุ่ง
หมายเพื่อพัฒนาคุณภาพชีวิตของผู้สูงอายุที่ยากไร้ด้อยโอ
กาศ โดยให้ความช่วยเหลือผู้สูงอายุที่อ่อนแอ และสร้าง
เสริมศักยภาพของผู้สูงอายุที่ข้มแข็ง ให้สามารถช่วยเหลือ
ตนเองและผู้อื่นได้อย่างยั่งยื่น โดยความร่วมมือและสนับสน
นของชุมชน ส่งเสริมแนวคิดในการสร้าง "พลังผู้สูงวัย" ให้
เกิดขึ้นในสังคม โดยมีพื้นที่หลักในการทำงานอยู่ในภาค
เหนือตอนบนของประเทศไทย


    
    

  </div>
    const infolocal = <div>
  388 (6) ซอย 17 ถ.นิมมานเหมินท์ ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200 <br/> Thailand, Chiang Mai
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
                    <Slide15 />
                </div>
                <div className="Info-data"> 
                    <Info img="https://drive.google.com/uc?id=1KXeBY74jRuRaZnjdiD38oQCJPeMdz_Uf" name="FOPDEV" info={infoText}/>
                    <Contect info1="info@fopdev.or.th" info2=" 053 215 671" info3={infolocal} link="https://fopdev.or.th/" link1="https://www.facebook.com/search/top/?q=FOPDEV"/>
                    <OtherPage data={data}/>
                </div>
                
            </div>
        )}
        
            
    </div>   
    )
} 
export default Page15;
