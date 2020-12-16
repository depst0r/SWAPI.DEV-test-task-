import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FilmsDiteils } from './Components/FilmsDiteils/FilmsDiteils';
import { FilmsList } from './Components/FilmsList/FilmsList'

function App() {

  const [selected, setSelected] = useState(null)

const filmSelected = id => {
    setSelected(id)
}

  return (
    <div className="container">
      <div className='row'>
      <div className="col-sm">
      <FilmsDiteils filmIndex={selected}/>
      </div>
      </div>
      <div className='row'>
      <div className="col-sm">
      <FilmsList filmSelected={filmSelected}/>
      </div>
      </div>
    </div>
  );
}

export default App;
