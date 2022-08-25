import "../css/Word.css";

function Word({ data }){
    return (
        <div className="word_box">
            <span className="word">{data?.word}</span>
            <span className="meaning">1.{data?.meaning1}</span>
            <span className="meaning">2.{data?.meaning2}</span>
        </div>
    );
};

export default Word;