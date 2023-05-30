import {useState} from "react";
import {useSearchParams} from "react-router-dom"
import {getTemp} from "../util";


export const ZeroTestWeather = () => {
  const [temp, setTemp] = useState('')
  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat')
  const lon = searchParams.get("lon")

  useState(() => {
    getTemp({lat,lon}, setTemp)
  }, [])

  if(temp){
    if(temp >= 15){
      return(<h1>its warm</h1>)
    }
    if(temp < 15){
      return(<h1>its cold</h1>)
    }
  }

  return null
}