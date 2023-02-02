export function Weather({weather}) {
  const city = weather.name;

  if (weather.name === undefined) {
    return (
      <div className="weather">
        <div className="error">
          <h1>City not found</h1>
        </div>
      </div>
    )
  }

  const changeFormatTime = (time) => {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }

  const cloudiness = weather.clouds.all;

  const wind = weather.wind.speed;

  const baseTemp = weather.main.temp;
  const feelsLike = weather.main.feels_like;
  const humidity = weather.main.humidity;
  const pressure = weather.main.pressure;

  const sunrise = changeFormatTime(weather.sys.sunrise);
  const sunset = changeFormatTime(weather.sys.sunset);
  const country = weather.sys.country;

  const description = weather.weather[0].description;
  const icon = weather.weather[0].icon;
  const error = weather.message;

  return (
    <div className="weather">
      {error ? (
        <div className="error">
          <h1>{error}</h1>
        </div>
      ) : (
        <div className="weather__info">
          <div className="weather__info__city">
            <h1>
              {city}, {country}
            </h1>
          </div>
          <div className="weather__info__description">
            <h2>{description}</h2>
          </div>
          <div className="weather__info__icon">
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt=""/>
          </div>
          <div className="weather__info__temp">
            <h2>{baseTemp}°C</h2>
          </div>
          <div className="weather__info__feels-like">
            <h2>Чуствуется как: {feelsLike}°C</h2>
          </div>
          <div className="weather__info__sunrise">
            <h2>Рассвет: {sunrise}</h2>
          </div>
          <div className="weather__info__sunset">
            <h2>Закат: {sunset}</h2>
          </div>
          <div className="weather__info__cloudiness">
            <h2>Облачность: {cloudiness}%</h2>
          </div>
          <div className="weather__info__wind">
            <h2>Ветер: {wind}м/с</h2>
          </div>
          <div className="weather__info__humidity">
            <h2>Влажность: {humidity}%</h2>
          </div>
          <div className="weather__info__pressure">
            <h2>Давление: {pressure}hPa</h2>
          </div>
        </div>
      )}
    </div>
  )
}