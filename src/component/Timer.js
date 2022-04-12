import './Timer.css'
import { useEffect, useState } from 'react'

export default function Timer() {
  const [num, setNum] = useState(1500)

  //TIMER
    useEffect(() =>  {
      if(num > 0) {
        setTimeout(() => setNum(prev => --prev), 1000)
      } else {
        return () => clearTimeout(num);
      }
    }, )
  
  return (
    <div className="timer">
      <h1>Set Timer</h1>
      <h3>{num}</h3>
    </div>
  );
}