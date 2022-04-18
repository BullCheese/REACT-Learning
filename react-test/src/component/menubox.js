import React, { useState } from 'react'
import styles from '../css/menubox.module.css'
import UseEventListener from './eventlistener'

const MenuBox = (props) => {
    const [backgroundValue, SetbackgroundValue] = useState(props.backgroundValue);
    const [characterValue, SetcharacterValue] = useState(props.characterValue);
    const [weaponValue, SetweaponValue] = useState(props.weaponValue);

    const MenuOptionHandler = (value, type) =>{
        switch(type){
            case "characterName":
                {
                    let characterNameValue = document.querySelector('#CharacterOption');
                    console.log(characterNameValue);
                    return characterNameValue;
                    return SetcharacterValue(characterNameValue);
                }
            case "backgroundName":
                {
                    let backgroundNameValue = document.querySelector('#BackgroundOption');
                    console.log(backgroundNameValue);
                    return backgroundNameValue;
                    return SetbackgroundValue(backgroundNameValue);
                }
            case "weaponName":
                {
                    let weaponNameValue = document.querySelector('#WeaponOption');
                    console.log(weaponNameValue);
                    return weaponNameValue;
                    return SetweaponValue(weaponNameValue);
                }
            default:
                console.log("default");
                break;
        }
    }
    return(
        <div className={styles.MenuContainer}>
            <div className={styles.MenuBox} id="CharacterOption">
                <strong>Character</strong>
                <label><input type="radio" name="characterName" value="1" checked onChange={MenuOptionHandler(characterValue,"characterName")}/> PandaPikachu </label>
                <label><input type="radio" name="characterName" value="2" onChange={MenuOptionHandler(characterValue,"characterName")}/> ButterFrog </label>
                <label><input type="radio" name="characterName" value="3" onChange={MenuOptionHandler(characterValue,"characterName")}/> Stick</label>
            </div>
             
            <div className={styles.MenuBox} id="BackgroundOption">
                <strong>Background</strong>
                <label><input type="radio" name="backgroundName" value="1" checked onChange={MenuOptionHandler(backgroundValue,"backgroundName")}/> BlackWhite</label>
                <label><input type="radio" name="backgroundName" value="2" onChange={MenuOptionHandler(backgroundValue,"backgroundName")}/> Sunny</label>
                <label><input type="radio" name="backgroundName" value="3" onChange={MenuOptionHandler(backgroundValue,"backgroundName")}/> Dark</label>
            </div>  
             
            <div className={styles.MenuBox} id="WeaponOption">
                <strong>Weapon</strong>
                <label><input type="radio" name="weaponName" value="1" checked onChange={MenuOptionHandler(weaponValue,"weaponName")}/> Hand</label>
                <label><input type="radio" name="weaponName" value="2" onChange={MenuOptionHandler(weaponValue,"weaponName")}/> Sword</label>
                <label><input type="radio" name="weaponName" value="3" onChange={MenuOptionHandler(weaponValue,"weaponName")}/> Bow</label>
            </div> 
        </div>
    )
}

export default MenuBox