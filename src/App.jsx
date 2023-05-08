/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './App.css'
import Temperatura from './components/Temperatura/Temperatura'
import Humedad from './components/Humedad/Humedad'
import Velocidad from './components/VelocidadViento/Velocidad'
import Minmax from './components/MinMax/Minmax'


function App() {
  const [ciudad, setCiudad] = useState('BUENOS AIRES')
  const [pais, setPais] = useState()
  const [clima, setClima] = useState()
  const [icono, setIcono] = useState()
  const [tempMin, setTempMin] = useState()
  const [tempMax, setTempMax] = useState()
  const [temperatura, setTemperatura] = useState()
  const [humedad, setHumedad] = useState()
  const [viento, setViento] = useState()
  
  // console.log(ciudad)
  const obtenerCiudad = document.getElementsByClassName('ciudad');

  //Para buscar datos por ciudad
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=c201f125b1ae6ec8da965615de942060`
  const search = async ()=>{
    setCiudad(obtenerCiudad[1].value.toUpperCase());
    const respuesta = await fetch(url);
    let respuestaJSON = await respuesta.json();
    console.log(respuestaJSON);
  }
  const enter = async (event)=>{
    event.preventDefault()
    setCiudad(obtenerCiudad[1].value.toUpperCase());
    const respuesta = await fetch(url);
    let respuestaJSON = await respuesta.json();
    console.log(respuestaJSON);
  }

  //Para cargar la web en una ciudad
  useEffect(()=>{
    const cargarMadrid = async ()=>{
      const respuesta = await fetch(url);
      let respuestaJSON = await respuesta.json();
      console.log(respuestaJSON);

      //Si se ingresa una ciudad que no existe, sale el error
      if(respuestaJSON.cod == 404 || ciudad == ''){
        alert(`Error: ${respuestaJSON.message}`)
        setPais('--')
        setClima('-')
        setIcono('')
        setTemperatura('-')
        setTempMin('-')
        setTempMax('-')
        setHumedad('-')
        setViento('-')
      }else{
        setPais(respuestaJSON.sys.country)
        setClima(respuestaJSON.weather[0].description.toUpperCase())
        let iconurl = `http://openweathermap.org/img/w/${respuestaJSON.weather[0].icon}.png`;
        setIcono(iconurl)
        const tempParse = parseInt(respuestaJSON.main.temp -273)
        setTemperatura(tempParse)
        const tempMinParse = parseInt(respuestaJSON.main.temp_min -273)
        setTempMin(tempMinParse)
        const tempMaxParse = parseInt(respuestaJSON.main.temp_max -273)
        setTempMax(tempMaxParse)
        setHumedad(respuestaJSON.main.humidity)
        setViento(respuestaJSON.wind.speed)
      }
    }
    cargarMadrid()
  },[ciudad])


  return (
    <>
      <div className="App">
        <Temperatura ciudad={ciudad} pais={pais} icono={icono} clima={clima} temperatura={temperatura}/>
        <div className="buscador">
          <form action="search" onSubmit={enter}>
            <input type="text" placeholder='Enter city' className='ciudad'/>
            <div className='search' onClick={search} onKeyDown={search}><ion-icon name="search-outline"></ion-icon></div>
          </form>
        </div>
        <Humedad humedad={humedad}/>
        <Velocidad viento={viento}/>
        <Minmax tempMin={tempMin} tempMax={tempMax}/>
      </div>
    </>
  )
}

export default App
