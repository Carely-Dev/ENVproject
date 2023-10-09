import NavBar from "../NavBar.js"
import Slide2 from "./Slide2.js"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./loading.css"
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page2 = ({data}) => {  
    
    const [loading, setLoading] = useState(false);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์</span><br/>&emsp;คือ การรวมพลังเป็นหนึ่งจากทั้งภาครัฐ เอกชน และประชาชนทั่วไป ในการทำงานร่วมกันเพื่อกำจัดโรคพยาธิใบไม้ในตับและลดโรคมะเร็งท่อน้ำดี
ช่วยขยายโอกาสให้กับผู้ป่วยมะเร็งท่อน้ำดี ให้เข้าถึงการดูแลรักษา และได้รับการอุดหนุนค่ารักษาพยาบาลที่จำเป็น
สนับสนุนคณาจารย์ นักวิจัย และนักศึกษา โดยการจัดสรรเงินเพื่อค้นค ว้าวิจัย ให้ทุนการศึกษา และฝึกอบรมหลักสูตรการผ่าตัด วินิจฉัยและการดูแลผู้ป่วยมะเร็งท่อน้ำดี
  </div>
  const infolocal = <div>
        ห้อง 5307 ตึกเวชวิชชาคาร คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น <br/> Thailand, Khon Kaen 
    </div>
    useEffect(() => { 
        window.scrollTo(0, 0);
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
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
                        <Slide2 />
                    </div>
                    <div className="Info-data"> 
                        <Info img="https://drive.google.com/uc?id=1cQ7jNFwmwYgVbo1KemHKgKaAbcLFDtQD" name="มูลนิธิมะเร็งท่อน้ำดี คณะแพทยศาสตร์ มข." info={infoText}/>
                        <Contect info1="ccafoundationthailand@gmail.com" info2="092 558 8122" info3={infolocal} link="http://cca.in.th/wpth/home/" link1="https://www.facebook.com/CCAFoundationthai"/>
                        <OtherPage data={data}/>
                    </div>
                    

                    
                    
                </div>
            )}
            
                
        </div>    
    )
} 
export default Page2;
