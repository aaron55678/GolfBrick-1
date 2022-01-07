import ReactDOM from 'react-dom';
import './App.css';
import Nav from './components/header/Nav';
import Title from './components/header/Title';
import AddPlayer from './components/players/AddPlayer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faPlusCircle)

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Title />
      <AddPlayer />
    </div>
  );
}

export default App;
