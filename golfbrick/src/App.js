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
  };

  const deletedPlayerChangeHandler = (removedId) => {
    setAddedPlayer(() => {
      return addedPlayer.filter(player => player.id !== removedId);//filtering player array to remove deleted player
    })
    
  };

  return (
    <div className="App">
      <Nav />
      <AddPlayer onPlayerStatusChange={playerStatusChangeHandler} />
      <Players players={addedPlayer} onDeletedPlayerChange={deletedPlayerChangeHandler}/>
      <OutputOptions />
    </div>
  );
};

export default App;
      

