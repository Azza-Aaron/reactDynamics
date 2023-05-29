const {Client, Pool} = require("pg")
const session = require("express-session");
const pgSession = require('connect-pg-simple')(session)
const {createTables} = require("./initDb")

const config = process.env.NODE_ENV === 'dev' ? {
  user: process.env.DB_USER ?? "postgres",
  host: process.env.DB_HOST ?? "localhost",
  database: process.env.DB ?? "postgres",
  password: process.env.DB_PASSWORD ?? "password",
  port: process.env.DB_PORT ?? 5432,
} : {
  connectionString: process.env.DATABASE_URL,
  ssl: true
}

const client = new Client(config)
client.connect();
const pgSes = new pgSession({
  pool: new Pool(config),
  createTableIfMissing: true
})

const initDB = async () => {
  const run = await createTables(client)
  if(run){
    console.log('db init success')
  }else {
    console.log('db init fail')
  }
}

initDB()

module.exports = {
  client,
  pgSes
}
