import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {PageRouting} from "./components/PageRouting";

function App() {
    return (
        <div className="App">
            <Header/>
            <PageRouting/>
        </div>
    );
}

export default App;
