import './Timer.css'
import { useEffect, useState } from 'react'

export default function Meep() {
  const [start, setStart] = useState(false);
  const [num, setNum] = useState(600)

  //TIMER
    useEffect(() =>  {
      if (start) {
        if(num > 0) {
          setTimeout(() => setNum(prev => --prev), 1000)
        } else {
          return () => clearTimeout(num);
        }
      }
    }, )

  return (
    <div className="timer">
      <h1>Set Timer</h1>
                <h3>{num} </h3> 
                <button class="btn btn-outline-success" onClick={() => setStart(true)}>START</button>
                <button class="btn btn-outline-danger" onClick={() => setStart(false)}>STOP</button>
    </div>
  );
}