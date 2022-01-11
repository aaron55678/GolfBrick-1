import { useState } from 'react';
import './App.css';
import Nav from './components/header/Nav';
import AddPlayer from './components/players/AddPlayer';
import Players from './components/players/Players';
import OutputOptions from './components/outputs/OutputOptions';


const initialAddedPlayers = [
    
]
const App = () => {
  const [addedPlayers, setAddedPlayers] = useState([]);
  
  const updatedStatusHandler = (addedPlayersData) =>{
    setAddedPlayers(prevAddedPlayers => {
      return [addedPlayersData, ...prevAddedPlayers];
    });
    /* console.log(addedPlayers); */
  };

  const onDeletedPlayerPassHandler = (deletedPlayer) => {
    setAddedPlayers(prevPlayers => {
      return [...deletedPlayer];
    })
  }

  return (
    <div className="App">
      <Nav />
      <AddPlayer onUpdatedStatus={updatedStatusHandler}/>
      <Players addedPlayers={addedPlayers} onDeletedPlayerPass={onDeletedPlayerPassHandler}/>
      <OutputOptions />
    </div>
  );
};

export default App;
