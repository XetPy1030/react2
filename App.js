import logo from './logo.svg';
import './App.css';
import { Work1, Work2, Work3 } from './components/works';
import { Work4 } from './components/works';
import { Work5 } from './components/works';

function App() {
  return (
    <div className="App" style={{
      'backgroundColor': 'white'
    }}>
      <Work1 />
      <Work2 />
      <Work3 />
      <Work4 />
      <Work5 />
    </div>
  );
}

export default App;
