import { useState } from "react";
import "./App.css";
import Nav from "./components/header/Nav";
import AddPlayer from "./components/players/AddPlayer";
import Players from "./components/players/Players";
import OutputOptions from "./components/outputs/OutputOptions";

const App = () => {
  const [addedPlayer, setAddedPlayer] = useState([]);
  
  const playerStatusChangeHandler = (playerId) => {
    setAddedPlayer((prevAddedPlayer) => {
      if (prevAddedPlayer.length === 0) {
        return [{ id: playerId }];
      } else {
        return [...prevAddedPlayer, { id: playerId }]; //using passed up player id to construct player array
      };
    });
    console.log(addedPlayer);
  };

  return (
    <div className="App">
      <Nav />
      <AddPlayer onPlayerStatusChange={playerStatusChangeHandler} />
      <Players players={addedPlayer} />
      <OutputOptions />
    </div>
  );
};

export default App;
