import './Search.css'
import { useState, useEffect } from 'react'

function Search({articles}) {

    const createOptions = () => {
        let sections = []
        return articles.map((article, index) => {
            if(!sections.includes(article.section)) {
                sections.push(article.section)
                return <option key={index} value={article.section}>{article.section.toUpperCase()}</option>
            }
        })
    }

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <select name="sections" onChange={handleChange}>
            <option value="none">NONE</option>
            {createOptions()}
        </select>

  )
}

export default Search