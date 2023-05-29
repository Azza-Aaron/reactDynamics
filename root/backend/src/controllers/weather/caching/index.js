const moment = require("moment");
const {insertCachedData, getCachedData} = require("../../../model/cache");

const checkCache = async (req) => {
  const {lat, lon} = req.body
  const name = [lat, lon].join(',')
  try {
    const get = await getCachedData(name)
    return JSON.parse(get)
  } catch (e) {
    console.log(e)
  }
}

const cacheData = async (req, data) => {
  const {lat, lon} = req.body
  const name = [lat, lon].join(',')
  const list = [name, data, moment().toISOString()]
  insertCachedData(list)
}

module.exports = {
  cacheData,
  checkCache
}