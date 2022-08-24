import React, { useEffect, useState } from "react";
import "../css/Splash.css";

const Splash = () => {
  const [count, setCount] = useState(0);

  const timeout = () => {
    setTimeout(() => {
      setCount(count + 1);
      console.log(count);
      window.location.replace("/home");
    }, 3000);
  };

  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="Splash">
        <div className="splash-text-wrap">
          <div class="splash-text">TIME.zip</div>
        </div>
      </div>
    </>
  );
};

export default Splash;
