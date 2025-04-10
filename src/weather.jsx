import axios from 'axios';
import { useState } from 'react';
import w from './assets/w.jpg'
function Weather(){
  const[city,setcity]=useState("");
  const[weather,setWeather]=useState("")
  function handleChange(e){
    setcity(e.target.value)
    console.log(setcity)
  }
  function handleClick() {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6da0af7cd3438300c69a7571b3abc19&units=metric`)
      .then(function (s) {
        console.log(s.data);
        setWeather(s.data);
      })
      .catch(function (er) {
        console.log("error");
        alert("City not found or network error.");
      });
  }
  
    
  
    return(
        <div
        className="h-screen  bg-center "
        style={{ backgroundImage: `url(${w})` }}
      >
        
            <div className=" p-10  font-medium ">
        <h1 className="text-center text-4xl font-bold mb-4  ">Weather Report</h1>
        <h3  className=" text-center text-2xl font-bold mb-4 ">Enter city</h3>
        <div className="flex gap-10 justify-center mb-10">
          <input
            className="text-xl px-4 py-2 rounded-lg text-black" value={city} onChange={handleChange}
            placeholder="Enter city name"
          />
          <button  className="text-xl px-4 py-2 rounded-lg bg-black text-white" onClick={handleClick}>Get Report</button>
        </div>
        {weather && weather.main && weather.wind && weather.weather && (
  <div className='text-center text-white flex justify-center gap-20 md:text-lg '>
    <div className='text-center space-y-3 gap-2 '>
      <p>🌤️  Weather: {weather.weather[0].main}</p>
      <p>🌡️ Temperature: {weather.main.temp} °C</p>
      <p>❄️ Wind chill: {weather.wind.speed} m/s</p>
      <p>🧭 Pressure: {weather.main.pressure} hPa</p>
    </div>
    <div className='text-center space-y-3 gap-2'>
      <p>💧 Humidity: {weather.main.humidity} %</p>
      <p>🌧️ Precipitation: N/A</p>
      <p>🌫️ Feels-like: {weather.main.feels_like}</p>
      <p>📝 Description: {weather.weather[0].description}</p>
    </div>
  </div>
)}

        </div>
      
        </div>
        
    )

};export default Weather;