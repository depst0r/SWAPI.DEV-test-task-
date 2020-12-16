import React, {useState ,useEffect } from 'react'
import './FilmsList.css'
import { Spinner } from '../Spinner/Spinner'

export const FilmsList = () => {

    const [films, setFilms] = useState('')

    useEffect(() => {
       fetch('https://swapi.dev/api/films/')
        .then(res => res.json())
        .then(res => setFilms(res.results))
    }, [])

    return<>
        <div>
            {films ? films.map((film, index) => {
                return (
                    <ul className="item-list list-group" key={index}>
                        <li 
                        className="list-group-item"
                        >
                            {film.title}
                        </li>
                    </ul>
                )
            }): <Spinner/> }
        </div>
    </>
}