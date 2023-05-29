
const createUser = `
CREATE TABLE IF NOT EXISTS "user"
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
)`;


const cache = `
CREATE TABLE IF NOT EXISTS cache
(
    location VARCHAR,
    temp VARCHAR,
    time VARCHAR
)`

const trackUsage = `
CREATE TABLE IF NOT EXISTS weather
(
    pinged VARCHAR
)`


const queries = [
  createUser,
  cache,
  trackUsage
]

const createTables = async (client) => {
  const promises = []
  try {
    for (let i = 0; i < queries.length; i++) {
      promises.push(client.query(queries[i]))
    }
    await Promise.all(promises)
    console.log('tables initiated correctly')
    return true
  } catch (e) {
    console.log('error')
    console.log(e)
    return false
  }
}

module.exports = {
  createTables
}
