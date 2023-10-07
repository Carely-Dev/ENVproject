import NavBar from "../NavBar.js"
import Slide7 from "./Slide7.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page7 = ({data}) => {  
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์</span><br/>&emsp;คือ 
    เป็นศูนย์พักพิงให้แก่สัตว์พิการ สัตว์ติดโรค สัตว์จรจัดที่ไม่มีที่อยู่อาศัยไม่มีอาหารกินไม่ได้รับการดูแล มูลนิธิของเราจะเราสัตว์เหล่านี้มาเพื่อนดูแล รักษา จนกลับมาใช้ชีวิตได้อย่างปกติ
<br/>
<br/>
สิ่งของที่ต้องการด่วน (ใช้ต่อเนื่อง) <br/>
&emsp;• อาหารกระป๋อง สัตว์ป่วย โรคตับ  -L/D , Hepatic  หรือ แบบเม็ด<br/>
&emsp;• อาหารกระป๋อง สัตว์ป่วยพักฟื้น -A/D ,  Recovery **ด่วนมาก<br/>
&emsp;• อาหารกระป๋อง สัตว์ป่วยโรคไต  -K/D  ,  Renal   หรือ แบบเม็ด<br/>
&emsp;• อาหารเม็ดโรคทางเดินอาหารสำหรับแมว ,อาหารเม็ดโรคระบบทางเดินปัสสาวะในแมว **ด่วนมาก<br/>
&emsp;• อาหารกระป๋อง สุนัขและแมว (อาหารเปียก) ทุกรสชาติไม่จำกัดยี่ห้อ<br/>
&emsp;• น้ำเกลือสำหรับให้ใต้ผิวหนัง Acetar 1000 cc. ,แบคตาซิน เจลสมานแผล  <br/>
<br/>สิ่งของที่รับบริจาค (ใช้ต่อเนื่อง) * รับ บริจาคทุกยี่ห้อ * <br/>
&emsp;• อาหารเม็ดแมว **ด่วนมาก<br/>
&emsp;• น้ำยาฆ่าเชื้อ เดทตอล หรือ ยี่ห้ออื่นๆ * ด่วน<br/>
&emsp;• ยากันยุงแบบขด <br/>
&emsp;• อาหารเม็ด สุนัข และ แมว (ทุกยี่ห้อ)* สำหรับสุนัข-แมวโต  <br/>
&emsp;• แผ่นรองซับ ใช้ปูกรงสัตว์<br/>
&emsp;• ทรายแมว (เพื่อเอาให้แมวขับถ่าย) ข้าวสาร แบบข้าวแข็ง *ด่วน <br/> 
&emsp;• นมจืด , นมแพะ ,น้ำยาล้างจาน,ถุงขยะ ขนาดกลางและใหญ่,แป้งโรยกำจัดเห็บ-หมัด , แชมพูอาบน้ำสุนัข (สำหรับขนสั้น) <br/>
&emsp;• หนังสือพิมพ์เก่า  , ผ้าเช็ดตัวเก่า , ไม้กวาดทางมะพร้าว ด้ามจับยาว,หน้ากากอนามัย สำหรับสัตวแพทย์และพี่เลี้ยงดูแลสัตว์<br/>

    กิจกรรมที่มูลนิธิให้ความช่วยเหลือ<br />
    &emsp;• ที่พักสำหรับสุนัขและแมว
 <br />
    &emsp;• หาบ้านให้กับสุนัขและแมว   <br />
    &emsp;• กระจายความตระหนักเกี่ยวกับการดูแลและรับเลี้ยงสัตว์เลี้ยง  <br />
    <br />
    ร่วมบริจาคช่วยเหลือสัตว์พิการได้ที่บัญชีมูลนิธิฯ ได้ทุกธนาคาร 
บัญชีออมทรัพย์ สาขาสรงประภา
ชื่อบัญชี มูลนิธิบ้านสงเคราะห์สัตว์พิการ <br />
&emsp;• ธ.กรุงเทพ 059-0-12305-5 <br />
&emsp;• ธ.กรุงศรีฯ 332-1-08971-9<br />
&emsp;• ธ.กสิกรไทย 422-2-20785-7<br />
&emsp;• ธ.CIMB 700-0-89011-4 <br />
&emsp;• ธ.กรุงไทย 198-0-26078-8<br />
📍ส่งหลักฐานการโอนเงินและรายละเอียด
ทางไลน์ @ ID : @home4animals (มีตัว @ข้างหน้าด้วย) 
    

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
                        <Slide7 />
                    </div>
                    <div className="Info-data"> 
                        <Info img="https://drive.google.com/uc?id=1gBqLDgxS01bRHssdf4I6bMxGXDs2h8sp" name="มูลนิธิบ้านสงเคราะห์สัตว์พิการ (home4animals)" info={infoText}/>
                        <Contect info1="home4animals@hotmail.com" info2="02-584-4896 หรือ 02-961-5360 , มือถือ 065-887-4888" info3={infolocal} link="https://home4animals.org/" link1="https://www.facebook.com/home4animalsth/"/>
                        <OtherPage data={data}/>
                    </div>
                    
                </div>
            )}
            
                
        </div>   
    )
} 
export default Page7;
