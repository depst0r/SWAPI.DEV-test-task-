import React, {useState ,useEffect } from 'react'
import { Spinner } from '../Spinner/Spinner'
import './FilmsList.css'

export const FilmsList = ({filmSelected}) => {

    const [films, setFilms] = useState('')

    useEffect(() => {
       fetch('https://swapi.dev/api/films/')
        .then(res => res.json())
        .then(res => setFilms(res.results))
    }, [])

    return<>
        <div>
            {films ? films.map((film, i) => {
                return (
                    <ul 
                    className="item-list list-group" 
                    key={i}
                    >
                        <li 
                        className="list-group-item"
                        onClick={() => filmSelected(i)}
                        >
                        {film.title}  
                        </li>
                    </ul>
                )
            }): <Spinner/> }
        </div>
    </>
}