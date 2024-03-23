import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import styles from './searchbar.module.scss'
import { Autocomplete, TextField } from '@mui/material'
import { useDispatch } from 'react-redux';
import { resetData, setWeatherData } from '../../Redux/slices/weatherSlice';

const Searchbar = () => {
  const [cities, setCities] = useState([]);
  const key_Geo = process.env.REACT_APP_API_GEO_KEY;
  const key_weather = process.env.REACT_APP_API_Weather;
  const dispatch = useDispatch();

  const handleInputChange= (e)=>{
    const {value} = e.currentTarget;
    if(value === ""){
      dispatch(resetData());
      return;
    } 
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&format=json&apiKey=${key_Geo}`)
    .then(response => response.json())
    .then(json => setCities(json?.results?.map(data=>{
      const {lat, lon, city, country, formatted} = data;//destructur
      return {lat, lon, city, country, formatted};
    })));
  }

  const handleAutoCompleteChange=(e, value)=>{
    if(!value) return;
    const {lat, lon} = value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key_weather}`)
    .then(response => response.json())
    .then(json => {
      const {clouds,name, main, wind, weather, sys} = json;
      dispatch(setWeatherData({clouds,name, main, wind, weather, sys, isLoaded:true}))
    });
  }

  return (
    <>
    <Form>
        <Form.Group className={styles.searchContainer}>
            <Autocomplete className={styles.searchInput} 
                          clearOnBlur={false} 
                          getOptionLabel={(option)=> option.formatted}
                          onChange={handleAutoCompleteChange}
                          renderInput={(params)=> 
                <TextField {...params} onChange={handleInputChange} label='Enter your city ...'/>}  options={cities} />
            <Button size='lg' variant='warning' className='styles.searchBtn'>Search</Button>
        </Form.Group>
    </Form>
    </>
  )
}

export default Searchbar