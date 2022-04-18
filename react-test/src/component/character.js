import React, {useState} from 'react';
import PandaPikachu from '../images/panda_pikachu.png'
import HelloKitty from '../images/hello_kitty.png'
import styles from '../css/character.module.css'
import UseEventListener from './eventlistener.js';

const Character = (props) =>{
  const [xPosition, SetxPosition] = useState(props.xPosition);
  const [yPosition, SetyPosition] = useState(props.yPosition);

  UseEventListener('keydown',function keyPress(event){
    var moveDirection = event.key;
    const moveCharacter = (movement) =>{
      switch(movement){
        case "ArrowRight":
          {
            if (xPosition >= 0){
            return [(parseInt(xPosition,10) + 40),yPosition];
            } else {
              xPosition = 0;
              return [xPosition,yPosition];}
          }
        case "ArrowLeft":{
          if (xPosition > 99){
           // console.log(xPosition);
            return [(parseInt(xPosition,10) - 40),yPosition];
            }
            return [xPosition,yPosition];
        }
        case "ArrowDown":{
          if (yPosition < 620){
           // console.log(xPosition);
            return [xPosition,(parseInt(yPosition,10) + 40)];
            }
            return [xPosition,yPosition];
        }
        case "ArrowUp":{
          if (yPosition > 120){
            // console.log(xPosition);
             return [xPosition,(parseInt(yPosition,10) - 40)];
             }
             return [xPosition,yPosition];
        }
        default:
        {
          return [xPosition,yPosition];
        }
      }
    }
    SetyPosition(parseInt(moveCharacter(moveDirection)[1],10))
    SetxPosition(parseInt(moveCharacter(moveDirection)[0],10));
    },window)


    return (
    <div className={styles.PandaPikachu} style={{left: 90+xPosition, top: yPosition}}>
          {console.log(xPosition,yPosition)}
          <img src={PandaPikachu} width={280} height={250} alt="pandapikachu"/>
          <img src={HelloKitty} width={170} height={180} alt="hellokitty"/>
    </div>
  )
}

export default Character;
