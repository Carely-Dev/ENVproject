import NavBar from "../NavBar.js"
import Slide10 from "./Slide10.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page10 = ({data}) => {  
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
    แบ่งปันความรักความห่วงใยโดยการจัดหาสิ่งจำเป็นต่างๆเพื่อ ใช้ให้เกิดประโยชน์ในการดูแลเด็กๆบ้านเมตตา การบริจาค น้ำยาทำความสะอาด ของใช้สำหรับเด็กแรกเกิดเด็กเล็ก เด็กโต ของกินของใช้จำเป็นที่ใช้ประจำวัน อาหาร ผักผลไม้ ให้เด็ก
<br/>
<br/>

สิ่งที่ต้องการ<br />
    &emsp;•น้ำยาทำความสะอาด
 <br />
    &emsp;• ของใช้สำหรับเด็กแรกเกิดและเด็กโต   <br />
    &emsp;• ของกินและของใช้ที่จำเป็น  <br />
    &emsp;• อาหารและผลไม้  <br />
    

   
    

  </div>
    const infolocal = <div>
  133, Ban Khok Ngam, อำเภอ บ้านฝาง ขอนแก่น 40270<br/> Thailand, Khon Kaen 
</div>
const infoname = <div>
267 267 หมู่ที่ 9 Sila, Mueang Khon Kaen District, Khon Kaen 40000, Thailand
เทศบาลนครขอนแก่น, จังหวัดขอนแก่น, 40000
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
                        <Slide10 />
                    </div>
                    <div className="Info-data"> 
                        <Info img="https://drive.google.com/uc?id=1juw8MH6aXFgY8UsCGSSpEpgf3-HQeUSU" name="มูลนิธิบ้านแห่งความเมตตา" info={infoText}/>
                        <Contect info1="  " info2="089 944 7802" info3={infolocal} link="http://www.houseofmercy-foundation.com/?fbclid=IwAR1AYjEIb4914xb07a-SGE09O_WRSNnzF6bjPrRv_3tEoRYfgpm5V5sXxt8" link1="https://www.facebook.com/profile.php?id=100066434510404&locale=th_TH"/>
                        <OtherPage data={data}/>
                    </div>
                    
                </div>
            )}
            
                
        </div>    
    )
} 
export default Page10;
