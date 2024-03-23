import React from 'react'
import style from './weather.module.scss'
import { Card } from 'react-bootstrap'
import DefaultWeather from "../Svgs/DefaultWeather";
import Thermometer from "../Svgs/Thermometer";
import PositionSvg from '../Svgs/PositionSvg'
import Wind from '../Svgs/Wind';
import Sunny from '../Svgs/Sunny'
import SunnyRainy from '../Svgs/SunnyRainy'
import { useSelector } from 'react-redux';
import { selectWeatherData } from '../../Redux/slices/weatherSlice';

const Weather = () => {
  const weatherData = useSelector(selectWeatherData);

  function timestampToDate(timestamp) {
    // Création d'un objet Date à partir du timestamp
    var date = new Date(timestamp * 1000);
    var heure = date.getHours();
    var minute = date.getMinutes();

    // Formatage de la date
    var dateLisible = heure + 'h : ' + minute + 'm';

    return dateLisible;
  }

  function formatDateCourante() {
    // Tableau des noms de mois
    var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    // Création d'un objet Date pour obtenir la date courante
    var date = new Date();

    // Obtention du jour de la semaine, du jour du mois et de l'année
    var jourSemaine = date.getDay();
    var jourMois = mois[date.getMonth()]
    var annee = date.getFullYear();

    // Formatage de la date
    var dateFormatee = jourSemaine + ' ' + jourMois + ', ' + annee;

    return dateFormatee;
  }

  return (
    weatherData?.isLoaded ? <>
    <Card className={style.container}>
        <Card.Body>
            <Card.Title>
               <PositionSvg width="20px" height="20px" color="#000000" /> {weatherData?.name}, {weatherData?.sys?.country}
               <div className='mt-3'>{formatDateCourante()}</div>
            </Card.Title>

            <Card.Text className={style.weather_infos}>
                <div> <DefaultWeather width="150px" height="150px"/></div>
                <div className={style.temperature}>{(weatherData?.main.temp / 10).toFixed(1)} <Thermometer/></div>
                <div className={style.separator}></div>
                <div className={style.container_more_details}>
                  <div className={style.more_details}>
                    <div><Sunny/></div>
                    <div>Sunrise</div>
                    <div>{timestampToDate(weatherData?.sys.sunrise)}</div>
                  </div>
                  <div className={style.more_details}>
                    <div><SunnyRainy/></div>
                    <div>Sunset</div>
                    <div>{timestampToDate(weatherData?.sys.sunset)}</div>
                  </div>
                  
                  <div className={style.more_details}>
                    <div><Wind width="25px" height="25px" color='#000000'/></div>
                    <div>Wind</div>
                    <div>{weatherData?.wind.speed}m/s</div>
                  </div>

                  <div className={style.more_details}>
                    <div><Thermometer width="18px" height="18px"/></div>
                    <div>Temp</div>
                    <div>{(weatherData?.main.temp_max / 10).toFixed(1)}° C</div>
                  </div>
                </div>
            </Card.Text>

        </Card.Body>
    </Card>
    </> : <></>
  )
}

export default Weather