/**
 * Created by Paushali on 11/28/2016.
 */
/**
 * Created by Paushali on 11/26/2016.
 */
/**
 * Created by Paushali on 11/26/2016.
 */

var express = require('express');
var path = require('path');
var MongoClient = require('mongodb');

var app = express();
var url= 'mongodb://Admin:<pass>@ds111748.mlab.com:11748/heroku_hmdkkdxq';
var db;

app.use('/', express.static(path.join(__dirname, 'public')));

MongoClient.connect(url, function (err, database) {
    db = database;
    console.log("Database connection ready");
});

app.get("/abc",function (request, response) {
    console.log("in get");
    var PrimaryKey = request.query.rownum;
    console.log("primary key is " + PrimaryKey);
    var collection = db.collection('places1');
    var constraint = {'id': parseInt(PrimaryKey, 10)};
    collection.findOne(constraint,function (err, item) {
        console.log(item);
        response.header("Content-type: application/json");
        response.send(item);
    });

    // db.close();
});
//db.close();
//app.listen(3000);
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Our app is running on ' + port);
});
