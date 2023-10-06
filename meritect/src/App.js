
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
import { Routes, Route } from 'react-router';
function App() {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/Page5" element={<Page5 />} />
        <Route path="/Page6" element={<Page6 />} />
        <Route path="/Page7" element={<Page7 />} />
        <Route path="/Page8" element={<Page8 />} />
        <Route path="/Page9" element={<Page9 />} /> 
        <Route path="/Page10" element={<Page10 />} />
        <Route path="/Page11" element={<Page11 />} />
        <Route path="/Page12" element={<Page12 />} />
        <Route path="/Page13" element={<Page13 />} />
        <Route path="/Page14" element={<Page14 />} />
        <Route path="/Page15" element={<Page15 />} />
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


