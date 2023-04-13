import Search from '../Search/Search'
import './Header.css'

function Header({articles}) {
  
  return (
    <header>
        <h1>NY Times News Reader</h1>
        <Search articles={articles}/>
    </header>

  )
}

export default Header