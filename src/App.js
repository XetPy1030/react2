import './App.css';
import {Login} from "./components/login";

function App() {
  return (
    <div className="App" style={{
      'backgroundColor': 'white'
    }}>
      <Login />
      <a href="/products/">Products</a>
      <a href="/about/">About</a>
    </div>
  );
}

export default App;
