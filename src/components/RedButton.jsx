import '../styles/red-button.css'
import redButton from '../assets/red-button.jpg'
import {useState} from 'react'
// import { useEffect } from 'react';
import {useSound} from 'use-sound'
import Actions from './Actions';
import GreenBtn from './GreenBtn';

export default function  RedButton() {

    let [count, setCount] = useState(0);
    const sound = new Audio('./assets/button.mp3'); 
    


    
    let update = () => {
        sound.play();
        setCount(count+1);
        Actions(count+1);
    }


    return(
        <>
        <h1 id='up'>DO NOT PRESS!!!</h1>
        <img src={redButton} id='red-button' onClick={update}></img>
        
        <h1 id='down'>Yes, Don't press the button  :)</h1>
        
        <h1 id='presses'>Count: {count}</h1>

        <GreenBtn  counts = {count}/>
        </>
        
    )
    
}