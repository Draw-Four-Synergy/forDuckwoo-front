import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Nproduct from "./Nproduct";


function Scrap(){
    const [newsArr, setNewsArr] = useState(null);
    const jwt = localStorage.getItem('jwt');
    const getInfo = async() => {
        const response = await axios.get(`http://3.36.252.208:9000/users/scrap/news`, {
            headers: {
                "x-access-token" : jwt
            }
        });
        if(response.data.isSuccess === true){
            setNewsArr(response.data);
        }
    };

    useEffect(() => {
        getInfo();
    }, []);

    return(
        <div>
            <Navbar />
            {newsArr && newsArr.result?.map((el)=><Nproduct data={el}/>)}
        </div>
    );
};

export default Scrap;