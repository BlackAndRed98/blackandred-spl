import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner';
import {Projects} from './components/Projects';
import {Miner} from './components/Miner';


function App() {
  return (
    <div className='App'>
    <NavBar />
    <Banner />
    <Miner />
    <Projects />
    
    </div>
  );
}

export default App;
