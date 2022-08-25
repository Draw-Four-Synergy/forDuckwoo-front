import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Word from "./Word";
import "../css/EnglishWords.css";

function EnglishWords() {
    const [wordsArr, setWordsArr] = useState(null);
    const jwt = localStorage.getItem('jwt');
    const getInfo = async() => {
        const response = await axios.get(`http://3.36.252.208:9000/words`, {
            headers: {
                "x-access-token" : jwt
            }
        });
        if(response.data.isSuccess === true){
            setWordsArr(response.data);
        }
    };

    useEffect(() => {
        getInfo();
    }, []);

    return(
        <div className="english_words_container">
            <Navbar />
            {wordsArr && wordsArr.result?.map((el)=><Word data={el}/>)}
        </div>
    );
}

export default EnglishWords;