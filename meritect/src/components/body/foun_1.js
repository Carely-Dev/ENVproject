import './css/foun_1.css'
import PageHome from '../../PageHome.js';
import Page1 from "../Info/Page1.js"
import { Link } from 'react-router-dom'
const foun_1 =(props) => {
    const { image,name,link } = props;
    
    return (
            
            <div className="box-detail-1">
                
                <li className='list-data-1'> 
                    <div className="img-detail-1">
                        <img src={image} alt="Logo"/>
                    </div>
                    <div className='detail-1'>
                        <div className="name-detail-1">
                            <p>{name}</p>
                        </div>
                        
                        <div className="detail-data-1"> 
                                <div className="detail-1-a">
                                    <Link to={link} style={{marginLeft:'10px'}}>รายละเอียด</Link>
                                    
                                </div>
                        </div>
                    
                    
                </div>
                
            </li>
        </div>
        
    ) 
    
}
export default foun_1;