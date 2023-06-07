

export const getWeatherFromServer = async (coordinates) => {
  console.log(coordinates.lon)
  try{
    const get = await fetch('/api/weather/get',  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({lat: coordinates.lat, lon: coordinates.lon})
    })
    return await get.json()
  } catch (e) {
    console.log(e)
    return false
  }
}