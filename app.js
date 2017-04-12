var mongo=require("mongoskin");
var db=mongo.db("mongodb://localhost:27017/DB",{native_parser:true});
var crypto=require("crypto");
var express=require("express");
var app=express();
app.use(function(req,res){
db.bind("homeWork7");

db.homeWork7.findOne({},function(err,item){
    console.log(item);
var decipher = crypto.createDecipher("aes256","asaadsaad");
  var dec = decipher.update(item.message,'hex','utf8')
    db.close();
    res.end(dec);
});

})
app.listen(4000);
