import React, { useState } from 'react'
import styles from '../css/menubox.module.css'
import UseEventListener from './eventlistener'
import Button from './button.js'

const MenuBox = (props) => {
    var characterList = props.characterList;
    var typeList = {"1":"characterName", "2":"backgroundName", "3":"weaponName"}
    

    return(
        <div className={styles.MenuContainer}>
            <div className={styles.MenuBox} id="CharacterOption">
                <strong>Character</strong>
                <Button characterValue={characterList["1"]} type = {typeList["1"]}></Button>
                <Button characterValue={characterList["2"]} type = {typeList["1"]}></Button>
                <Button characterValue={characterList["3"]} type = {typeList["1"]}></Button>
            </div>
        </div>
    )
}

export default MenuBox