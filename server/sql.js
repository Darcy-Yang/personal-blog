  // sql语句；
  var sqlMap = {
    article: {
      add: 'insert into article(title, content) values (?,?)'
    },
    getArticle: {
      get: 'select * from article'
    },
    findById: {
      find: 'select * from article where id=?'
    }
  }

  module.exports = sqlMap
