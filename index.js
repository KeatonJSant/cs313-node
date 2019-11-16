const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var engine = require("./calculate.js")

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    res.sendFile("weight.html", {root:__dirname + "/public/html"})
  })
  .get('/result', engine.getParams)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
