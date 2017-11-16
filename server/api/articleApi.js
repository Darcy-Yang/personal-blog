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
    // 路径这个坑踩了很久，一直以为应该是'server/uploads/'...
    // cb(null, 'uploads/')
    cb(null, '../static/uploads/')
  },
  filename: function (req, file, cb) {
    var maxSql = $sql.getMaxId.max
    conn.query(maxSql, function (err, rows, field) {
      if (err) {
        console.log(err)
      }
      if (rows) {
        const name = field[0].name
        const id = rows[0][name] + 1
        cb(null, id + '.jpg')
      }
    })
  }
})

  // 查找最大id值
router.get('/getMaxId', (req, res) => {
  var maxSql = $sql.article.max
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

var upload = multer({ storage: storage })

  // 添加文章接口；
router.post('/addArticle', (req, res) => {
  var sql = $sql.article.add
  var params = req.body
  conn.query(sql, [params.title, params.content, params.avatar, params.date], function (err, result) {
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

})

  // 获取文章接口；
router.get('/allArticle', (req, res) => {
  var getSql = $sql.article.get
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
  var findSql = $sql.article.find
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
