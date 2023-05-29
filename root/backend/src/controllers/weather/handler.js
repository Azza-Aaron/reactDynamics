const express = require('express');
const {weatherBasedOnLocation} = require("./index");
const {cacheData, checkCache} = require("./caching");
const weatherRouter = express.Router();

weatherRouter.post('/get', async (req, res) => {
  try{
    const data = await checkCache(req)
    if(data){
      res.json({msg: 'success cached', data})
      res.status(200)
      return
    }
  } catch (e) {
    console.log(e)
  }
  try{
    const data = await weatherBasedOnLocation(req)
    res.json({msg:'success', data})
    res.status(200)
    cacheData(req, data)
  } catch (e) {
    res.json({error: e})
    res.status(400)
  }

})

module.exports = weatherRouter