const infoText = <div>
        มูลนิธิโรคมะเร็ง <br/>โรงพยาบาลศิริราช
  </div>
  const data1 = [
        
    {image:"https://drive.google.com/uc?id=1dCi8KvlNGD9AgUFhly7A-GkCMyBZ3S4e" ,name: "มูลนิธิเพื่อสุนัขในซอย, ประเทศไทย               (Soi Dog - in Thai)" ,link:"/มูลนิธิเพื่อสุนัขในซอย, ประเทศไทย (Soi Dog - in Thai)"}, 
    {image:"https://drive.google.com/uc?id=1cQ7jNFwmwYgVbo1KemHKgKaAbcLFDtQD" ,name: "มูลนิธิมะเร็งท่อน้ำดี คณะแพทยศาสตร์ มข." ,link:"/มูลนิธิมะเร็งท่อน้ำดีคณะแพทยศาสตร์ มข."},
    {image:"https://drive.google.com/uc?id=18J3dXmeDKze-6aUKRbcvU1BQR-QjTiyB" ,name: "บ้านพักคนชรา  นักบุญโยเซฟ ขอนแก่น" ,link:"/บ้านพักคนชรานักบุญโยเซฟขอนแก่น"},
    {image:"https://drive.google.com/uc?id=1mjCt0AWfIf4158qSq4bgkP5AFzN5PZ_X" ,name: "มูลนิธิเครือข่ายมะเร็ง" ,link:"/มูลนิธิเครือข่ายมะเร็ง"},
    {image:"https://drive.google.com/uc?id=1zWNk0JOjwRQ6TWIUusIPAHqMKyARL2gl" ,name: "มูลนิธิตะวันฉายเพื่อผู้ป่วยปากแหว่งเพดานโหว่และพิการทางศีรษะและใบหน้า" ,link:"/มูลนิธิตะวันฉายเพื่อผู้ป่วยปากแหว่งเพดานโหว่และพิการทางศีรษะและใบหน้า"},
    {image:"https://drive.google.com/uc?id=1nk-X0LYrA_tWdEBavLdWqXpPMc1YAr5V" ,name: "saved souls foundation" ,link:"/saved souls foundation"},
    {image:"https://drive.google.com/uc?id=1gBqLDgxS01bRHssdf4I6bMxGXDs2h8sp" ,name: "มูลนิธิบ้านสงเคราะห์สัตว์พิการ (home4animals)" ,link:"/Page7"},
    {image:"https://drive.google.com/uc?id=1bj2UWQKzpnMKwL-o39kDAyvYfSrRqfID" ,name: "มูลนิธิช่วยเหลือเด็ก  (บ้านลูกรัก)" ,link:"/Page8"},
    {image:"https://drive.google.com/uc?id=1c5FHXVHWjsW_r4Yb80oZW8bjHB82kY_f" ,name: infoText ,link:"/Page9"},
    {image:"https://drive.google.com/uc?id=1juw8MH6aXFgY8UsCGSSpEpgf3-HQeUSU" ,name: "มูลนิธิบ้านแห่งความเมตตา" ,link:"/Page10"},
    {image:"https://drive.google.com/uc?id=1tkKApDrKH-Mr-0DQT2nc9r8ZDx6oG6E9" ,name: "Kitwichan Life Care" ,link:"/Page11"},
    {image:"https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" ,name: "สถาบันมะเร็งแห่งชาติ" ,link:"/Page12"},
    {image:"https://drive.google.com/uc?id=18EuafBqoYD_bJq45o_bziLecksBykk2H" ,name: "ขอนแก่นโฮมแคร์" ,link:"/Page13"},
    {image:"https://drive.google.com/uc?id=1CDOEQaElKAzMkdRz9FrYd9o_1YiBf8eG" ,name: "มูลนิธิสายธารสุขใจ" ,link:"/Page14"},
    {image:"https://drive.google.com/uc?id=1KXeBY74jRuRaZnjdiD38oQCJPeMdz_Uf" ,name: "FOPDEV" ,link:"/Page15"}
] 

