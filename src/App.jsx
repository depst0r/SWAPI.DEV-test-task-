import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FilmsDetails } from './Components/FilmsDetails/FilmsDetails';
import { FilmsList } from './Components/FilmsList/FilmsList'


function App() {

  const [selected, setSelected] = useState(null)

const filmSelected = id => {
    setSelected(id)
}

  return (
    <>
    <div class="container">
  <div class="row">
    <div class="col-sm">
    <FilmsList filmSelected={filmSelected}/>
    </div>
    <div class="col-sm">
    <FilmsDetails filmIndex={selected}/>
    </div>
  </div>
</div>
</>
  );
}

export default App;
