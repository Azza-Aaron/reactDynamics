import {getWeatherFromServer} from "../../../api";


export const getTemp = async (coordinates, setTemp) => {
    const data = await getWeatherFromServer(coordinates)
    if(data){
        console.log(data)
        setTemp(data.data.main.temp)
    }
}