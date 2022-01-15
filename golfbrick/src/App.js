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
        return [{ id: playerId, name: "", postcode: "" }];
      } else {
        return [...prevAddedPlayer, { id: playerId, name: "", postcode: "" }]; //using passed up player id to construct player array
      }
    });
  };

  const deletedPlayerChangeHandler = (removedId) => {
    setAddedPlayer(() => {
      return addedPlayer.filter((player) => player.id !== removedId); //filtering player array to remove deleted player
    });
  };

  const playerDataChangeHandler = (playerChange, playerId) => {
    addedPlayer.forEach((el,index)=>{
      if(addedPlayer[index].id === playerId){
        return addedPlayer[index].name = playerChange;
      }
      else{
        return;
      };
    });
    //i believe this function is working but i think it is one entry behind
  };

  const postcodeDataChangeHandler = (postcodeChange, playerId) => {
    addedPlayer.forEach((el,index)=>{
      if(addedPlayer[index].id === playerId){
        return addedPlayer[index].postcode = postcodeChange;
      }
      else{
        return;
      };
    });
    //this function is also one entry behind
  };
  return (
    <div className="App">
      <Nav />
      <AddPlayer onPlayerStatusChange={playerStatusChangeHandler} />
      <Players
        players={addedPlayer}
        onDeletedPlayerChange={deletedPlayerChangeHandler}
        onPlayerDataChange={playerDataChangeHandler}
        onPostcodeDataChange={postcodeDataChangeHandler}
      />
      <OutputOptions />
    </div>
  );
};

export default App;
