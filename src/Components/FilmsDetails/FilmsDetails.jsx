import React, { useState, useEffect } from 'react'
import './FilmsDetails.css'
import { PoPup } from '../PoPup/PoPup'
import { Spinner } from '../Spinner/Spinner'

export const FilmsDetails = ({filmIndex}) => {

    const [film, setFilm] = useState('')
    const [planets, setPlanets] = useState('')
    const [vehicles, setVehicles] = useState('')

    
    
    useEffect(() => {
         fetchFilm(filmIndex + 1)
    }, [filmIndex])

    useEffect(() => {
        fetchPromise(film.planets).then(res => setPlanets(res))
        fetchPromise(film.vehicles).then(res => setVehicles(res))
    }, [film.vehicles, film.vehicles])

  

    const fetchFilm = (id) => {
        fetch(`https://swapi.dev/api/films/${id}/`)
        .then(res => res.json())
        .then(res => setFilm(res))
    }


    const fetchPromise = async urls => {
        try {
            const response = await Promise.all(
                urls.map(url => fetch(url).then(res => res.json()))
            )
            return response
        } catch (error) {
            <Spinner/>
        }
    }


    return<>
    <div className="card">
    <img 
        className="card-img-top" 
        src="https://media.comicbook.com/2020/07/star-wars-skywalker-saga-wallpaper-1231363.jpeg?auto=webp&width=1280&height=720&crop=1280:720,smart" 
        alt="poster"/>
        <div className="card-body">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <h6>{ film.title }</h6>
            </li>
            <li className="list-group-item">
                <p>{film.director}</p>
                <p>{film.producer}</p>
            </li>
            <li className="list-group-item">
                {film.release_date}
            </li>
            <li className="list-group-item">
                {planets ? planets.map((res, i) => {
                    return (
                        <p key={i}>{res.name}</p>
                    )
                }) : null}
            </li>
            <li className="list-group-item">
            </li>
            <li className="list-group-item">
                {film.starships}
            </li>
            <li className="list-group-item">
            {vehicles ? vehicles.map((res, i) => {
                    return (
                        <p key={i}>{res.name}</p>
                    )
                }) : null}
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