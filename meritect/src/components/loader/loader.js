import React  from "react";
import { Audio } from 'react-slideshow-image';
const loader = () => {
    return (
        <div> 
            <Audio height="100" weight="100 " color="red" ariaLabel="Loading" />
        </div>
    )
}
export default loader;