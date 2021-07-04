import sun from './sun.png';
import './App.css';
import PiFetch from './PiFetch';
import SunCalculator from './SunCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Latest Value of Pi is 
        <PiFetch/>
        <img src={sun} className="App-logo" alt="logo" />
        <div className="sun-component">   <SunCalculator/></div>

      </header>
    </div>
  );
}

export default App;
