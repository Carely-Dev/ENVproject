import NavBar from "../NavBar.js"
import Slide8 from "./Slide8.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page8 = ({data}) => {  
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
    การบริจาค สิ่งของที่จำเป็น น้ำยาทำความสะอาด ผ้าอ้อมเด็ก อุปกรณ์การศึกษา ถั่วและธัญพืช ส่วนเงินบริจาคจะนำไปชำระค่าน้ำประปา ค่าไฟฟ้า แก๊สหุงต้ม อาหารสด และสิ่งของจำเป็นอื่นๆให้เด็กๆ
    <br/>
    <br/>
    สิ่งของที่จำเป็น <br/>
    &emsp;•น้ำยาทำความสะอาด <br/>
    &emsp;•ผ้าอ้อมเด็ก <br/>
    &emsp;•อุปกรณ์การศึกษา <br/>
    &emsp;•ถั่วและธัญพืชต่างๆ <br/>
    &emsp;•เงินบริจาค (นำไปใช้เพื่อใช้จ่ายค่าน้ำ ค่าไฟ อาหารและสิ่งของจำเป็นต่างๆ)<br/>
    ❗หมายเหตุ  <br/>
    &emsp;•  เด็กๆและคุณครูทานมังสวิรัติ <br/>
    ❗สิ่งที่ควรหลีกเลี่ยง <br/>
    &emsp;•  อาหารที่ทำ จากเนื้อสัตว์ ขนมถุง ของเล่น ไอศกรีม ของเล่นสื่อถึงความรุนแรง
<br/>
<br/>

    
    
   
    

  </div>
    const infolocal = <div>
  88/135-138 หมู่ 3 ถ.ฉิมพลี ต.ในเมือง อ.เมือง จ.ขอนแก่น<br/> Thailand, Khon Kaen 
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
                        <Slide8 />
                    </div>
                    <div className="Info-data"> 
                        <Info img="https://drive.google.com/uc?id=1bj2UWQKzpnMKwL-o39kDAyvYfSrRqfID" name="มูลนิธิช่วยเหลือเด็ก  (บ้านลูกรัก)" info={infoText}/>
                        <Contect info1="childhelpfoundation@gmail.com" info2="081 545 5661 " info3={infolocal} link="https://www.houseofmercy-foundation.com" link1="https://www.facebook.com/profile.php?id=100080932751961"/>
                        <OtherPage data={data}/>
                    </div>
                </div>
            )}
            
                
        </div>   
    )
} 
export default Page8;
