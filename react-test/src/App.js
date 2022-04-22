import Character from "./component/character.js";
import Backgroundbox from "./component/backgroundbox.js";
import MenuBox from "./component/menubox.js"

function App() {
  var characterList = {"1":"PandaPikachu", "2":"ButterFrog", "3":"Stick"}

  return (
    <div>
      <div className="menuContainer">
        <MenuBox characterList={characterList}></MenuBox>
      </div>
      <div className="mainContainer">
        <Character xPosition="10" yPosition="120">
        </Character>
        <Backgroundbox groundLength="2600"></Backgroundbox>
      </div>
    </div>
  )
}

export default App;
