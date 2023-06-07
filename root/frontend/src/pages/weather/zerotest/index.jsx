import {useState} from "react";
import {useSearchParams} from "react-router-dom"
import {getTemp} from "../util";
import Image from 'react-bootstrap/Image'
import nibAbove15 from "./testImages/above_15.png"
import nibBelow15 from "./testImages/below_15.png"
import './index.css'

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
      return(
        <container className={"myImage"}>
          <Image src={nibAbove15} width={1080} height={1920}/>
          <h1 className={'myFloatingText myFont'} style={{fontSize: "200px"}}>{Math.round(temp)}°</h1>
        </container>)
    }
    if(temp < 15){
      return(
        <container className={"myImage"}>
          <Image src={nibBelow15} width={1080} height={1920}/>
          <h1 className={'myFloatingText myFont'} style={{fontSize: "200px"}}>{Math.round(temp)}°</h1>
        </container>)
    }
  }

  return null
}