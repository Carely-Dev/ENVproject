import React, { useState, useEffect  } from 'react';

import './foundation.css';

import Foun_1 from './foun_1.js';
const infoText = <div>
        มูลนิธิโรคมะเร็ง <br/>โรงพยาบาลศิริราช
  </div>
const Foundation = () => { 
    const [data1, setData1] = useState('');
    const inputData1 = (event) => { 
        setData1(event.target.value);
        console.log(event.target.value);
    }
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 1000);
    }, []);
    
    const data = [
        
        {image:"https://drive.google.com/uc?id=1dCi8KvlNGD9AgUFhly7A-GkCMyBZ3S4e" ,name: "มูลนิธิเพื่อสุนัขในซอย, ประเทศไทย               (Soi Dog - in Thai)" ,link:"/มูลนิธิเพื่อสุนัขในซอย, ประเทศไทย (Soi Dog - in Thai)"}, 
        {image:"https://drive.google.com/uc?id=1cQ7jNFwmwYgVbo1KemHKgKaAbcLFDtQD" ,name: "มูลนิธิมะเร็งท่อน้ำดี คณะแพทยศาสตร์ มข." ,link:"/มูลนิธิมะเร็งท่อน้ำดีคณะแพทยศาสตร์ มข."},
        {image:"https://drive.google.com/uc?id=18J3dXmeDKze-6aUKRbcvU1BQR-QjTiyB" ,name: "บ้านพักคนชรา  นักบุญโยเซฟ ขอนแก่น" ,link:"/บ้านพักคนชรานักบุญโยเซฟขอนแก่น"},
        {image:"https://drive.google.com/uc?id=1mjCt0AWfIf4158qSq4bgkP5AFzN5PZ_X" ,name: "มูลนิธิเครือข่ายมะเร็ง" ,link:"/มูลนิธิเครือข่ายมะเร็ง"},
        {image:"https://drive.google.com/uc?id=1zWNk0JOjwRQ6TWIUusIPAHqMKyARL2gl" ,name: "มูลนิธิตะวันฉายเพื่อผู้ป่วยปากแหว่งเพดานโหว่และพิการทางศีรษะและใบหน้า" ,link:"/มูลนิธิตะวันฉายเพื่อผู้ป่วยปากแหว่งเพดานโหว่และพิการทางศีรษะและใบหน้า"},
        {image:"https://drive.google.com/uc?id=1nk-X0LYrA_tWdEBavLdWqXpPMc1YAr5V" ,name: "saved souls foundation" ,link:"/saved souls foundation"},
        {image:"https://drive.google.com/uc?id=1gBqLDgxS01bRHssdf4I6bMxGXDs2h8sp" ,name: "มูลนิธิบ้านสงเคราะห์สัตว์พิการ (home4animals)" ,link:"/มูลนิธิบ้านสงเคราะห์สัตว์พิการ (home4animals)"},
        {image:"https://drive.google.com/uc?id=1bj2UWQKzpnMKwL-o39kDAyvYfSrRqfID" ,name: "มูลนิธิช่วยเหลือเด็ก  (บ้านลูกรัก)" ,link:"/มูลนิธิช่วยเหลือเด็ก  (บ้านลูกรัก)"},
        {image:"https://drive.google.com/uc?id=1c5FHXVHWjsW_r4Yb80oZW8bjHB82kY_f" ,name: infoText ,link:"/มูลนิธิโรคมะเร็งโรงพยาบาลศิริราช"},
        
    ]   
    const data_1 = [
        {image:"https://drive.google.com/uc?id=1juw8MH6aXFgY8UsCGSSpEpgf3-HQeUSU" ,name: "มูลนิธิบ้านแห่งความเมตตา" ,link:"/มูลนิธิบ้านแห่งความเมตตา"},
        {image:"https://drive.google.com/uc?id=1bj2UWQKzpnMKwL-o39kDAyvYfSrRqfID" ,name: "มูลนิธิช่วยเหลือเด็ก  (บ้านลูกรัก)" ,link:"/มูลนิธิช่วยเหลือเด็ก  (บ้านลูกรัก)"},
        {image:"https://drive.google.com/uc?id=1pAxx-Y_zBvoLzRmefxPoACq442fHyhYu" ,name: "บ้านพักเด็กและครอบครัว จ.ขอนแก่น" ,link:"/บ้านพักเด็กและครอบครัว จ.ขอนแก่น"},
        
        {image:"https://drive.google.com/uc?id=1zWNk0JOjwRQ6TWIUusIPAHqMKyARL2gl" ,name: "มูลนิธิตะวันฉายเพื่อผู้ป่วยปากแหว่งเพดานโหว่และพิการทางศีรษะและใบหน้า" ,link:"มูลนิธิตะวันฉายเพื่อผู้ป่วยปากแหว่งเพดานโหว่และพิการทางศีรษะและใบหน้า"}

    ]
    const data_2 = [
        {image:"https://drive.google.com/uc?id=1dCi8KvlNGD9AgUFhly7A-GkCMyBZ3S4e" ,name: "มูลนิธิเพื่อสุนัขในซอย, ประเทศไทย               (Soi Dog - in Thai)" ,link:"/มูลนิธิเพื่อสุนัขในซอย, ประเทศไทย (Soi Dog - in Thai)"}, 
        {image:"https://drive.google.com/uc?id=1gBqLDgxS01bRHssdf4I6bMxGXDs2h8sp" ,name: "มูลนิธิบ้านสงเคราะห์สัตว์พิการ (home4animals)" ,link:"/มูลนิธิบ้านสงเคราะห์สัตว์พิการ (home4animals)"},
        {image:"https://drive.google.com/uc?id=1nk-X0LYrA_tWdEBavLdWqXpPMc1YAr5V" ,name: "saved souls foundation" ,link:"/saved souls foundation"}
    ]
    const data_3 = [
        {image:"https://drive.google.com/uc?id=18J3dXmeDKze-6aUKRbcvU1BQR-QjTiyB" ,name: "บ้านพักคนชรา  นักบุญโยเซฟ ขอนแก่น" ,link:"/บ้านพักคนชรานักบุญโยเซฟขอนแก่น"},
        {image:"https://drive.google.com/uc?id=1tkKApDrKH-Mr-0DQT2nc9r8ZDx6oG6E9" ,name: "Kitwichan Life Care" ,link:"/Kitwichan Life Care"},
    {image:"https://drive.google.com/uc?id=18EuafBqoYD_bJq45o_bziLecksBykk2H" ,name: "ขอนแก่นโฮมแคร์" ,link:"/ขอนแก่นโฮมแคร์"},
    {image:"https://drive.google.com/uc?id=1CDOEQaElKAzMkdRz9FrYd9o_1YiBf8eG" ,name: "มูลนิธิสายธารสุขใจ" ,link:"/มูลนิธิสายธารสุขใจ"},
    {image:"https://drive.google.com/uc?id=1KXeBY74jRuRaZnjdiD38oQCJPeMdz_Uf" ,name: "FOPDEV" ,link:"/FOPDEV"}


    ]
    const data_4 = [
        {image:"https://drive.google.com/uc?id=1c5FHXVHWjsW_r4Yb80oZW8bjHB82kY_f" ,name: infoText ,link:"/มูลนิธิโรคมะเร็งโรงพยาบาลศิริราช"},
        {image:"https://drive.google.com/uc?id=1mjCt0AWfIf4158qSq4bgkP5AFzN5PZ_X" ,name: "มูลนิธิเครือข่ายมะเร็ง" ,link:"/มูลนิธิเครือข่ายมะเร็ง"},
        {image:"https://drive.google.com/uc?id=1cQ7jNFwmwYgVbo1KemHKgKaAbcLFDtQD" ,name: "มูลนิธิมะเร็งท่อน้ำดี คณะแพทยศาสตร์ มข." ,link:"/มูลนิธิมะเร็งท่อน้ำดีคณะแพทยศาสตร์ มข."},
        
    ]   
    const allOptionsData = {
         
        'มูลนิธิเด็ก': data_1,
        'มูลนิธิสัตว์': data_2,  // ตัวอย่างตัวเลือกอื่น ๆ
        'มูลนิธิผู้สูงอายุ': data_3,
        'มูลนิธิโรคมะเร็ง': data_4,

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
                    <option className='select-icon' value="มูลนิธิโรคมะเร็ง">มูลนิธิโรคมะเร็ง</option>
                </select>
            </div>
            
            <div className='grid-layout' style={{ whiteSpace: 'pre-wrap' }} > 
            {selectedData.map((item,index) => {
    return (
        <div>
            
                <Foun_1 key={index} image={item.image} name={item.name} link={item.link} />
            
        </div>
        
    )
})}
            </div>
            <div className='button-more'>
                <a href='/รายชื่อมูลนิธิ'><button  className='button-data'>ดูเพิ่มเติม</button></a>
                </div>
        </div>
    ) 
}

export default Foundation;