const data ={  
    1:[
        {image:"https://drive.google.com/uc?id=1nk-X0LYrA_tWdEBavLdWqXpPMc1YAr5V" ,name: "saved souls foundation" ,link:"/saved souls foundation"},
        {image: "https://drive.google.com/uc?id=1gBqLDgxS01bRHssdf4I6bMxGXDs2h8sp",name: "มูลนิธิบ้านสงเคราะห์สัตว์พิการ (home4animals)" ,link:"/Page7"},
        {image: "https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" ,name: "สถาบันมะเร็งแห่งชาติ" ,link:"/Page12"}
       
    ] ,
    2:[
        {image:"https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" ,name: "สถาบันมะเร็งแห่งชาติ" ,link:"/Page12"},
        {image:"https://drive.google.com/uc?id=1mjCt0AWfIf4158qSq4bgkP5AFzN5PZ_X" ,name: "มูลนิธิเครือข่ายมะเร็ง" ,link:"/มูลนิธิเครือข่ายมะเร็ง"},
        {image:"https://drive.google.com/uc?id=1c5FHXVHWjsW_r4Yb80oZW8bjHB82kY_f" ,name: infoText ,link:"/Page14"},
    ],
    3:[
        {image:"https://drive.google.com/uc?id=18EuafBqoYD_bJq45o_bziLecksBykk2H" ,name: "ขอนแก่นโฮมแคร์" ,link:"/Page13"},
    {image:"https://drive.google.com/uc?id=1CDOEQaElKAzMkdRz9FrYd9o_1YiBf8eG" ,name: "มูลนิธิสายธารสุขใจ" ,link:"/Page14"},
    {image:"https://drive.google.com/uc?id=1KXeBY74jRuRaZnjdiD38oQCJPeMdz_Uf" ,name: "FOPDEV" ,link:"/Page15"}
] ,
    4:[
        {image:"https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" ,name: "สถาบันมะเร็งแห่งชาติ" ,link:"/Page12"},
        {image:"https://drive.google.com/uc?id=1cQ7jNFwmwYgVbo1KemHKgKaAbcLFDtQD" ,name: "มูลนิธิมะเร็งท่อน้ำดี คณะแพทยศาสตร์ มข." ,link:"/มูลนิธิมะเร็งท่อน้ำดีคณะแพทยศาสตร์ มข."},
        {image:"https://drive.google.com/uc?id=1c5FHXVHWjsW_r4Yb80oZW8bjHB82kY_f" ,name: infoText ,link:"/Page14"},
    ],
    5:[
        {image:"https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" ,name: "สถาบันมะเร็งแห่งชาติ" ,link:"/Page12"},
        {image:"https://drive.google.com/uc?id=1mjCt0AWfIf4158qSq4bgkP5AFzN5PZ_X" ,name: "มูลนิธิเครือข่ายมะเร็ง" ,link:"/Page4"},
        {image:"https://drive.google.com/uc?id=1c5FHXVHWjsW_r4Yb80oZW8bjHB82kY_f" ,name: infoText ,link:"/Page14"},
    ],
    6:[
        {image:"https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" ,name: "สถาบันมะเร็งแห่งชาติ" ,link:"/Page12"},
        {image:"https://drive.google.com/uc?id=1mjCt0AWfIf4158qSq4bgkP5AFzN5PZ_X" ,name: "มูลนิธิเครือข่ายมะเร็ง" ,link:"/Page4"},
        {image:"https://drive.google.com/uc?id=1c5FHXVHWjsW_r4Yb80oZW8bjHB82kY_f" ,name: infoText ,link:"/Page14"},
    ],
    7:[
        {image:"https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" ,name: "สถาบันมะเร็งแห่งชาติ" ,link:"/Page12"},
        {image:"https://drive.google.com/uc?id=1mjCt0AWfIf4158qSq4bgkP5AFzN5PZ_X" ,name: "มูลนิธิเครือข่ายมะเร็ง" ,link:"/Page4"},
        {image:"https://drive.google.com/uc?id=1c5FHXVHWjsW_r4Yb80oZW8bjHB82kY_f" ,name: infoText ,link:"/Page14"},
    ],
    8:[
        {image:"https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" ,name: "สถาบันมะเร็งแห่งชาติ" ,link:"/Page12"},
        {image:"https://drive.google.com/uc?id=1mjCt0AWfIf4158qSq4bgkP5AFzN5PZ_X" ,name: "มูลนิธิเครือข่ายมะเร็ง" ,link:"/Page4"},
        {image:"https://drive.google.com/uc?id=1c5FHXVHWjsW_r4Yb80oZW8bjHB82kY_f" ,name: infoText ,link:"/Page14"},
    ],
    9:[
        {image:"https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" ,name: "สถาบันมะเร็งแห่งชาติ" ,link:"/Page12"},
        {image:"https://drive.google.com/uc?id=1mjCt0AWfIf4158qSq4bgkP5AFzN5PZ_X" ,name: "มูลนิธิเครือข่ายมะเร็ง" ,link:"/Page4"},
        {image:"https://drive.google.com/uc?id=1c5FHXVHWjsW_r4Yb80oZW8bjHB82kY_f" ,name: infoText ,link:"/Page14"},
    ],
    10:[
        {image:"https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" ,name: "สถาบันมะเร็งแห่งชาติ" ,link:"/Page12"},
        {image:"https://drive.google.com/uc?id=1mjCt0AWfIf4158qSq4bgkP5AFzN5PZ_X" ,name: "มูลนิธิเครือข่ายมะเร็ง" ,link:"/Page4"},
        {image:"https://drive.google.com/uc?id=1c5FHXVHWjsW_r4Yb80oZW8bjHB82kY_f" ,name: infoText ,link:"/Page14"}
    ]
    
}


export default data;