import React from 'react'
import bg from '../../assets/img/weather_bg.jpg'
import './wallpaper.scss'

const Wallpaper = () => {
  return (
    <>
        <div className={'wallpaper-container position-fixed d-flex top-0 bottom-0 end-0 start-0'}>
            <img src={bg} alt='wallpaper' className='wallpaper'/>
        </div>
    </>
  )
}

export default Wallpaper