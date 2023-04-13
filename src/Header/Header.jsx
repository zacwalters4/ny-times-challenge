import Search from '../Search/Search'
import './Header.css'

function Header({articles, filterArticles}) {
  return (
    <header>
        <h1>NY Times News Reader</h1>
        <div className="filter-box">
            <p>Filter By:</p>
            <Search articles={articles} filterArticles={filterArticles}/>
        </div>
        
    </header>

  )
}

export default Header