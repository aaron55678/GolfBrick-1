import { useState } from 'react';
import './App.css';
import Nav from './components/header/Nav';
import AddPlayer from './components/players/AddPlayer';
import Players from './components/players/Players';
import OutputOptions from './components/outputs/OutputOptions';


const initialAddedPlayers = [
    {
        id: 'player1'
    },
    {
        id: 'player2'
    },
    {
        id: 'player3'
    }
]
const App = (props) => {
  const [addedPlayers, setAddedPlayers] = useState(initialAddedPlayers);
  
  const updatedStatusHandler = (addedPlayersData) =>{
    setAddedPlayers(prevAddedPlayers => {
      return [addedPlayersData, ...prevAddedPlayers];
    });
  };
  return (
    <div className="App">
      <Nav />
      <AddPlayer onUpdatedStatus={updatedStatusHandler}/>
      <Players addedPlayers={addedPlayers}/>
      <OutputOptions />
    </div>
  );
};

export default App;
