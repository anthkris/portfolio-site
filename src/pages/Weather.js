import React from "react"
import ForecastPlug from '../components/ForecastPlug.js'
import WeatherTile from '../components/WeatherTile.js'

const Weather = () =>
<div className='pt5'>
<div className='vh-100' >
    <div className='mw7 db center '>
    <div>
    <h2 className='dib ml2 code'>Material Weather icons</h2>
    <a className='fr mt3 pt1 mr3' download href='http://jciclitira.com/sketch-files/weather-icons.sketch' >
    <img className='h1 dib' src='images/tools/sketch.svg' alt='Sketch icon'/>
    <h4 className='dib v-top ma0 pl3 code'>Sketch download</h4>
    </a>
    </div>
    <ForecastPlug/>
    <WeatherTile weather='images/weather/weather-icon-1.svg'/>
    <WeatherTile weather='images/weather/weather-icon-2.svg'/>
    <WeatherTile weather='images/weather/weather-icon-3.svg'/>
    <WeatherTile weather='images/weather/weather-icon-4.svg'/>
    <WeatherTile weather='images/weather/weather-icon-5.svg'/>
    <WeatherTile weather='images/weather/weather-icon-6.svg'/>
    <WeatherTile weather='images/weather/weather-icon-7.svg'/>
    <WeatherTile weather='images/weather/weather-icon-8.svg'/>
    <WeatherTile weather='images/weather/weather-icon-9.svg'/>
    <WeatherTile weather='images/weather/weather-icon-10.svg'/>
    <WeatherTile weather='images/weather/weather-icon-11.svg'/>
    <WeatherTile weather='images/weather/weather-icon-12.svg'/>
    <WeatherTile weather='images/weather/weather-icon-13.svg'/>
    <WeatherTile weather='images/weather/weather-icon-14.svg'/>
    <WeatherTile weather='images/weather/weather-icon-15.svg'/>
    <WeatherTile weather='images/weather/weather-icon-16.svg'/>
    </div>
    </div>
</div>
export default Weather
