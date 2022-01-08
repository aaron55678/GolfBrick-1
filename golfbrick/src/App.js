import './App.css';
import Nav from './components/header/Nav';
import AddPlayer from './components/players/AddPlayer';
import Players from './components/players/Players';
import OutputOptions from './components/outputs/OutputOptions';


const App = () => {
  return (
    <div className="App">
      <Nav />
      <AddPlayer />
      <Players />
      <OutputOptions />
    </div>
  );
}

export default App;
