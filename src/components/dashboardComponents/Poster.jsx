 import { useState } from "react";
 import ReactDOM from "react-dom/client";

import poster0 from "../../assets/photos/poster0.jpg";
import poster1 from "../../assets/photos/poster1.jpg";
import poster2 from "../../assets/photos/poster2.jpg";


 function Poster(){

    const postersImg = [poster0, poster1, poster2];

    const [poster, setPoster] = useState(postersImg[0]);

    const pickRandomImg = ()=>{
       setPoster( postersImg[Math.floor(Math.random() * postersImg.length )]);

    };

    return(

        <div className="poster">
            <img src={poster} alt="" onClick={pickRandomImg} />
        </div>

    );

 }

 export default Poster