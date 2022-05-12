import './Timer.css'
import { useEffect, useState } from 'react'
import useSound from 'use-sound';
import sounds from '../sounds/420504__jfrecords__uprising3.wav';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Meep() {
  const [start, setStart] = useState(false);
  const [play] = useSound(sounds)
  const [minutes, setMinutes] = useState(24)
  const [seconds, setSeconds] = useState(60)
  const [seconds2, setSeconds2] = useState(0)

      //TIMER
      useEffect(() =>  {
        if (start) {
          if(minutes > 0) {
            setTimeout(() => setSeconds(prev => --prev), 1000)
            }
          if(seconds < 0) {
            setTimeout(() => setMinutes(prev => prev - 1), 1000)
            setSeconds(60)
          }  

          if(minutes == 0 ) {
            setTimeout(() => setSeconds(prev => --prev), 1000)
          } 
        }
      }, )

  return (
    <div className="timer">
      <div className='test'>
      <FontAwesomeIcon icon="arrow-rotate-right" size='2x' className='arrow' onClick={() => setMinutes(24) + setSeconds(60) + setStart(false)}/>
        <h1>Set Timer</h1>   
           {minutes == -1 && seconds == 58 ? <h3>0 : {seconds2}</h3> : <h3>{minutes} : {seconds}</h3> }   
           <div className='stop-start'>
              {start === false && <button class="btn btn-success" onClick={() => setStart(true)}>START</button>}
              {start === true && <button class="btn btn-danger" onClick={() => setStart(false)}>STOP</button>}
              {minutes == -1 && seconds == 58 && play()}
            </div>
       </div>
    </div>
  );
}