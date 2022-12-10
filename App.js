import React, {useState} from 'react';

import Board from './Board';
import Button from './Button';

import Score from './Score';

export default function App() {
const [color, setColor] = useState('');
const [isX,setIsX] = useState(true);
const [result, setResult] = useState('');
const [scoreX, setScoreX] = useState(0);
const [scoreY, setScoreY] = useState(0);
const [sign, signChange] = useState(Array(9).fill(null));

const a = Math.random(0,1)
   const clickHandler = (i) => {
      if(sign[i] === 'x' || sign[i] === 'o') return
      if(result.length) return
         if(a === 1){
            sign[i] = isX ? 'o' : 'x';
         }
         else{
            sign[i] = isX ? 'x' : 'o';
         }
            
         
         signChange(sign);
         setIsX(!isX);

      checkWinner(0,1,2);
      checkWinner(3,4,5);
      checkWinner(6,7,8);
      checkWinner(0,3,6);
      checkWinner(1,4,7);
      checkWinner(2,5,8);
      checkWinner(0,4,8);
      checkWinner(2,4,6);

   }
   
   const checkWinner =(x, y, z) => {
      let pX = 'x'.repeat(3);
      let pO = 'o'.repeat(3);
   
      let winner = sign[x] + sign[y] + sign[z] 

      if(winner===pX) {
         setResult('X WON!!!');
         setScoreX(scoreX + 1)
      }
      else if(winner===pO){
         setResult('O WON!!!');
         setScoreY(scoreY + 1)
      } else {
        draw();
      }
      
   }

   const draw = () => {
      let allContent = sign.every(e => e)
      if (allContent && result.length===0){
         setResult('DRAW')
      }
      
   }

   const restartGame = () => {
      setResult('');
      signChange(Array(9).fill(null));
      
   }
 return (
 <>
   <Score pointX={scoreX} pointY={scoreY}/>
   <h2>{result}</h2>
    <Board>
      <Button value={sign[0]} onClick={() => clickHandler(0)}/>
      <Button value={sign[1]} onClick={() => clickHandler(1)}/>
      <Button value={sign[2]} onClick={() => clickHandler(2)}/>
      <Button value={sign[3]} onClick={() => clickHandler(3)}/>
      <Button value={sign[4]} onClick={() => clickHandler(4)}/>
      <Button value={sign[5]} onClick={() => clickHandler(5)}/>
      <Button value={sign[6]} onClick={() => clickHandler(6)}/>
      <Button value={sign[7]} onClick={() => clickHandler(7)}/>
      <Button value={sign[8]} onClick={() => clickHandler(8)}/>
    </Board>
    <button onClick={restartGame}>RESTART THE GAME</button>
 </>
 );
}