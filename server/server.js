"use strict";

var loopback = require("loopback");
var boot = require("loopback-boot");
var express = require("express");
var request = require("request");
var path = require("path");
var app = (module.exports = loopback());
process.env.PWD = process.cwd();
app.set("view engine", "ejs");
// app.use(express.static(__dirname+'/views/app-preview'));
// console.log("directory path",__dirname+'/views/app-preview')
// app.use(express.static(__dirname+'/views/app-preview'));
// app.use(express.static('/Users/yamin/Documents/workspace/SocialMediaPoster../server/server/views'));
require("loopback-ds-tree-mixin")(app);
// app.start = function() {
//   // start the web server
//   return app.listen(function() {
//     app.emit('started');
//     var baseUrl = app.get('url').replace(/\/$/, '');
//     console.log('Web server listening at: %s', baseUrl);
//     if (app.get('loopback-component-explorer')) {
//       var explorerPath = app.get('loopback-component-explorer').mountPath;
//       console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
//     }
//   });
// };

// app.start = () => {
//   app.server = app.listen(() => {
//     app.emit('started')
//     const baseUrl = app.get('url').replace(/\/$/, '')

//     console.log('Web server listening at: %s', baseUrl)
//     if (app.get('loopback-component-explorer')) {
//       const explorerPath = app.get('loopback-component-explorer').mountPath

//       console.log('Browse your REST API at %s%s', baseUrl, explorerPath)
//     }
//   })

//   return app.server
// }

var ds = loopback.createDataSource({
  connector: require("loopback-component-storage"),
  provider: "filesystem",
  root: path.join(process.env.PWD)
});

var container = ds.createModel("Container");

app.start = function() {
  // start the web server
  var server = app.listen(function() {
    app.emit("started", server);
    var baseUrl = app.get("url").replace(/\/$/, "");
    console.log("Web server listening at: %s", baseUrl);
    if (app.get("loopback-component-explorer")) {
      var explorerPath = app.get("loopback-component-explorer").mountPath;
      console.log("Browse your REST API at %s%s", baseUrl, explorerPath);
    }
  });
  return server;
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) {
    // app.start();
    app.io = require("socket.io")(app.start());
    // console.log('app start =>',app.io);
    // app.io = require('socket.io')(app.start());

    // // console.log(app.io)
    // require('socketio-auth')(app.io, {
    //   authenticate: function (socket, value, callback) {
    //       var AccessToken = app.models.AccessToken;
    //       //get credentials sent by the client
    //       var token = AccessToken.find({
    //         where:{
    //           and: [{ userId: value.userId }, { id: value.id }]
    //         }
    //       }, function(err, tokenDetail){
    //         if (err) throw err;
    //         if(tokenDetail.length){
    //           callback(null, true);
    //         } else {
    //           callback(null, false);
    //         }
    //       });
    //     } //authenticate function..
    // });
    // app.io.on('connection', function(socket){
    //   console.log('a user connected',socket.id);
    //   // console.log(app.models.Todo)
    //   socket.on('message',function(data){
    //     console.log("socket io connected");
    //     app.models.Campaign.findOne( {where: {id: data},include:{"campaignComments":"registerUser"}},(err,commnets) =>{

    //       app.io.emit('message', commnets);
    //     //   if(err){
    //     //   console.log("getting error from fetching campaign")
    //     //  }else{
    //     //   console.log("real time get campaign",commnets);
    //     //   app.io.emit('message', commnets);
    //     //  }

    //     })

    //   }).setMaxListeners(100000);
    //   socket.on('disconnect', function(){
    //       console.log('user disconnected');
    //   });
    // });
  }
});
