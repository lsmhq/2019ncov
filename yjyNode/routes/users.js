var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:123456@39.106.182.142:27017/nettydb";
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/api',function(req,res,next){
  MongoClient.connect(url,(err,db) =>{
    if(err){
      let obj = {}
      console.log('数据库连接失败')
      obj.msg = '数据库连接失败'
      obj.code = 500
      delete obj.data
      res.send(obj)
    }else{
      let obj = {}
      var dbo = db.db("nettydb");
      obj.msg = '数据库连接成功'
      obj.code = 200
      dbo.collection('user').find({}).toArray((err,result)=>{
        if(err){
          console.log('查询失败')
          obj.msg = err.errmsg
          obj.code = 400
          delete obj.data
          res.send(obj)
        }else{
          console.log('查询成功');
          obj.msg = '查询成功'
          obj.code = 200
          obj.data = result
          res.send(obj)
        }
      })
    }
    db.close();
    // 中间件
    // next()
  })
})
module.exports = router;
