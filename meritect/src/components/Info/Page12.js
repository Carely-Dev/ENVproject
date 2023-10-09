import NavBar from "../NavBar.js"
import Slide12 from "./Slide12.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page12 = ({data}) => {  
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        window.scrollTo(0, 0);
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์</span><br/>&emsp;• เป็นศูนย์รวบรวมและเผยแพร่สถิติข้อมูลต่างๆ ซึ่งเกี่ยวกับมะเร็งในประเทศไทยและเพื่อติดต่อแลกเปลี่ยน
ประสบการณ์ ความคิดเห็นกับสถาบันมะเร็งในต่างประเทศ<br/>
&emsp;• เป็นศูนย์ตรวจมะเร็งระยะเริ่มแรกของร่างกาย ทุกระบบ<br/>
&emsp;• เป็นศูนย์วินิจฉัย บําบัดและวิจัยเกี่ยวกับมะเร็ง<br/>
&emsp;• เป็นศูนย์ประสานงานและร่วมมือกับสถานที่ ที่มีการตรวจวินิจฉัย และบําบัดรักษาโรคมะเร็งภายในประเทศ<br/>
รวมทั้งติดต่อแลกเปลี่ยนประสบการณ์และความคิดเห็นกับ สถาบันมะเร็งในต่างประเทศ นําวิธีการรักษาที่
ทันสมัยมาใช้ ประวัติ สถาบันมะเร็งแห่งชาติ (National Cancer Institute) กรมการแพทย กระทรวงสาธารณสุข<br/>
&emsp;• เป็นศูนย์อบรมเรื่องมะเร็งให้แก่ แพทย์ พยาบาล นักศึกษาแพทย์ และนักวิทยาศาสตร์<br/>
&emsp;• ให้การศึกษาแก่ประชาชนในเรื่องที่เป็น ประโยชน์ของการตรวจค้นหามะเร็งระยะเริ่มแรกและ การบําบัดรักษาที่ถูกต้อง<br/>
<br/>
<br/>ขอเชิญร่วมบริจาค<br/>
👉 สนับสนุนแก่สถาบันมะเร็งแห่งชาติ
ชื่อบัญชี เงินบริจาคสถาบันมะเร็งแห่งชาติ
เลขบัญชี 013-1-15586-5 <br/>
👉สนับสนุนแก่สถาบันมะเร็งแห่งชาติ ชื่อบัญชี เงินบริจาคเพื่อผู้ป่วยอนาถาสถาบันมะเร็งแห่งชาติ
ธนาคารกรุงไทย ประเภทออมทรัพย์<br/>
เลขบัญชี 013-1-38243-8



    
    

  </div>
    const infolocal = <div>
  268/1 ถนนพระราม 6, กรุงเทพฯ 10400<br/> Thailand, Bangkok
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
                        <Slide12 />
                    </div>
                    <div className="Info-data"> 
                        <Info img="https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" name="สถาบันมะเร็งแห่งชาติ" info={infoText}/>
                        <Contect info1="prncithailand@gmail.com" info2="02 202 6800 ต่อ 1509" info3={infolocal} link="https://nci.go.th/" link1="https://www.facebook.com/NationalCancerInstitute.Thailand/?locale=th_TH"/>
                        <OtherPage data={data}/>
                    </div>
                    
                </div>
            )}
            
                
        </div>    
    )
} 
export default Page12;
