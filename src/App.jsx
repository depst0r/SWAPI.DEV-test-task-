import 'bootstrap/dist/css/bootstrap.css'
import { FilmsDiteils } from './Components/FilmsDiteils/FilmsDiteils';
import { FilmsList } from './Components/FilmsList/FilmsList'

function App() {
  return (
    <div className="container">
      <div className='row'>
      <div className="col-sm">
      <FilmsDiteils/>
      </div>
      </div>
      <div className='row'>
      <div className="col-sm">
      <FilmsList />
      </div>
      </div>
    </div>
  );
}

export default App;
