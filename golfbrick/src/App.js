import './App.css';
import Nav from './components/header/Nav';
import AddPlayer from './components/players/AddPlayer';
import Players from './components/players/Players';
import OutputOptions from './components/outputs/OutputOptions';


const App = (props) => {
  let playerArray = [];
  const updatedStatusHandler = (updatedStatus) =>{
    playerArray = updatedStatus;
    console.log(playerArray);
  }

  return (
    <div className="App">
      <Nav />
      <AddPlayer playerArrays={playerArray} onUpdatedStatus={updatedStatusHandler}/>
      <Players playerArray={playerArray}/>
      <OutputOptions />
    </div>
  );
}

export default App;
