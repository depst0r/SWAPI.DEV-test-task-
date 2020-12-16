import React, {useState ,useEffect } from 'react'
import './FilmsList.css'

export const FilmsList = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
       fetch('https://swapi.dev/api/films/')
        .then(res => res.json())
        .then(res => setFilms(res.results))
    }, [])

    return<>
        <div>
            {films.map(res => {
                return (
                    <ul className="item-list list-group">
                        <li className="list-group-item">
                            {res.title}
                        </li>
                    </ul>
                )
            })}
        </div>
    </>
}