import "./Other.css";
import Foun_1 from '../body/foun_1.js';
 


const Other =({data})=> { 

    return (
        <div> 
            <div className="box-other"> 
            <div className="name"> 
                <p>มูลนิธิที่แนะนำ</p>  
            </div>
            
            <div className="data" >
                
                {data.map((data) => {
                    return (
                        <Foun_1 image={data.image} name={data.name} link={data.link} />
                    )
                })}
            </div>
        </div>
        </div>

    ) 

}
export default Other;