import "../css/Article.css";

function Article({ data }){
    return(
        <div className="article_box">
            <span className="article_title">{data?.title}</span>
            <span className="article_content">{data?.content}</span>
        </div>
    );
};

export default Article;