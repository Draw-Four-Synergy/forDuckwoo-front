import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Article from "./Article";
import "../css/Scrap.css";

function Scrap() {
  const [newsArr, setNewsArr] = useState(null);
  const jwt = localStorage.getItem("jwt");
  const getInfo = async () => {
    const response = await axios.get(
      `http://3.36.252.208:9000/users/scrap/news`,
      {
        headers: {
          "x-access-token": jwt,
        },
      }
    );
    console.log(response.data);
    if (response.data.isSuccess === true) {
      setNewsArr(response.data);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="scrap_content">
      <div className="scrap_container">
        <Navbar />
        {newsArr && newsArr.result?.map((el) => <Article data={el} />)}
      </div>
    </div>
  );
}

export default Scrap;
