import './App.css';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import EventHandling from './components/EventHandling';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseState />
        <UseEffect />
        <UseRef />
        <EventHandling />
      </header>
    </div>
  );
}

export default App;
