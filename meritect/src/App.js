
import './App.css'
import PageHome from './PageHome.js';
import Page1 from "./components/Info/Page1.js"
import Page2 from "./components/Info/Page2.js"
import Page3 from "./components/Info/Page3.js"
import Page4 from "./components/Info/Page4.js"
import Page5 from "./components/Info/Page5.js"
import Page6 from "./components/Info/Page6.js"
import Page7 from "./components/Info/Page7.js"
import Page8 from "./components/Info/Page8.js"
import Page9 from "./components/Info/Page9.js"
import Page10 from "./components/Info/Page10.js"
import Page11 from "./components/Info/Page11.js"
import Page12 from "./components/Info/Page12.js"
import Page13 from "./components/Info/Page13.js"
import Page14 from "./components/Info/Page14.js"
import Page15 from "./components/Info/Page15.js"
import Page16 from "./components/Info/Page16.js"
import Page17 from "./components/Info/Page17.js"
import Page18 from "./components/Info/Page18.js"
import Page19 from "./components/Info/Page19.js"
import Page20 from "./components/Info/Page20.js"
import data from './components/data/data';
import { Routes, Route } from 'react-router';
function App() {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<PageHome />} />
        {/* <Route path="/" element={<Datatest />} /> */}
        <Route path="/มูลนิธิเพื่อสุนัขในซอย, ประเทศไทย (Soi Dog - in Thai)" element={<Page1 data={data[1]} />} />
        <Route path="/มูลนิธิมะเร็งท่อน้ำดีคณะแพทยศาสตร์ มข." element={<Page2 data={data[2]}/>} />
        <Route path="/บ้านพักคนชรานักบุญโยเซฟขอนแก่น" element={<Page3 data={data[3]}/>} />
        <Route path="/มูลนิธิเครือข่ายมะเร็ง" element={<Page4 data={data[4]}/>} />
        <Route path="/มูลนิธิตะวันฉายเพื่อผู้ป่วยปากแหว่งเพดานโหว่และพิการทางศีรษะและใบหน้า" element={<Page5 data={data[5]}/>} />
        <Route path="/saved souls foundation" element={<Page6 data={data[6]} />} />
        <Route path="/มูลนิธิบ้านสงเคราะห์สัตว์พิการ (home4animals)" element={<Page7 data={data[7]}/>} />
        <Route path="/มูลนิธิช่วยเหลือเด็ก  (บ้านลูกรัก)" element={<Page8 data={data[8]}/>} />
        <Route path="/มูลนิธิโรคมะเร็งโรงพยาบาลศิริราช" element={<Page9 data={data[9]}/>} /> 
        <Route path="/มูลนิธิบ้านแห่งความเมตตา" element={<Page10 data={data[10]}/>} />
        <Route path="/Kitwichan Life Care" element={<Page11 data={data[11]}/>} />
        <Route path="/สถาบันมะเร็งแห่งชาติ" element={<Page12 data={data[12]}/>} />
        <Route path="/ขอนแก่นโฮมแคร์" element={<Page13 data={data[13]}/>} />
        <Route path="/มูลนิธิสายธารสุขใจ" element={<Page14 data={data[14]}/>} />
        <Route path="/FOPDEV" element={<Page15 data={data[15]}/>} />
        <Route path="/Page16" element={<Page16 />} />
        <Route path="/Page17" element={<Page17 />} />
        <Route path="/Page18" element={<Page18 />} />
        <Route path="/Page19" element={<Page19 />} />
        <Route path="/Page20" element={<Page20 />} />
      </Routes>
      
      
    </div>
  );
}

export default App;


