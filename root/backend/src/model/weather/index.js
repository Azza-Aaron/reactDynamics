const moment = require ("moment");
const {client} = require ("../../dataBase");

const insertQuery = {
  text: `INSERT INTO public.weather (pinged)
        VALUES ($1)`,
        values: [moment()]
}

const addMomentToDB = () => {
  try {
    console.log('adding to db')
    client.query(insertQuery)
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  addMomentToDB
}