import '../styles/red-button.css'
import greenBtn from '../assets/green-button.png'
import {useState} from 'react';

export default function GreenBtn({counts}) {
    let [counter, setCounter] = useState(0);
    
if (counts == 9 || counts == 10) {
    return(
        <div className='green-btn-wrapper'>
            <h1>Press this GREEN button!</h1>
            <img onClick={()=> setCounter(counter+1)} id='green-btn' src={greenBtn}></img>
            <h1>This is more fun.</h1>
            <h1>Count: {counter}</h1>
        </div>
    )
}

}