import React, { useState, useEffect } from 'react'
import './FilmsDiteils.css'

export const FilmsDiteils = ({filmIndex}) => {

    const [film, setFilm] = useState()

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${filmIndex + 1}/`)
        .then(res => res.json())
        .then(res => setFilm(res))
    })

    

    return<>
    <div className="card">
    <img 
        className="card-img-top" 
        src="https://media.comicbook.com/2020/07/star-wars-skywalker-saga-wallpaper-1231363.jpeg?auto=webp&width=1280&height=720&crop=1280:720,smart" 
        alt="poster"/>
        <div className="card-body">
        <ul className="list-group list-group-flush">
        
       
            
                <li className="list-group-item">{film.title}</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
 
        
        </ul>  
    </div>
  </div>
</>
}