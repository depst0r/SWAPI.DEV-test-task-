import React, { useState, useEffect } from 'react'
import './FilmsDetails.css'
import { Spinner } from '../Spinner/Spinner'

export const FilmsDetails = ({filmIndex}) => {

    const [film, setFilm] = useState([])
    const [data, setData] = useState([])

    
    useEffect(() => {
         fetchFilm(filmIndex + 1)
    }, [filmIndex])



    useEffect(() => {
      promisesAll( 
        {
          starships: film.starships, 
          planets: film.planets, 
          vehicles: film.vehicles,
          species: film.species,
          characters: film.characters
        }
      )
    }, [film] )

    console.log('jhhjjhj',film);

    const fetchFilm = id => {
        fetch(`https://swapi.dev/api/films/${id}/`)
        .then(res => res.json())
        .then(res => setFilm(res))
    }

  const  promisesAll = object => {
    if (film.length === 0) {
      return <Spinner/>
    }
   Promise.all(
      Object.values(object).map((urls, index) => {
        return Promise.all(urls.map(url => {
          return fetch(url).then(res => res.json())
        })).then(values => {
          const key = Object.keys(object)[index]
          return {[key]: values}
        })
      })
  ).then(values => {
    setData(values.reduce((obj, next) => {
      const key = Object.keys(next)[0]
      return {...obj, [key]: next[key]}
    }, {}))

  })
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
  {!data.characters ? <Spinner/> : data.characters.map((res, i) => {
          return (
            <span key={i}>{res.name} </span>
          )
        })}

  </div>
</div>
<div className="card text-white bg-dark mb-3" >
  <div className="card-header">Planets</div>
  <div className="card-body">
  {!data.planets ? <Spinner/> : data.planets.map((res, i) => {
          return (
            <span key={i}>{res.name}</span>
          )
        })}
  </div>
</div>
<div className="card text-white bg-dark mb-3" >
  <div className="card-header">Starships </div>
  <div className="card-body">
  {!data.starships ? <Spinner/> : data.starships.map((res, i) => {
          return (
            <span key={i}>{res.name}</span>
          )
        })}
  </div>
</div>
<div className="card text-white bg-dark mb-3" >
  <div className="card-header">Vehicles</div>
  <div className="card-body">
  {!data.vehicles ? <Spinner/> : data.vehicles.map((res, i) => {
          return (
            <span key={i}>{res.name}</span>
          )
        })}
  </div>
</div>
<div className="card text-white bg-dark mb-3" >
  <div className="card-header">Species</div>
  <div className="card-body">
  {!data.species ? <Spinner/> : data.species.map((res, i) => {
          return (
            <span key={i}>{res.name}</span>
          )
        })}
  </div>
</div>
</>
}