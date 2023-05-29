// api call example http://api.openweathermap.org/data/2.5/forecast?lat={lat}&long={lon}&appid={API key}
// api call to geocoder http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

const {addMomentToDB} = require("../../model/weather");

const weatherBasedOnLocation = async (req) => {
  const {lat, lon} = req.body
  addMomentToDB()
  try {
    const get = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHERTOKEN}&units=metric`)
    return await get.json()
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  weatherBasedOnLocation
}