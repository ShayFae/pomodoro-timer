import './Timer.css'
import { useEffect, useState } from 'react'

export default function Timer() {
  const [start, setStart] = useState(false);
  const [start2, setStart2] = useState(false);
  const [start3, setStart3] = useState(false);
  const [meep, setMeep] = useState(false);
  const [meep2, setMeep2] = useState(false);
  const [meep3, setMeep3] = useState(false);



  const [num, setNum] = useState(1500)
  const [num2, setNum2] = useState(600)
  const [num3, setNum3] = useState(300)


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

    useEffect(() =>  {
      if (start2) {
        if(num2 > 0) {
          setTimeout(() => setNum2(prev => --prev), 1000)
        } else {
          return () => clearTimeout(num);
        }
      }
    }, )

    useEffect(() =>  {
      if (start3) {
        if(num3 > 0) {
          setTimeout(() => setNum3(prev => --prev), 1000)
        } else {
          return () => clearTimeout(num);
        }
      }
    }, )

  return (
    <div className="timer">
      <h1>Set Timer</h1>
      <button onClick={() => setMeep(true)}>25</button>
      {meep ? <div> 
                <h3>{num} </h3> 
                <button onClick={() => setStart(true)}>START</button>
                <button onClick={() => setStart(false)}>STOP</button>
              </div>
              : null}

      <button onClick={() => setMeep2(true)}>10</button>
      {meep2 ? <div> 
                <h3>{num2} </h3> 
                <button onClick={() => setStart2(true)}>START</button>
                <button onClick={() => setStart2(false)}>STOP</button>
              </div>
              : null}

      <button onClick={() => setMeep3(true)}>5</button>
      {meep3 ? <div> 
                <h3>{num3} </h3> 
                <button onClick={() => setStart3(true)}>START</button>
                <button onClick={() => setStart3(false)}>STOP</button>
              </div>
              : null}
    </div>
  );
}