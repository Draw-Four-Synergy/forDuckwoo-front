import React from 'react';
import '../css/Nproduct.css';
import eye from "../img/eye.png";
import scrap from "../img/scrap.png";


function Nproduct(){
    return(
        <><div className="viewscrap">
            <img src={eye} alt="" width="20" height="20"></img>
            <p> 118 </p>
            <img src={scrap} alt="" width="20" height="20"></img>
            <p> 50 </p>
        </div>
        <div className="nproduct">
            <div className="nproduct_info">
                <p>제목</p>
            </div>

            <button>View</button>
        </div>
        </>
    );
}

export default Nproduct;