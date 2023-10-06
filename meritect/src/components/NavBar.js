
import { Link } from 'react-router-dom';
import './NavBar.css'
import Logo from './image/logo.png'
const NavBar = () => { 
  
  return (
    <div className='nav-bar'> 
      <a href='./NavBar.js' ><img src={Logo} alt="Logo"  /></a>
      <ul className='list-nav'> 
        <li className='list-1'><Link to="/" >หน้าหลัก</Link></li>
        <li className='list-2'><a href="#">รายชื่อมูลนิธิ</a></li>
        <li className='list-3'><a href="#">ติดต่อเรา</a></li>
      </ul>
    </div>
  )
}
export default NavBar; 