import React, {useState ,useEffect } from 'react'
import './FilmsDiteils.css'

export const FilmsDiteils = ({filmIndex}) => {
    return<>
    <div className="card">
        <img className="card-img-top" src="https://media.comicbook.com/2020/07/star-wars-skywalker-saga-wallpaper-1231363.jpeg?auto=webp&width=1280&height=720&crop=1280:720,smart" alt="films"/>
    <div className="card-body">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>  
    </div>
  </div>
</>
}