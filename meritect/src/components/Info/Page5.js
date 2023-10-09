import NavBar from "../NavBar.js"
import Slide5 from "./Slide5.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page5 = ({data}) => {  
    const [loading, setLoading] = useState(false);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์</span><br/>&emsp;• เพื่อให้บริการที่สมบูรณ์แบบในการดูแลผู้ป่วยปากแหว่งเพดานโหว่และพิการทางศีรษะและใบหน้า ให้มีความครอบคลุมทั้ง 5 ด้าน ได้แก่ ด้านสุขภาพ ด้านการศึกษา ด้านการดำรงชีวิต ด้านสังคม และด้านการเสริมสร้างพลังอำนาจ ในพื้นที่จังหวัดขอนแก่นอย่างบูรณาการ 
    <br/>&emsp;• เพื่อให้ผู้ป่วยเห็นคุณค่าของตนเอง และมีความมั่นใจในการเข้าสังคมมากขึ้น 
    <br/>&emsp;• เพื่อให้ผู้ป่วยสามารถตั้งเป้าหมายชีวิต และพัฒนาศักยภาพของตนเองได้  
ครอบครัวตะวันฉายได้รับความรู้และการดูแลด้านสุขภาพ ได้ร่วมกิจกรรมทางสังคมอย่างมีความสุขสนุกสนาน ได้เรียนรู้ด้านการศึกษาทางวิทยาศาสตร์และภาษาอังกฤษ การดำรงชีวิตโดยการส่งเสริมแนวทางอาชีพนักบริบาลชุมชนและการปลูกกล้าไม้  และได้รับการเสริมพลังอำนาจเชิงบวกร่วมกันทุกคน
<br/><br/><span style={{fontSize:"32px"}}> สิ่งที่สามารถช่วยเหลือได้</span><br/>&emsp;&emsp;1.ร่วมบริจาคเงินและสิ่งของที่จำเป็น เช่น ของเล่นเด็ก เสื้อผ้า
<br/>&emsp;&emsp;2.การเป็นจิตอาสา
สามารถร่วมทำกิจกรรมเสริมสร้างพัฒนาทักษะได้ในทุกวันศุกร์ที่สองของทุกเดือน
ในช่วงเวลา 08.30-10.00 น. ณ มูลนิธิตะวันฉายฯ
<br/>&emsp;&emsp;3.การอุดหนุนผลิตภัณฑ์ของผู้ป่วยและครอบครัว
เพียงเลือกซื้อสิ่งของที่ท่านชื่นชอบ นำไปใช้ หรือมอบเป็นของขวัญ เพียงเท่านี้ก็สามารถมีส่วนร่วมในการมอบโอกาส และสร้างรอยยิ้มแก่น้องตะวันฉาย โดยรายได้ทั้งหมดหลังหักค่าใช้จ่ายจะสมทบทุนกองทุน “ปากแหว่งเพดานโหว่” ของมูลนิธิตะวันฉายฯ คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น
  </div>
    const infolocal = <div>
  123 อาคารคณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น, อำเภอเมืองขอนแก่น, จังหวัดขอนแก่น 40002<br/> 

</div>
const infoname = <div>
มูลนิธิตะวันฉายเพื่อผู้ป่วยปากแหว่งเพดานโหว่และพิการทางศีรษะและใบหน้า
</div>
    useEffect(() => { 
        window.scrollTo(0, 0);
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
                        <Slide5 />
                    </div>
                    <div className="Info-data"> 
                        <Info img="https://drive.google.com/uc?id=1zWNk0JOjwRQ6TWIUusIPAHqMKyARL2gl" name={infoname} info={infoText}/>
                        <Contect info1="tfc.kku@gmail.com" info2="08 5927 0324" info3={infolocal} link="https://kkucleft.kku.ac.th" link1="https://www.facebook.com/Tawanchai4Clefts/?locale=th_TH"/>
                        <OtherPage data={data}/>
                    </div>
                    
                </div>
            )}
            
                
        </div> 
    )
} 
export default Page5;
