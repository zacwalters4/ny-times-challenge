import Article from '../Article/Article'
import Header from '../Header/Header'
import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])

  const filterArticles = (filter) => {
    if(filter === "none") {
      setFilteredArticles(articles)
    }
    else {
      setFilteredArticles([...articles.filter(article => article.section === filter)])
    }
  }

  useEffect(()=> {
    fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=BdhaPxOrbOcoj7YfGI0QnMsqkl4Gy2Z4')
      .then(response => response.json())
      .then(data => {
        setArticles(data.results)
        setFilteredArticles(data.results)
      })
  }, [])
  
  return (
    <main>
      <Header articles={articles} filterArticles={filterArticles}/>
      <div className="articles">
        {filteredArticles.length && filteredArticles.map((article, index) => {
          if(article.url === 'null' || article.section === 'admin') {
            return 
          }
          return (
            <Article article={article} key={index} />
          )
        })}
      </div>
    </main>
  );
}

export default App;
