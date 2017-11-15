  // sql语句；
  var sqlMap = {
    article: {
      add: 'insert into article(title, content, avatar, date) values (?,?,?,?)'
    },
    getArticle: {
      get: 'select * from article'
    },
    findById: {
      find: 'select * from article where id=?'
    },
    getMaxId: {
      max: 'select max(id) from article'
    }
  }

  module.exports = sqlMap
