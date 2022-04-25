import './Timer.css'
import { useEffect, useState } from 'react'
import useSound from 'use-sound';
import sounds from '../sounds/420504__jfrecords__uprising3.wav';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Meep() {
  const [start, setStart] = useState(false);
  const [num, setNum] = useState(300)
  const [play] = useSound(sounds)
  const [num2, setNum2] = useState([5, 0])

  // const b = {
  //   minute: num / 60,
  //   seconds: (num / 60) % 60  
  // }
  // setNum2([b.minute, b.seconds])
  // console.log(b)

  //TIMER
    useEffect(() =>  {
      if (start) {
        if(num > 0) {
          setTimeout(() => setNum(prev => --prev), 1000)
          } 
          return () => clearTimeout(num);
      }
    }, )

      //TIMER
      useEffect(() =>  {
        if (start) {
          if(num2 > 0) {
            setTimeout(() => setNum2(prev => --prev), 1000)
            } 
            return () => clearTimeout(num2);
        }
      }, )
  
// console.log('hi', num2)

  return (
    <div className="timer">
      <div className='test'>
      <FontAwesomeIcon icon="arrow-rotate-right" size='2x' className='arrow' onClick={() => setNum(301) + setStart(false)}/>

        <h1>Set Timer</h1>      
           <h3>{num2}</h3> 
           <div className='stop-start'>
            {start === false && <button class="btn btn-success" onClick={() => setStart(true)}>START</button>}
            {start === true && <button class="btn btn-danger" onClick={() => setStart(false)}>STOP</button>}
            {num === 0 && play()}
            </div>
       </div>
    </div>
  );
}