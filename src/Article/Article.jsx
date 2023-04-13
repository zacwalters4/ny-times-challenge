import './Article.css';

function Article({ article }) {

    const date = new Date(article['published_date'])

    return (
    
      <a href={article.url}>
        <div className="article">
            <div className="article-image"
                style={{backgroundImage: `url(${article.multimedia[0].url})`}}

            >
                <p>{article.section.toUpperCase()}</p>
            </div>
            <h2>{article.title}</h2>
            <p>{article.byline}</p>
            <p>{date.toDateString()}</p>
        </div>
      </a>
  );
}

export default Article;
