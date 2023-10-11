import "./Footer.css"
const Footer =()=> { 
    return(
        <div> 
            <div className="contect"> 
                <div className="contect-Name"> 
                    <h1> Contact us </h1>
                </div>
                <div className="contect-info"> 
                    <div className="contect-info-1">
                        
                        <p> <span>ที่อยู่ :</span> 123 หมู่ 16 ถนนมิตรภาพ ตำบลในเมือง <br/>&emsp;&emsp; อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40002<br/> </p>
                       
                    </div>
                    <div className="contect-info-2">
                        <p> <span>เบอร์โทร : </span>091-234-5678 </p>
                    </div>
                    <div className="contect-info-3">
                        
                        <p><span>Email : </span>meritact@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;
