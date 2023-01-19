import logo from './logo.svg';
import './App.css';
import { Work1, Work2 } from './components/works';

function App() {
  return (
    <div className="App" style={{
      'backgroundColor': 'white'
    }}>
      {/* <Work1 /> */}
      <Work2 />
    </div>
  );
}

export default App;
