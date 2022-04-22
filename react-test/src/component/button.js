import React,{useState} from 'react'

const Button = (props) => {
    var characterValue = props.characterValue;
    var type = props.type;

    function MenuOptionHandler (e) {
        //console.log(e.target.name);
        switch (e.target.name){
            case "characterName":
            {
                console.log(e.target.value);
                break;
            }
            case "backGroundName":
            {
                console.log(e.target.value);
                break;
            }
            case "weaponName":
            {
                console.log(e.target.value);
                break;
            }
            default:
            {
                console.log (e.target);
                break;
            }
        }
    }

  return (
    <label><input name={type} type="radio" value={characterValue} onChange={MenuOptionHandler} /> {characterValue} </label>
  )
}

export default Button;
