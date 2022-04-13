import './App.css';
import Twenty from './component/Twenty';
import Ten from './component/Ten';
import Five from './component/Five';

import { useState } from 'react';

function App() {
  const [find, setFind] = useState('one');

  return (
    <div className="App">
        <h1>Pomodoro</h1>
        <button onClick={() => setFind('one')}>Twenty Five Minutes</button>
        <button onClick={() => setFind('two')}>Ten Minutes</button>
        <button onClick={() => setFind('three')}>Five Minutes</button>

        {find === 'one' && <Twenty />}
        {find === 'two' && <Ten />}
        {find === 'three' && <Five />}


        {/* {find ? <Timer /> : <Meep />} */}
        {/* <Meep /> */}
    </div>
  );
}

export default App;
