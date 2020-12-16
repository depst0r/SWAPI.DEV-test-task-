import React, {useState ,useEffect } from 'react'

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
                    <h1>{res.title}</h1>
                )
            })}
        </div>
    </>
}