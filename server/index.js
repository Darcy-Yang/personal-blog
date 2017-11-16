  // node后端服务器；
const articleApi = require('./api/articleApi')
const musicApi = require('./api/musicApi')
// const fs = require('fs')
// const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
  // 后端api路由；
app.use('/api/article', articleApi)
app.use('/api/music', musicApi)
  // 监听端口；
app.listen(3000)
console.log('devServer listen at port:3000...')
