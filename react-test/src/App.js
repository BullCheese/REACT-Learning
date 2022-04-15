import Character from "./component/character.js";
import Backgroundbox from "./component/backgroundbox.js";

function App() {
  return (
    <div className="container">
      <Character xPosition="10" yPosition="120">
      </Character>
      <Backgroundbox groundLength="1600"></Backgroundbox>
    </div>
  )
}

export default App;
