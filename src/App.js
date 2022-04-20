import './App.css';
import Twenty from './component/Twenty';
import Ten from './component/Ten';
import Five from './component/Five';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'


library.add( faArrowRotateRight)

function App() {
  const [find, setFind] = useState('one');
  return (
    <div className="App">
      <nav>
        <h1>Pomodoro 🍅</h1>
        {/* <FontAwesomeIcon icon="tomato" /> */}
  
        <button class="btn btn-light text-secondary" onClick={() => setFind('one')}>Twenty Five Minutes</button>
        <button class="btn btn-light text-secondary" onClick={() => setFind('two')}>Ten Minutes</button>
        <button class="btn btn-light text-secondary" onClick={() => setFind('three')}>Five Minutes</button>
        </nav>
      <div className='container'>
        {find === 'one' && <Twenty />}
        {find === 'two' && <Ten />}
        {find === 'three' && <Five />}
        </div>
    </div>
  );
}

export default App;