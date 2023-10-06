import Logo from './image/logo.png'

import './info.css'
const info =() => {
    return (
        <div className="info-data"> 
            <img src={Logo} alt="Logo"  />
            <p className='info-p'> 
                MERITECT เป็นเว็ปไซต์ที่เอาไว้รวบรวมมูลนิธิต่างๆ
                <br/>โดยผู้บริจาคสามารถดูข้อมูลและติดต่อขอบริจาค
                <br/>สิ่งของให้กับมูลนิธิต่างๆได้โดยตรง 
            </p>
            <button className='info-button'>ร่วมบริจาค</button>
        </div>
    )
}
export default info; 