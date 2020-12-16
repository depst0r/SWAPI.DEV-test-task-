import React, { useState, useEffect } from 'react'
import './FilmsDetails.css'

export const FilmsDetails = ({filmIndex}) => {

    const [film, setFilm] = useState()

    // useEffect(() => {
    //     fetch(`https://swapi.dev/api/films/${filmIndex + 1}/`)
    //     .then(res => res.json())
    //     .then(res => setFilm(res))
    //     console.log(film);
    // }, [])

    

    return<>
    <div className="card">
    <img 
        className="card-img-top" 
        src="https://media.comicbook.com/2020/07/star-wars-skywalker-saga-wallpaper-1231363.jpeg?auto=webp&width=1280&height=720&crop=1280:720,smart" 
        alt="poster"/>
        <div className="card-body">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <h6>Title</h6>
            </li>
            <li className="list-group-item">
                <p>Director</p>
                <p>Producer</p>
            </li>
            <li className="list-group-item">
                Relise date
            </li>
            <li className="list-group-item">
                Caracters
            </li>
            <li className="list-group-item">
                Planets
            </li>
            <li className="list-group-item">
                Starships
            </li>
            <li className="list-group-item">
                vehicles
            </li>
            <li className="list-group-item">
                species
            </li>
        </ul>  
    </div>
  </div>
</>
}