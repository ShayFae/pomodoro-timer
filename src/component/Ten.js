import './Timer.css'
import { useEffect, useState } from 'react'
import useSound from 'use-sound';
import sounds from '../sounds/420504__jfrecords__uprising3.wav';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Meep() {
  const [start, setStart] = useState(false);
  const [num, setNum] = useState(600)
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
      <FontAwesomeIcon icon="arrow-rotate-right" size='2x' className='arrow'/>
        <h1>Set Timer</h1>
          <h3>{num} </h3> 
          <div className='stop-start'>

            <button class="btn btn-success" onClick={() => setStart(true)}>START</button>
            <button class="btn btn-danger" onClick={() => setStart(false)}>STOP</button>
            {num === 0 && play()}
            </div>
      </div>
    </div>
  );
}