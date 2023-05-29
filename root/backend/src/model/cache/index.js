const {client} = require("../../dataBase");
const moment = require('moment')


const insertCachedData = (values) => {
  try {
    const insertQuery = {
      text: `INSERT INTO public.cache (location, temp, time)
        VALUES ($1, $2, $3)`,
      values: values
    }
    client.query(insertQuery)
  } catch (e) {
    console.log(e)
  }
}

const getCachedData = async (name) => {
  try {
    const selectQuery = {text: `SELECT * FROM public.cache WHERE location = $1`,
                          values: [name]}
    const data = await client.query(selectQuery)
    if(data.rowCount){
      const timeStamp = data.rows[0].time
      if(moment(timeStamp).isAfter(moment().subtract(20, 'minutes'))){
        return data.rows[0].temp
      } else {
        const deleteQuery = {text: "DELETE FROM public.cache WHERE location = $1",
                              values: [name]}
        client.query(deleteQuery)
        return false
      }
    }
    return false
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  insertCachedData,
  getCachedData
}