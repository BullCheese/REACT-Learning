import React from "react";
import Character from "./component/character.js";
import Backgroundbox from "./component/backgroundbox.js";
import MenuBox from "./component/menubox.js";
import styles from "./css/app.css"

function App() {
  return (
    <div className={styles.Container}>
      <div className={styles.MainContainer}>
        <MenuBox characterValue="HelloKitty" backgroundValue="BlackWhite" weaponValue="Hand"></MenuBox>
        <Character xPosition="20" yPosition="120">
        </Character>
        <Backgroundbox groundLength="1600">
        </Backgroundbox>
      </div>
    </div>
  )
}

export default App;
