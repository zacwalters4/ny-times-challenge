import './Article.css';

function Article({ article }) {

    console.log(article)
  return (
    
      <a href={article.url}>
        <div className="article">
            <img 
                src={article.multimedia[0].url}
            />
            <h2>{article.title}</h2>
            <p>{article.section}</p>
        </div>
      </a>
  );
}

export default Article;
