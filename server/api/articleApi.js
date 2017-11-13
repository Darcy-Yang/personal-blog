var models = require('../db')
var express = require('express')
var multer = require('multer')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sql')

  // 连接数据库；
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
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg')
  }
})

var upload = multer({ storage: storage })

  // 添加文章接口；
router.post('/addArticle', (req, res) => {
  var sql = $sql.article.add
  var params = req.body
  conn.query(sql, [params.title, params.content], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
  // 上传图片
router.post('/uploadImg', upload.single('avatar'), (req, res) => {
  console.log(req.body)
})

  // 获取文章接口；
router.get('/allArticle', (req, res) => {
  var getSql = $sql.getArticle.get
  conn.query(getSql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

  // 根据id获取特定的文章
router.post('/findById', (req, res) => {
  var findSql = $sql.findById.find
  var params = req.body
  conn.query(findSql, [params.id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

module.exports = router
