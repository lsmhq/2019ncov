var url = "mongodb://netty:123456@39.106.182.142:27017/nettydb";
const mongo = {
    creat:(MongoClient, name)=>{
        MongoClient.connect(url, (err, db) => {
            if (err) throw err;
            var dbase = db.db("nettydb");
            dbase.createCollection(name, function (err, res) {
                if (err) throw err;
                console.log("创建集合!");
                db.close();
            });
        })
    },
    connect:(MongoClient, callback)=>{
        MongoClient.connect(url, (err, db) => {
            if (err) throw err;
            else callback(db);
        })
    }
}
module.exports = mongo;