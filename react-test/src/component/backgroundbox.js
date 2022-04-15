import React, {useState} from 'react';
import UseEventListener from './eventlistener';
import styles from '../css/backgroundbox.module.css';

const Backgroundbox = (props) => {
  const [groundLength, SetgroundLength] = useState(props.groundLength);
  
  UseEventListener('keydown',function keyPress(event){
    var moveDirection = event.key;
    const moveCharacter = (movement) =>{
      switch(movement){
        case "ArrowRight":
          {
            if (groundLength > 900){
           // console.log(groundLength);
            return (parseInt(groundLength,10) + 10);
            }
            return groundLength;
          }
        case "ArrowLeft":{
          if (groundLength > 1600){
            //console.log(groundLength);
            return (parseInt(groundLength,10) - 10);
            }
            return groundLength;
        }
        default:
        {
          //{console.log(groundLength)}
          return groundLength;
        }
      }
    }
    SetgroundLength(moveCharacter(moveDirection));
    },window)

  return (
      <div>
            <hr className={styles.HorizontalLine} style={{
                width: groundLength
            }}/>
      </div>
  )
}

export default Backgroundbox
