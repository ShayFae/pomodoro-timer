import './App.css';
import Twenty from './component/Twenty';
import Ten from './component/Ten';
import Five from './component/Five';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [find, setFind] = useState('one');

  return (
    <div className="App">
        <h1>Pomodoro</h1>
        <button class="btn btn-outline-primary" onClick={() => setFind('one')}>Twenty Five Minutes</button>
        <button class="btn btn-outline-primary" onClick={() => setFind('two')}>Ten Minutes</button>
        <button class="btn btn-outline-primary" onClick={() => setFind('three')}>Five Minutes</button>
      <div className='container'>
        {find === 'one' && <Twenty />}
        {find === 'two' && <Ten />}
        {find === 'three' && <Five />}
        </div>
    </div>
  );
}

export default App;