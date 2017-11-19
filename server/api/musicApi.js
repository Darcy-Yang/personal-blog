var models = require('../db')
var express = require('express')
var multer = require('multer')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sql')
var jsmediatags = require('jsmediatags')
var btoa = require('btoa')
var id = 0

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
        id = rows[0][name] + 1
        cb(null, `${id}.mp3`)
      }
    })
  }
})

var upload = multer({ storage: storage })

router.post('/uploadMusic', upload.single('music'), (req, res) => {
  if (res) {
  }
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
  jsmediatags.read(`../static/music/${id}.mp3`, {
    onSuccess: function (tag) {
      var image = tag.tags.picture
      if (image) {
        var base64String = ''
        for (var i = 0; i < image.data.length; i++) {
          base64String += String.fromCharCode(image.data[i])
        }
        var partBase64 = btoa(base64String)
        var base64 = 'data:' + image.format + ';base64,' + partBase64
        conn.query(musicSql, [params.name, params.path, base64], function (err, result) {
          if (err) {
            console.log(err)
          }
          if (result) {
            jsonWrite(res, result)
          }
        })
      }
    },
    onError: function (err) {
      console.log(':(', err)
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
