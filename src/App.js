import './App.css';
import { Weather } from './components/Weather';
import {useState} from "react";


const API_KEY = "f14b65edf1d049bb0d0448c7fe0f304a";

function App() {
  const [weather, setWeather] = useState({});

  const getWeather = async (e) => {
    setWeather({error: 'Загрузка...'});

    e.preventDefault();
    const city = e.target.elements.city.value;

    if (!city) return alert('Введите город');

    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
    setWeather(data);
  }

  return (
    <div className="App" style={{
    }}>
      <Weather weather={weather} />
      <form onSubmit={getWeather}>
        <input type="text" name="city" placeholder="город" className={"weather__input-city"} />
        <button type="submit" className={"weather__get-info-button"}>Получить погоду</button>
      </form>
    </div>
  );
}

export default App;
