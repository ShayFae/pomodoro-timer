import './Timer.css'
import { useEffect, useState } from 'react'
import useSound from 'use-sound';
import sounds from '../sounds/420504__jfrecords__uprising3.wav';

export default function Timer() {
  const [start, setStart] = useState(false);
  const [num, setNum] = useState(1500)
  const [play] = useSound(sounds)


  //TIMER
    useEffect(() =>  {
      if (start) {
        if(num > 0) {
          setTimeout(() => setNum(prev => --prev), 1000)
        } 
          return () => clearTimeout(num);
      }
    }, )

  return (
    <div className="timer">
      <div className='test'>
        <h1>Set Timer</h1>
          <h3>{num} </h3> 
           <button className="action-button" class="btn btn-outline-success" onClick={() => setStart(true)}>START</button>
           <button className="action-button" class="btn btn-outline-danger" onClick={() => setStart(false)}>STOP</button>
           {num === 0 && play()}
        </div>
    </div>
  );
}