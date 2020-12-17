import React, { useState, useEffect } from 'react'
import './FilmsDetails.css'
import { PoPup } from '../PoPup/PoPup'

export const FilmsDetails = ({filmIndex}) => {

    const [film, setFilm] = useState('')
    // const [test, setTest] = useState('')

    
    
    useEffect(() => {
         fetchFilm(filmIndex + 1)
         
    }, [filmIndex])

    const fetchFilm = (id) => {
        fetch(`https://swapi.dev/api/films/${id}/`)
        .then(res => res.json())
        .then(res => setFilm(res))
    }

    console.log(film);

// console.log(Object.assign({}, film.characters))


    // const r = () => {
    //     let arr = []
    //     film.characters.map(res => fetch(res).then(res => res.json()).then(res => arr.push(res.name)))
    //     setTest(arr)
    // }

    // console.log(test);

   


  
    return<>
    <div className="card">
    <img 
        className="card-img-top" 
        src="https://media.comicbook.com/2020/07/star-wars-skywalker-saga-wallpaper-1231363.jpeg?auto=webp&width=1280&height=720&crop=1280:720,smart" 
        alt="poster"/>
        <div className="card-body">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <h6>{film.title}</h6>
            </li>
            <li className="list-group-item">
                <p>{film.director}</p>
                <p>{film.producer}</p>
            </li>
            <li className="list-group-item">
                {film.release_date}
            </li>
            <li className="list-group-item">
                {film.characters}
            </li>
            <li className="list-group-item">
                {film.planets}
            </li>
            <li className="list-group-item">
                {film.starships}
            </li>
            <li className="list-group-item">
                {film.vehicles}
            </li>
            <li className="list-group-item">
                {film.species}
            </li>
        </ul>  
    </div>
    <PoPup/>
  </div>
</>
}