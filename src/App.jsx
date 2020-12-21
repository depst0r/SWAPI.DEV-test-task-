import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FilmsDetails } from './Components/FilmsDetails/FilmsDetails';
import { FilmsList } from './Components/FilmsList/FilmsList'
import { FormReview } from './Components/FormReview/FormReview'
import { Link, Switch, Route } from 'react-router-dom'


function App() {

  const [selected, setSelected] = useState(null)

const filmSelected = id => {
    setSelected(id)
}

  return (
    <>
      <div className="container">
      <div className="row">
      <div className="col-sm">
        <FilmsList filmSelected={filmSelected}/>
        <button className='btn btn-danger'>
          <Link to='/review' style={{textDecoration: 'none', color: 'white'}}> 
              Review
          </Link>
        </button>
        <Switch>
        <Route path='/review' component={ FormReview }/>
      </Switch>
      </div>
      <div className="col-sm">
        <FilmsDetails filmIndex={selected}/>
      </div>
    </div>
  </div>
</>
  );
}

export default App;
