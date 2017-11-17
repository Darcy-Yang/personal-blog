  // sql语句；
  var sqlMap = {
    article: {
      add: 'insert into article(title, content, avatar, date) values (?,?,?,?)',
      get: 'select * from article',
      find: 'select * from article where id=?',
      max: 'select max(id) from article'
    },
    music: {
      add: 'insert into music(name, path, cover) values (?,?,?)',
      get: 'select * from music',
      max: 'select max(id) from music'
    }
  }

  module.exports = sqlMap
