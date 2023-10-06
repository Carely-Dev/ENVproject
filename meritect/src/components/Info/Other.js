import "./Other.css";
import Foun_1 from '../body/foun_1.js';
const data = [
    {image:"https://drive.google.com/uc?id=1nk-X0LYrA_tWdEBavLdWqXpPMc1YAr5V" ,name: "saved souls foundation" ,link:"/Page6"},
    {image:"https://drive.google.com/uc?id=1gBqLDgxS01bRHssdf4I6bMxGXDs2h8sp" ,name: "มูลนิธิบ้านสงเคราะห์สัตว์พิการ (home4animals)" ,link:"/Page7"},
    {image:"https://drive.google.com/uc?id=1dNOLcUjgWoZagaSE0d6aO1-Tyk9iaP0P" ,name: "สถาบันมะเร็งแห่งชาติ" ,link:"/Page12"}

   
]   


const Other =()=> { 
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