import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nproduct.css';
import eye from "../img/eye.png";
import scrap from "../img/scrap.png";


function Nproduct({data, language}){
    return(
        <><div className="viewscrap">
            <img src={eye} alt="" width="20" height="20"></img>
            <p> {data?.view} </p>
            <img src={scrap} alt="" width="20" height="20"></img>
            <p> {data?.scrap} </p>
        </div>
        <div className="nproduct">
            <div className="nproduct_info">
                <p>{data?.title}</p>
            </div>
            {language === "kor" && 
                <>
                    <button>
                        <Link 
                            to="/news" 
                            state={{category:"news", id:data?.id}} 
                            style={{textDecoration: 'inherit', color: 'inherit'}}>
                            View
                        </Link>
                    </button>
                </>
            }
            {language === "eng" && 
                <>
                    <button>
                        <Link 
                            to="/english_news" 
                            state={{category:"en_news", id:data?.id}} 
                            style={{textDecoration: 'inherit', color: 'inherit'}}>
                            View
                        </Link>
                    </button>
                </>
            }

            {/* {language === "eng" && <Link to="/english_news" category="en_news" id={data?.id}>View</Link>} */}
            {/* {language === "audio" && <Link to="/audio" data={data}>View</Link>} */}
            
            {/* {language === "kor" && <button onClick={() => (window.location.href = "/news")}>View</button>} */}
            {/* {language === "eng" && <button onClick={() => (window.location.href = "/english_news")}>View</button>} */}
            {/* {language === "audio" && <button onClick={() => (window.location.href = "/audio")}>View</button>} */}


        </div>
        </>
    );
}

export default Nproduct;