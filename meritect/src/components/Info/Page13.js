import NavBar from "../NavBar.js"
import Slide13 from "./Slide13.js"
import "./loading.css"
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Info from "./Data.js"
import Contect from "./contect.js"
import OtherPage from "./Other.js"
const Page13 = ({data}) => {  
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        window.scrollTo(0, 0);
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
    const infoText = <div>
    <span style={{ fontSize: '28px' }}>มีจุดประสงค์</span><br/>&emsp; เป็นศูนย์รวบรวมและเผยแพร่สถิติข้อมูลต่างๆ ซึ่งเกี่ยวกับมะเร็งในประเทศไทยและเพื่อติดต่อแลกเปลี่ยน
    ขอนแก่นโฮมแคร์ ให้บริการรับดูแลผู้สูงอายุและผู้มีภาวะ อัมพฤกษ์ อัมพาต ผู้อยู่ในช่วงฟื้นฟูจากการรักษา ผู้ป่วยมะเร็ง โดยเน้นให้ผู้สูงอายุรู้สึกสบายใจ อบอุ่น ด้วยบรรยากาศ กันเอง เสมือนอยู่บ้านกับบุตรหลาน ครอบครัว พร้อมสิ่งอำนวยความสะดวกครบครัน สถานที่ตั้งอยู่ใกล้ โรงพยาบาล เดินทางสะดวก จึงสามารถวางใจในกรณีที่เกิดเหตฉุกเฉินขึ้นได้
    <br/>


    
    

  </div>
    const infolocal = <div>
  580 หมู่ 10 บ้านคำไฮ ต.บ้านเป็ด อ.เมือง จ.ขอนแก่น 40000 <br/> Thailand, Khon Kaen
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
                    <Slide13 />
                </div>
                <div className="Info-data"> 
                    <Info img="https://drive.google.com/uc?id=18EuafBqoYD_bJq45o_bziLecksBykk2H" name="ขอนแก่นโฮมแคร์" info={infoText}/>
                    <Contect info1="" info2="088 066 1499" info3={infolocal} link="https://khonkaenhomecare.com/?fbclid=IwAR2JjL8je8o-LbUGyvHIOR6DADyPJi695cMhg5y_zIQ8BaaECIgIRR7WwAs" link1="https://www.facebook.com/homecarekk/?locale=th_TH"/>
                    <OtherPage data={data}/>
                </div>
                
            </div>
        )}
        
            
    </div>   
    )
} 
export default Page13;
