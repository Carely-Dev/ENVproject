import Data from "./data.js"
const datatest = ({id}) => { 
    return (
        <div> 
            <p> 
                Hello world
                {Data[id].name}
            </p>
        </div>
    )
}   
export default datatest;