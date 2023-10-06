import React, { useState } from 'react';
import LogoSearch from '../image/magnifier1.png';
import './foundation.css';




import Foun_1 from './foun_1.js';

const Foundation = () => { 
    const [data1, setData1] = useState('');
    const inputData1 = (event) => { 
        setData1(event.target.value);
        console.log(event.target.value);
    }
    
    const data = [
        
        {image:"https://drive.google.com/uc?id=1dCi8KvlNGD9AgUFhly7A-GkCMyBZ3S4e" ,name: "มูลนิธิเพื่อสุนัขในซอย, ประเทศไทย               (Soi Dog - in Thai)" ,link:"/Page1"}, 
        {image:"https://drive.google.com/uc?id=1cQ7jNFwmwYgVbo1KemHKgKaAbcLFDtQD" ,name: "มูลนิธิมะเร็งท่อน้ำดี คณะแพทยศาสตร์ มข." ,link:"/Page2"},
        {image:"https://drive.google.com/uc?id=18J3dXmeDKze-6aUKRbcvU1BQR-QjTiyB" ,name: "บ้านพักคนชรา  นักบุญโยเซฟ ขอนแก่น" ,link:"/Page3"},
        {image:"https://drive.google.com/uc?id=1mjCt0AWfIf4158qSq4bgkP5AFzN5PZ_X" ,name: "มูลนิธิเครือข่ายมะเร็ง" ,link:"/Page4"},
        {image:"https://drive.google.com/uc?id=1zWNk0JOjwRQ6TWIUusIPAHqMKyARL2gl" ,name: "มูลนิธิตะวันฉายเพื่อผู้ป่วยปากแหว่งเพดานโหว่และพิการทางศีรษะและใบหน้า" ,link:"/Page5"},
        {image:"https://drive.google.com/uc?id=1nk-X0LYrA_tWdEBavLdWqXpPMc1YAr5V" ,name: "saved souls foundation" ,link:"/Page6"},
        {image:"https://drive.google.com/uc?id=1gBqLDgxS01bRHssdf4I6bMxGXDs2h8sp" ,name: "มูลนิธิบ้านสงเคราะห์สัตว์พิการ (home4animals)" ,link:"/Page7"},
        {image:"https://drive.google.com/uc?id=1bj2UWQKzpnMKwL-o39kDAyvYfSrRqfID" ,name: "มูลนิธิช่วยเหลือเด็ก  (บ้านลูกรัก)" ,link:"/Page8"},
        {image:"https://drive.google.com/uc?id=1pAxx-Y_zBvoLzRmefxPoACq442fHyhYu" ,name: "บ้านพักเด็กและครอบครัว จ.ขอนแก่น" ,link:"/Page9"},
        {image:"https://drive.google.com/uc?id=1juw8MH6aXFgY8UsCGSSpEpgf3-HQeUSU" ,name: "มูลนิธิบ้านแห่งความเมตตา" ,link:"/Page10"},
        {image:"https://drive.google.com/uc?id=1hIKo8UmOABYXYPMPlJVu6etWnNY8UqrY" ,name: "สถานสงเคราะห์เด็กบ้านแคนทอง  จ.ขอนแก่น" ,link:"/Page11"},
        {image:"https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" ,name: "สถาบันมะเร็งแห่งชาติ" ,link:"/Page12"}
    ]   
    const data_1 = [
        {image:"https://drive.google.com/uc?id=1juw8MH6aXFgY8UsCGSSpEpgf3-HQeUSU" ,name: "มูลนิธิบ้านแห่งความเมตตา" ,link:"https://www.facebook.com/mana.patt.3"},
        {image:"https://drive.google.com/uc?id=1bj2UWQKzpnMKwL-o39kDAyvYfSrRqfID" ,name: "มูลนิธิช่วยเหลือเด็ก  (บ้านลูกรัก)" ,link:"https://www.facebook.com/mana.patt.3"},
        {image:"https://drive.google.com/uc?id=1pAxx-Y_zBvoLzRmefxPoACq442fHyhYu" ,name: "บ้านพักเด็กและครอบครัว จ.ขอนแก่น" ,link:"https://www.facebook.com/mana.patt.3"},
        {image:"https://drive.google.com/uc?id=1hIKo8UmOABYXYPMPlJVu6etWnNY8UqrY" ,name: "สถานสงเคราะห์เด็กบ้านแคนทอง  จ.ขอนแก่น" ,link:"https://www.facebook.com/mana.patt.3"},
        {image:"https://drive.google.com/uc?id=1zWNk0JOjwRQ6TWIUusIPAHqMKyARL2gl" ,name: "มูลนิธิตะวันฉายเพื่อผู้ป่วยปากแหว่งเพดานโหว่และพิการทางศีรษะและใบหน้า" ,link:"https://www.facebook.com/mana.patt.3"}

    ]
    const allOptionsData = {
         
        'มูลนิธิเด็ก': data_1,
        'มูลนิธิสัตว์': data_1,  // ตัวอย่างตัวเลือกอื่น ๆ
        'มูลนิธิผู้สูงอายุ': data_1
        // เพิ่มตัวเลือกเพิ่มเติมตามต้องการ
      };
    const selectedData = allOptionsData[data1] || data;
    
        
        
    return (
        
        
        <div className='body-web' >
            <h1 className='name-foun'>รายชื่อมูลนิธิ</h1>
            <div className="select-mode"> 
                <select className='minimal' onChange={inputData1} >
                    <option className='select-icon' value="ไม่มี">.....เลือกประเภท</option>
                    <option className='select-icon' value="มูลนิธิเด็ก">มูลนิธิเด็ก</option>
                    <option className='select-icon' value="มูลนิธิสัตว์">มูลนิธิสัตว์</option>
                    <option className='select-icon' value="มูลนิธิผู้สูงอายุ">มูลนิธิผู้สูงอายุ</option>
                </select>
                
            </div>
            <div className="input-search"> 
                <img src={LogoSearch} alt="search" />
                <input type="text" placeholder="ค้นหา" />
            </div>
            <div className='grid-layout' style={{ whiteSpace: 'pre-wrap' }} > 
            {selectedData.map((item,index) => {
    return (
        <Foun_1 key={index} image={item.image} name={item.name} link={item.link} />
    )
})}
            </div>
            <div className='button-more'>
                <button className='button-data'> ดูเพิ่มเติม</button>
                </div>
        </div>
    ) 
}

export default Foundation;
