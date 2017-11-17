var models = require('../db')
var express = require('express')
var multer = require('multer')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sql')

var conn = mysql.createConnection(models.mysql)
conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: 1,
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../static/music/')
  },
  filename: function (req, file, cb) {
    var maxSql = $sql.music.max
    conn.query(maxSql, function (err, rows, field) {
      if (err) {
        console.log(err)
      }
      if (rows) {
        const name = field[0].name
        const id = rows[0][name] + 1
        cb(null, id + '.mp3')
      }
    })
  }
})

var upload = multer({ storage: storage })

router.post('/uploadMusic', upload.single('music'), (req, res) => {
})

router.get('/getMaxId', (req, res) => {
  var maxSql = $sql.music.max
  conn.query(maxSql, function (err, rows, field) {
    if (err) {
      console.log(err)
    }
    if (rows) {
      const name = field[0].name
      const id = rows[0][name] + 1
      jsonWrite(res, id)
    }
  })
})

router.post('/addMusic', (req, res) => {
  var musicSql = $sql.music.add
  var params = req.body
  conn.query(musicSql, [params.name, params.path, params.cover], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.get('/allMusic', (req, res) => {
  var getMusicSql = $sql.music.get
  conn.query(getMusicSql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

module.exports = router
