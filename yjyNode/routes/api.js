var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongo = require('../public/js/mongo');
var fs = require('fs')
/* GET users listing. */

router.get('/good',function(req,res,next){
  let query = req.query
  if(req.query.keyword){
    mongo.connect( MongoClient, function(db) {
      var dbo = db.db("nettydb");
      let rgb = new RegExp(query.keyword);
      dbo.collection('good').find({"name":rgb}).toArray((e, result) => {
        if(e) throw err
        console.log(result)
        res.send({
          code:200,
          msg:'查询成功',
          data:result
        })
      })
    });
  }else{
    findAll('good',res);
  }
})

router.post('/login', (req, res, next) => {
  let body  = req.body;
  console.log(body)
  let obj = {}
  mongo.connect( MongoClient, function(db) {
    var dbo = db.db("nettydb");
    dbo.collection('user').find({"name":body.name}).toArray((e, result) => {
      if(e) throw err
      console.log(result)
      if(result.length > 0){
        let data = result[0];
        if(data.name == body.name && data.password == body.password){
          obj.code = 200
          obj.msg = '登录成功'
          obj.data = data
          res.send(obj);
        }else{
          obj.code = 10000
          obj.msg = '账号或密码错误'
          obj.data = {}
          res.send(obj);
        }
      }else{
        obj.code = 10000
        obj.msg = '账号或密码错误'
        obj.data = {}
        res.send(obj);
      }
    })
  });
})

router.get('/delete', (req, res, next) => {
  let query = req.query;
  console.log(query)
  mongo.connect( MongoClient, function(db) {
    var dbo = db.db("nettydb");
    var whereStr = {}
    dbo.collection(query.name).deleteMany(whereStr, function(err, obj) {
      if (err) throw err;
      console.log("文档删除成功");
      res.send({
        code:200,
        msg:'删除成功'
      })
      db.close();
    });
  });
})

router.post('/regist', (req, res, next) => {
  let body  = req.body;
  console.log(body)
  let obj = {
    code:'',
    msg:''
  }
  mongo.connect(MongoClient, function(db) {
    var dbo = db.db("nettydb");
    dbo.collection("user").find({"name":body.name}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result)
      if(result.length > 0){
        obj.code = 10000;
        obj.msg = '用户名已被占用';
        obj.data = []
        res.send(obj);
      }else{next()}
      db.close();
    });
  });
})

router.post('/regist', (req, res, next) => {
  let body  = req.body;
  console.log(body)
  let obj = {
    code:'',
    msg:''
  }
  mongo.connect(MongoClient, function(db) {
    var dbo = db.db("nettydb");
    var myobj = { userId:getRandom(10),name:body.name,password:body.password ,avator:'http://192.168.2.188:8000/img/head.jpeg'};
    dbo.collection("user").insertOne(myobj, function(err, ress) {
      if (err) throw err;
      console.log("文档插入成功");
      obj.code = 200;
      obj.msg = '注册成功';
      res.send(obj);
    });
    db.close();
  });
})

router.get('/userInfo', (req, res, next) => {
  // findAll('user',res);
  let query = req.query
  console.log(query)
  mongo.connect(MongoClient,(db) =>{
    var dbo = db.db("nettydb");
    let where = `${query.id}`.split(' ').join('');
    let obj = {}
    dbo.collection("user").find({"userId":where*1}).toArray(function(err, result) {
      if (err) throw err;
      // console.log("文档插入成功");
      console.log(result)
      obj.code = 200;
      obj.msg = '查询成功';
      obj.data = result
      res.send(obj);
    });
    db.close();
  })
})

router.post('/upload', (req, res, next) => {
  let body = req.body
  let file = body.file
  if(file){
    let fileValue = file.split(';')[1].split(',')[1];
    let data = Buffer.from(fileValue,'base64');
    let name = getRandom(20);
    fs.writeFile(`./public/img/${name}.png`,data,(e)=>{
      if(e){
        res.send({
          code:10000,
          msg:e
        })
      }else{
        res.send({
          code:200,
          msg:'上传成功',
          data:{
            url:`http://192.168.2.188:8000/img/${name}.png`,
          }
        })
      }
    })
  }
})

router.post('/setavator', (req, res, next)=>{
  let body = req.body;
  console.log(body)
  mongo.connect(MongoClient,(db)=>{
    var dbo = db.db("nettydb");
    let obj = body;
    let where = {"userId":obj.userId};
    let upDate = {$set: { "avator" : obj.avator}};
    dbo.collection("user").updateOne(where, upDate, (err, result)=>{
      if (err) throw err;
      res.send({
        code:200,
        msg:'头像修改成功'
      });
      db.close();
    }) 
  })
})

router.post('/publish', (req, res, next) => {
  let body = req.body;
  mongo.connect(MongoClient,(db)=>{
    var dbo = db.db("nettydb");
    let obj = {
      name:body.name,
      price:body.price,
      imgs:body.imgs,
      desc:body.desc,
      userid:body.userid,
      id:getRandom(10) + ""
    }
    dbo.collection("good").insertOne(obj, function(err, ress) {
      if (err) throw err;
      // console.log("文档插入成功");
      obj.code = 200;
      obj.msg = '发布成功';
      res.send(obj);
    });

    db.close();
  })
});

router.get('/detail', (req, res, next) => {
  let query = req.query;
  let obj = {}
  mongo.connect(MongoClient,(db)=>{
    var dbo = db.db("nettydb");
    console.log(typeof query.id)
    let where = `${query.id}`;
    dbo.collection("good").find({"id":where}).toArray(function(err, result) {
      if (err) throw err;
      // console.log("文档插入成功");
      console.log(result)
      obj.code = 200;
      obj.msg = '查询成功';
      obj.data = result
      res.send(obj);
    });
    db.close();
  })
});




function findAll(name,res){
  mongo.connect(MongoClient, (db) => {
    let obj = {}
    var dbo = db.db("nettydb");
    obj.msg = '数据库连接成功'
    obj.code = 200;
    dbo.collection(name).find({}).toArray((err,result)=>{
      if(err){
        console.log('查询失败')
        obj.msg = err.errmsg;
        obj.code = 400;
        delete obj.data
        res.send(obj)
      }else{
        console.log('查询成功');
        obj.msg = '查询成功'
        obj.code = 200
        obj.data = result
        res.send(obj)
      }
    });
    db.close();
  })
}



function getRandom(num){
  var random = Math.floor((Math.random()+Math.floor(Math.random()*9+1))*Math.pow(10,num-1));
  return random;
}
module.exports = router;
