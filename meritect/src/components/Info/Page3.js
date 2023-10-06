import NavBar from "../NavBar.js"
import Slide3 from "./Slide3.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page3 = ({data}) => {  
    const [loading, setLoading] = useState(false);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์</span><br/>&emsp;คือ 
เป็นบ้านพักคนชรา ขอนแก่นที่อยู่ภายใต้การควบคุมของคริสตจักร และเจ้าหน้าที่ที่ดูแลเป็นซิสเตอร์ของคณะธิดาเมตตาธรรม เป็นองค์กรการกุศลเพื่อดูแลผู้สูงอายุทุกรูปแบบโดยไม่คิดค่าใช้จ่าย โดยผู้สูงอายุส่วนมากจะเป็นผู้สูงอายุที่ช่วยเหลือตัวเองได้ และผู้สูงอายุในภาวะพึ่งพิง เมื่อเข้ามาจะรู้สึกเหมือนอยู่ในอ้อมกอดพระแม่มารีย์ และผู้ดูแลมีอัธยาศัยที่ดีมาก หากใครอยากสมทบทุนหรือทำบุญบ้านพักคนชรา สามารถติดต่อได้ที่บ้านพักคนชราแห่งนี้ได้เลย สามารถนำไปลดหย่อนภาษีตามกฎหมายอีกด้วย
<br/>
    &emsp;สิ่งที่บ้านพักอยากจะขอรับบริจาคในขณะนี้คือ<br />
    &emsp;&emsp;• ถุงมือเบอร์ S<br />
    &emsp;&emsp;• Mask   <br />
    &emsp;&emsp;• น้ำยาฆ่าเชื้อ  <br />
    &emsp;&emsp;• น้ำยาถูพื้น   <br />
    &emsp;&emsp;• Pamper size XL 
    

  </div>
    const infolocal = <div>
  311/7 ม.16 ต.ในเมือง อ.เมือง จ.ขอนแก่น<br/> Thailand, Khon Kaen 
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
                        <Slide3 />
                    </div>
                    <div className="Info-data"> 
                        <Info img="https://drive.google.com/uc?id=18J3dXmeDKze-6aUKRbcvU1BQR-QjTiyB" name="บ้านพักคนชรา  นักบุญโยเซฟ ขอนแก่น" info={infoText}/>
                        <Contect info1="sr_nap@yahoo.com" info2="043 244 130" info3={infolocal} link="" link1="https://www.facebook.com/profile.php?id=100064030868234"/>
                        <OtherPage data={data}/>
                    </div>
                    
                    
                    
                </div>
            )}
            
                
        </div>  
    )
} 
export default Page3;
