import React, { useState, useEffect } from 'react'
import './FilmsDetails.css'
import { PoPup } from '../PoPup/PoPup'
import { Spinner } from '../Spinner/Spinner'

export const FilmsDetails = ({filmIndex}) => {

    const [film, setFilm] = useState('')
    const [planets, setPlanets] = useState('')
    const [vehicles, setVehicles] = useState('')
    const [starships, setStarships] = useState('')
    const [species, setSpecies] = useState('')
    const [characters, setCharacters] = useState('')

    
    useEffect(() => {
         fetchFilm(filmIndex + 1)
    }, [filmIndex])

    useEffect(() => {
        fetchPromise(film.planets).then(res => setPlanets(res))
        fetchPromise(film.vehicles).then(res => setVehicles(res))
        fetchPromise(film.starships).then(res => setStarships(res))
        fetchPromise(film.species).then(res => setSpecies(res))
        fetchPromise(film.characters).then(res => setCharacters(res))
    }, [film.vehicles, film.vehicles, film.starships, film.species, film.characters])

  

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
            console.error('ERROR', error);
            <Spinner/>
        }
    }


    return<>
  <div className="card text-dark bg-light mb-3">
  <div className="card-header"><h5>{ film.title }</h5></div>
  <div className="card-body">
    <h5 className="card-title">Directed by</h5>
    <p className="card-text">
        {film.director}
        {film.producer}
    </p>
    <h5 className='card-title'>Release date</h5>
    <p className='card-text'>{film.release_date}</p>
  </div>
</div>
  <div className="card text-white bg-dark mb-3" >
  <div className="card-header">Characters</div>
  <div className="card-body">
  {characters ? characters.map((res, i) => {
        return (
            <span key={i}>{res.name} , </span>
        )
    }) : <Spinner/>}
  </div>
</div>
<div className="card text-white bg-dark mb-3" >
  <div className="card-header">Planets</div>
  <div className="card-body">
  {planets ? planets.map((res, i) => {
        return (
            <span key={i}>{res.name} , </span>
        )
    }) : <Spinner/>}
  </div>
</div>
<div className="card text-white bg-dark mb-3" >
  <div className="card-header">Starships </div>
  <div className="card-body">
  {starships ? starships.map((res, i) => {
        return (
            <span key={i}>{res.name} , </span>
        )
    }) : <Spinner/>}
  </div>
</div>
<div className="card text-white bg-dark mb-3" >
  <div className="card-header">Vehicles</div>
  <div className="card-body">
  {vehicles ? vehicles.map((res, i) => {
        return (
            <span key={i}>{res.name} , </span>
        )
    }) : <Spinner/>}
  </div>
</div>
<div className="card text-white bg-dark mb-3" >
  <div className="card-header">Species</div>
  <div className="card-body">
  {species ? species.map((res, i) => {
        return (
            <span key={i}>{res.name} , </span>
        )
    }) : <Spinner/>}
  </div>
</div>
</>
}