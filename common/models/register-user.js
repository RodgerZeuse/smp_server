"use strict";
var config = require("../../server/config.json");
var path = require("path");
var app = require("../../server/server");
let senderAddress = "smp@gmail.com";
let current_login_user = "";
module.exports = function(Registeruser) {
  Registeruser.observe("access", function(ctx, next) {
    const token = ctx.options && ctx.options.accessToken;
    const userId = token && token.userId;
    console.log("current_login_user ====>", userId);
    current_login_user = userId;
    next();
  });

  Registeruser.on("resetPasswordRequest", function(info) {
    console.log(info.accessToken);
    console.log(info.email); // the email of the requested user
    console.log(info.accessToken.id); // the temp access token to allow password reset

    // requires AccessToken.belongsTo(User)
    // info.accessToken.user(function (err, user) {
    //   console.log(user); // the actual user
    // });

    // var url = 'http://' + config.host + ':' + config.port + '/registerusers/api/reset-password';
    var url = "http://localhost:4200/membership/reset-password";
    var html =
      'Click <a href="' +
      url +
      "?access_token=" +
      info.accessToken.id +
      '">here</a> to reset your password';

    Registeruser.app.models.Email.send(
      {
        to: info.email,
        from: senderAddress,
        subject: "Password reset",
        html: html
      },
      function(err) {
        if (err)
          return console.log("> error sending password reset email", err);
        console.log("> sending password reset email to:", info.email);
      }
    );
  });

  //   Registeruser.observe('before save', async function (ctx, next) {
  //     console.log(ctx.instance);
  //     Registeruser.validatesUniquenessOf('companyName', {message: 'company is not unique'});
  //     next();
  // });

  Registeruser.observe("after save", async function(ctx, next) {
    // console.log('new user =>', ctx.instance.email);
    // console.log('new user =>', ctx.instance.account_type);
    // console.log('new user =>', ctx.instance);
    // if (ctx.isNewInstance) {
    //     if (ctx.instance.account_type == 'company') {
    //         Registeruser.findById(ctx.instance.id, (err, users) => {
    //             if (err) throw (err);
    //             console.log(users)
    //             var Role = app.models.Role;
    //             var RoleMapping = app.models.RoleMapping;
    //             console.log('====== login user', current_login_user)
    //             RoleMapping.find({ where: { principalId: (current_login_user == undefined) ? '' : current_login_user } }, (err, admin) => {
    //                 console.log('=====> admin', admin.length)
    //                 if (err) throw err
    //                 if (admin.length < 1) {
    //                     Role.findOne({ name: 'companyAdmin' }, (err, role) => {
    //                         console.log(role)
    //                         if (!role) {
    //                             Role.create({
    //                                 name: 'companyAdmin'
    //                             }, (err, role) => {
    //                                 if (err) throw (err);
    //                                 console.log("New Role: ", role);
    //                                 role.principals.create({
    //                                     principalType: RoleMapping.USER,
    //                                     principalId: ctx.instance.id
    //                                 }, (err, principal) => {
    //                                     if (err) throw (err);
    //                                     app.models.Company.create({ name: ctx.instance.companyName, address: "", registerUserId: ctx.instance.id }, function (err, res) {
    //                                         if (err) {
    //                                             console.log(err);
    //                                         } else {
    //                                             console.log(res);
    //                                             Registeruser.patchOrCreateWithWhere({"id":ctx.instance.id},{"companyId":res.id}, function(err, res){
    //                                                         if(err){
    //                                                           console.log('admin updated for company erro',err);
    //                                                           // throw err
    //                                                         }else{
    //                                                           console.log('admin updated for company',res);
    //                                                         }
    //                                             });
    //                                     }
    //                                     });
    //                                 });
    //                             });
    //                         } else {
    //                             role.principals.create({
    //                                 principalType: RoleMapping.USER,
    //                                 principalId: ctx.instance.id
    //                             }, (err, principal) => {
    //                                 if (err) throw (err);
    //                                 app.models.Company.create({ name: ctx.instance.companyName, address: "", registerUserId: ctx.instance.id }, function (err, res) {
    //                                     if (err) {
    //                                         console.log(err);
    //                                     } else {
    //                                         console.log(res);
    //                                         Registeruser.patchOrCreateWithWhere({"id":ctx.instance.id},{"companyId":res.id}, function(err, res){
    //                                             if(err){
    //                                               console.log('admin updated for company erro',err);
    //                                               // throw err
    //                                             }else{
    //                                               console.log('admin updated for company',res);
    //                                             }
    //                                 });
    //                                     }
    //                                     console.log("==============")
    //                                 });
    //                             });
    //                         }
    //                     });
    //                 } else {
    //                     Role.findOne({ name: 'teamMember' }, (err, role) => {
    //                         if (!role) {
    //                             Role.create({
    //                                 name: 'teamMember'
    //                             }, (err, role) => {
    //                                 if (err) throw (err);
    //                                 console.log("New Role: ", role);
    //                                 role.principals.create({
    //                                     principalType: RoleMapping.USER,
    //                                     principalId: ctx.instance.id
    //                                 }, (err, principal) => {
    //                                     if (err) throw (err);
    //                                     console.log(ctx.instance.permissionsToUsers);
    //                                     //     let perm = ctx.instance.permissionsToUsers.toString();
    //                                     //   //   for(let i =0 ; i<ctx.instance.permissionsToUsers.length; i++){
    //                                     //         let permission = ctx.instance.permissionsToUsers[0];
    //                                     //         console.log(permission)
    //                                     //     if(ctx.instance.permissionsToUsers.length == 1 ){
    //                                     //     if(permission == 'Read'){
    //                                     //       Role.findOne({where:{name: 'R'}}, (err, role) => {
    //                                     //           console.log( '=======>',role);
    //                                     //         if(!role){
    //                                     //             Role.create({
    //                                     //                 name: 'R'
    //                                     //             }, (err, role) => {
    //                                     //                 if (err) throw(err);
    //                                     //                 console.log("New Role: ", role);
    //                                     //                 role.principals.create({
    //                                     //                     principalType: RoleMapping.USER,
    //                                     //                     principalId: ctx.instance.id
    //                                     //                 }, (err, principal) => {
    //                                     //                     if (err) throw(err);
    //                                     //                 });
    //                                     //             });
    //                                     //         }else{
    //                                     //             role.principals.create({
    //                                     //                 principalType: RoleMapping.USER,
    //                                     //                 principalId: ctx.instance.id
    //                                     //             }, (err, principal) => {
    //                                     //                 if (err) throw(err);
    //                                     //                 console.log(ctx.instance.permissionsToUsers);
    //                                     //             });
    //                                     //         }
    //                                     //     });
    //                                     //     }else if(permission == 'Create Campaign'){
    //                                     //       Role.findOne({where:{name: 'W'}}, (err, role) => {
    //                                     //           console.log( '=======>',role);
    //                                     //         if(!role){
    //                                     //             Role.create({
    //                                     //                 name: 'W'
    //                                     //             }, (err, role) => {
    //                                     //                 if (err) throw(err);
    //                                     //                 console.log("New Role: ", role);
    //                                     //                 role.principals.create({
    //                                     //                     principalType: RoleMapping.USER,
    //                                     //                     principalId: ctx.instance.id
    //                                     //                 }, (err, principal) => {
    //                                     //                     if (err) throw(err);
    //                                     //                 });
    //                                     //             });
    //                                     //         }else{
    //                                     //             role.principals.create({
    //                                     //                 principalType: RoleMapping.USER,
    //                                     //                 principalId: ctx.instance.id
    //                                     //             }, (err, principal) => {
    //                                     //                 if (err) throw(err);
    //                                     //                 console.log(ctx.instance.permissionsToUsers);
    //                                     //             });
    //                                     //         }
    //                                     //     });
    //                                     //     }else if(permission == 'Delete'){
    //                                     //       Role.findOne({where:{name: 'D'}}, (err, role) => {
    //                                     //           console.log( '=======>',role);
    //                                     //         if(!role){
    //                                     //             Role.create({
    //                                     //                 name: 'D'
    //                                     //             }, (err, role) => {
    //                                     //                 if (err) throw(err);
    //                                     //                 console.log("New Role: ", role);
    //                                     //                 role.principals.create({
    //                                     //                     principalType: RoleMapping.USER,
    //                                     //                     principalId: ctx.instance.id
    //                                     //                 }, (err, principal) => {
    //                                     //                     if (err) throw(err);
    //                                     //                 });
    //                                     //             });
    //                                     //         }else{
    //                                     //             role.principals.create({
    //                                     //                 principalType: RoleMapping.USER,
    //                                     //                 principalId: ctx.instance.id
    //                                     //             }, (err, principal) => {
    //                                     //                 if (err) throw(err);
    //                                     //                 console.log(ctx.instance.permissionsToUsers);
    //                                     //             });
    //                                     //         }
    //                                     //     });
    //                                     //     }
    //                                     //   }else if(ctx.instance.permissionsToUsers.length == 2){
    //                                     //       if(perm.match(/Create Campaign,Read/g)){
    //                                     //           Role.findOne({where:{name: 'RW'}}, (err, role) => {
    //                                     //               console.log( '=======>',role);
    //                                     //             if(!role){
    //                                     //                 Role.create({
    //                                     //                     name: 'RW'
    //                                     //                 }, (err, role) => {
    //                                     //                     if (err) throw(err);
    //                                     //                     console.log("New Role: ", role);
    //                                     //                     role.principals.create({
    //                                     //                         principalType: RoleMapping.USER,
    //                                     //                         principalId: ctx.instance.id
    //                                     //                     }, (err, principal) => {
    //                                     //                         if (err) throw(err);
    //                                     //                     });
    //                                     //                 });
    //                                     //             }else{
    //                                     //                 role.principals.create({
    //                                     //                     principalType: RoleMapping.USER,
    //                                     //                     principalId: ctx.instance.id
    //                                     //                 }, (err, principal) => {
    //                                     //                     if (err) throw(err);
    //                                     //                     console.log(ctx.instance.permissionsToUsers);
    //                                     //                 });
    //                                     //             }
    //                                     //         });
    //                                     //       }else if(perm.match(/Delete,Read/g)){
    //                                     //           Role.findOne({where:{name: 'RD'}}, (err, role) => {
    //                                     //               console.log( '=======>',role);
    //                                     //             if(!role){
    //                                     //                 Role.create({
    //                                     //                     name: 'RD'
    //                                     //                 }, (err, role) => {
    //                                     //                     if (err) throw(err);
    //                                     //                     console.log("New Role: ", role);
    //                                     //                     role.principals.create({
    //                                     //                         principalType: RoleMapping.USER,
    //                                     //                         principalId: ctx.instance.id
    //                                     //                     }, (err, principal) => {
    //                                     //                         if (err) throw(err);
    //                                     //                     });
    //                                     //                 });
    //                                     //             }else{
    //                                     //                 role.principals.create({
    //                                     //                     principalType: RoleMapping.USER,
    //                                     //                     principalId: ctx.instance.id
    //                                     //                 }, (err, principal) => {
    //                                     //                     if (err) throw(err);
    //                                     //                     console.log(ctx.instance.permissionsToUsers);
    //                                     //                 });
    //                                     //             }
    //                                     //         });
    //                                     //       }
    //                                     //   }else if(ctx.instance.permissionsToUsers.length == 3){
    //                                     //       Role.findOne({where:{name: 'RWD'}}, (err, role) => {
    //                                     //           console.log( '=======>',role);
    //                                     //         if(!role){
    //                                     //             Role.create({
    //                                     //                 name: 'RWD'
    //                                     //             }, (err, role) => {
    //                                     //                 if (err) throw(err);
    //                                     //                 console.log("New Role: ", role);
    //                                     //                 role.principals.create({
    //                                     //                     principalType: RoleMapping.USER,
    //                                     //                     principalId: ctx.instance.id
    //                                     //                 }, (err, principal) => {
    //                                     //                     if (err) throw(err);
    //                                     //                 });
    //                                     //             });
    //                                     //         }else{
    //                                     //             role.principals.create({
    //                                     //                 principalType: RoleMapping.USER,
    //                                     //                 principalId: ctx.instance.id
    //                                     //             }, (err, principal) => {
    //                                     //                 if (err) throw(err);
    //                                     //                 console.log(ctx.instance.permissionsToUsers);
    //                                     //             });
    //                                     //         }
    //                                     //     });
    //                                     //   }
    //                                 });
    //                             });
    //                         } else {
    //                             role.principals.create({
    //                                 principalType: RoleMapping.USER,
    //                                 principalId: ctx.instance.id
    //                             }, (err, principal) => {
    //                                 if (err) throw (err);
    //                                 // console.log(ctx.instance)
    //                                 // console.log(ctx.instance.permissionsToUsers);
    //                                 //     let perm = ctx.instance.permissionsToUsers.toString();
    //                                 //   //   for(let i =0 ; i<ctx.instance.permissionsToUsers.length; i++){
    //                                 //         let permission = ctx.instance.permissionsToUsers[0];
    //                                 //         console.log(permission)
    //                                 //     if(ctx.instance.permissionsToUsers.length == 1 ){
    //                                 //     if(permission == 'Read'){
    //                                 //       Role.findOne({where:{name: 'R'}}, (err, role) => {
    //                                 //           console.log( '=======>',role);
    //                                 //         if(!role){
    //                                 //             Role.create({
    //                                 //                 name: 'R'
    //                                 //             }, (err, role) => {
    //                                 //                 if (err) throw(err);
    //                                 //                 console.log("New Role: ", role);
    //                                 //                 role.principals.create({
    //                                 //                     principalType: RoleMapping.USER,
    //                                 //                     principalId: ctx.instance.id
    //                                 //                 }, (err, principal) => {
    //                                 //                     if (err) throw(err);
    //                                 //                 });
    //                                 //             });
    //                                 //         }else{
    //                                 //             role.principals.create({
    //                                 //                 principalType: RoleMapping.USER,
    //                                 //                 principalId: ctx.instance.id
    //                                 //             }, (err, principal) => {
    //                                 //                 if (err) throw(err);
    //                                 //                 console.log(ctx.instance.permissionsToUsers);
    //                                 //             });
    //                                 //         }
    //                                 //     });
    //                                 //     }else if(permission == 'Create Campaign'){
    //                                 //       Role.findOne({where:{name: 'W'}}, (err, role) => {
    //                                 //           console.log( '=======>',role);
    //                                 //         if(!role){
    //                                 //             Role.create({
    //                                 //                 name: 'W'
    //                                 //             }, (err, role) => {
    //                                 //                 if (err) throw(err);
    //                                 //                 console.log("New Role: ", role);
    //                                 //                 role.principals.create({
    //                                 //                     principalType: RoleMapping.USER,
    //                                 //                     principalId: ctx.instance.id
    //                                 //                 }, (err, principal) => {
    //                                 //                     if (err) throw(err);
    //                                 //                 });
    //                                 //             });
    //                                 //         }else{
    //                                 //             role.principals.create({
    //                                 //                 principalType: RoleMapping.USER,
    //                                 //                 principalId: ctx.instance.id
    //                                 //             }, (err, principal) => {
    //                                 //                 if (err) throw(err);
    //                                 //                 console.log(ctx.instance.permissionsToUsers);
    //                                 //             });
    //                                 //         }
    //                                 //     });
    //                                 //     }else if(permission == 'Delete'){
    //                                 //       Role.findOne({where:{name: 'D'}}, (err, role) => {
    //                                 //           console.log( '=======>',role);
    //                                 //         if(!role){
    //                                 //             Role.create({
    //                                 //                 name: 'D'
    //                                 //             }, (err, role) => {
    //                                 //                 if (err) throw(err);
    //                                 //                 console.log("New Role: ", role);
    //                                 //                 role.principals.create({
    //                                 //                     principalType: RoleMapping.USER,
    //                                 //                     principalId: ctx.instance.id
    //                                 //                 }, (err, principal) => {
    //                                 //                     if (err) throw(err);
    //                                 //                 });
    //                                 //             });
    //                                 //         }else{
    //                                 //             role.principals.create({
    //                                 //                 principalType: RoleMapping.USER,
    //                                 //                 principalId: ctx.instance.id
    //                                 //             }, (err, principal) => {
    //                                 //                 if (err) throw(err);
    //                                 //                 console.log(ctx.instance.permissionsToUsers);
    //                                 //             });
    //                                 //         }
    //                                 //     });
    //                                 //     }
    //                                 //   }else if(ctx.instance.permissionsToUsers.length == 2){
    //                                 //       if(perm.match(/Create Campaign,Read/g)){
    //                                 //           Role.findOne({where:{name: 'RW'}}, (err, role) => {
    //                                 //               console.log( '=======>',role);
    //                                 //             if(!role){
    //                                 //                 Role.create({
    //                                 //                     name: 'RW'
    //                                 //                 }, (err, role) => {
    //                                 //                     if (err) throw(err);
    //                                 //                     console.log("New Role: ", role);
    //                                 //                     role.principals.create({
    //                                 //                         principalType: RoleMapping.USER,
    //                                 //                         principalId: ctx.instance.id
    //                                 //                     }, (err, principal) => {
    //                                 //                         if (err) throw(err);
    //                                 //                     });
    //                                 //                 });
    //                                 //             }else{
    //                                 //                 role.principals.create({
    //                                 //                     principalType: RoleMapping.USER,
    //                                 //                     principalId: ctx.instance.id
    //                                 //                 }, (err, principal) => {
    //                                 //                     if (err) throw(err);
    //                                 //                     console.log(ctx.instance.permissionsToUsers);
    //                                 //                 });
    //                                 //             }
    //                                 //         });
    //                                 //       }else if(perm.match(/Delete,Read/g)){
    //                                 //           Role.findOne({where:{name: 'RD'}}, (err, role) => {
    //                                 //               console.log( '=======>',role);
    //                                 //             if(!role){
    //                                 //                 Role.create({
    //                                 //                     name: 'RD'
    //                                 //                 }, (err, role) => {
    //                                 //                     if (err) throw(err);
    //                                 //                     console.log("New Role: ", role);
    //                                 //                     role.principals.create({
    //                                 //                         principalType: RoleMapping.USER,
    //                                 //                         principalId: ctx.instance.id
    //                                 //                     }, (err, principal) => {
    //                                 //                         if (err) throw(err);
    //                                 //                     });
    //                                 //                 });
    //                                 //             }else{
    //                                 //                 role.principals.create({
    //                                 //                     principalType: RoleMapping.USER,
    //                                 //                     principalId: ctx.instance.id
    //                                 //                 }, (err, principal) => {
    //                                 //                     if (err) throw(err);
    //                                 //                     console.log(ctx.instance.permissionsToUsers);
    //                                 //                 });
    //                                 //             }
    //                                 //         });
    //                                 //       }
    //                                 //   }else if(ctx.instance.permissionsToUsers.length == 3){
    //                                 //       Role.findOne({where:{name: 'RWD'}}, (err, role) => {
    //                                 //           console.log( '=======>',role);
    //                                 //         if(!role){
    //                                 //             Role.create({
    //                                 //                 name: 'RWD'
    //                                 //             }, (err, role) => {
    //                                 //                 if (err) throw(err);
    //                                 //                 console.log("New Role: ", role);
    //                                 //                 role.principals.create({
    //                                 //                     principalType: RoleMapping.USER,
    //                                 //                     principalId: ctx.instance.id
    //                                 //                 }, (err, principal) => {
    //                                 //                     if (err) throw(err);
    //                                 //                 });
    //                                 //             });
    //                                 //         }else{
    //                                 //             role.principals.create({
    //                                 //                 principalType: RoleMapping.USER,
    //                                 //                 principalId: ctx.instance.id
    //                                 //             }, (err, principal) => {
    //                                 //                 if (err) throw(err);
    //                                 //                 console.log(ctx.instance.permissionsToUsers);
    //                                 //             });
    //                                 //         }
    //                                 //     });
    //                                 //   }
    //                             });
    //                         }
    //                     });
    //                 }
    //             });
    //         });
    //     }
    // }
  });

  // Registeruser.validateEmail =  function(email,cb){

  //     Registeruser.find({
  //         where: {
  //             email: email
  //         }
  //     },function(err, response) {
  //         if (err) throw err;

  //         console.log(response.length)
  //         if(response.length > 0){
  //             console.log(response)
  //             cb(null, true);
  //         }else{
  //             cb(null, false);
  //         }
  //     });

  //   };
  //   Registeruser.remoteMethod(
  //     'validateEmail', {
  //       isStatic: true,
  //       description:'validate email uniqueness',
  //       accepts: [

  //         {arg: 'email', type: 'string'}
  //       ],
  //       returns: {
  //         arg: "email",
  //         type: "boolean",
  //         root:true
  //       },
  //       http: {
  //         path: '/validateEmail',
  //         verb: 'get'
  //       }
  //     });

  // Registeruser.validateEmail = function (email, cb) {

  //     Registeruser.find({
  //         where: {
  //             email: email
  //         }
  //     }, function (err, response) {
  //         if (err) throw err;

  //         console.log(response.length)
  //         if (response.length > 0) {
  //             console.log(response)
  //             cb(null, true);
  //         } else {
  //             cb(null, false);
  //         }
  //       });

  // Registeruser.validateEmail =  function(email,cb){

  //     Registeruser.find({
  //         where: {
  //             email: email
  //         }
  //     },function(err, response) {
  //         if (err) throw err;

  //         console.log(response.length)
  //         if(response.length > 0){
  //             console.log(response)
  //             cb(null, true);
  //         }else{
  //             cb(null, false);
  //         }
  //     });

  //   };
  //   Registeruser.remoteMethod(
  //     'validateEmail', {
  //       isStatic: true,
  //       description:'validate email uniqueness',
  //       accepts: [

  //         {arg: 'email', type: 'string'}
  //       ],
  //       returns: {
  //         arg: "email",
  //         type: "boolean",
  //         root:true
  //       },
  //       http: {
  //         path: '/validateEmail',
  //         verb: 'get'
  //       }
  //     });

  Registeruser.validateEmail = function(email, cb) {
    Registeruser.find(
      {
        where: {
          email: email
        }
      },
      function(err, response) {
        if (err) throw err;

        console.log(response.length);
        if (response.length > 0) {
          console.log(response);
          cb(null, true);
        } else {
          cb(null, false);
        }
      }
    );
  };
  Registeruser.remoteMethod("validateEmail", {
    isStatic: true,
    description: "validate email uniqueness",
    accepts: [
      {
        arg: "email",
        type: "string"
      }
    ],
    returns: {
      arg: "email",
      type: "boolean",
      root: true
    },
    http: {
      path: "/validateEmail",
      verb: "get"
    }
  });

  Registeruser.validateCompany = function(companyName, cb) {
    // var pattern = new RegExp('.*'+companyName+'.*', "i"); /* case-insensitive RegExp search */
    Registeruser.find(
      {
        where: {
          companyName: {
            regexp: "^" + companyName + "$/i"
          }
          // companyName: {"like": '%'+companyName+'%'}
          // companyName:companyName
        }
      },
      function(err, response) {
        if (err) throw err;

        console.log(response.length);
        if (response.length > 0) {
          console.log(response);
          cb(null, true);
        } else {
          cb(null, false);
        }
      }
    );
  };
  Registeruser.remoteMethod("validateCompany", {
    isStatic: true,
    description: "validate company uniqueness",
    accepts: [
      {
        arg: "companyName",
        type: "string"
      }
    ],
    returns: {
      arg: "companyName",
      type: "boolean",
      root: true
    },
    http: {
      path: "/validateCompany",
      verb: "get"
    }
  });

  Registeruser.getRights = function(cb) {
    console.log("login user ==>", current_login_user);
    let loginUser = current_login_user;
    let userRights = [];
    if (loginUser !== undefined) {
      Registeruser.findById(
        loginUser,
        {
          include: {
            securityGroups: "Rights"
          }
        },
        function(err, response) {
          if (err) console.log(err);

          response = response.toJSON();
          // console.log(response)

          if (
            response.account_type === "individual" ||
            response.account_type === "indivisual"
          ) {
            app.models.SystemPermissions.find(function(err, permission) {
              if (err) console.log(err);
              let individualPermissions = [];
              permission.filter(permissions => {
                if (permissions.key !== "MANAGE_COMPANY") {
                  individualPermissions.push(permissions);
                }
              });
              cb(null, individualPermissions);
            });
          } else if (response.account_type === "companyUser") {
            // console.log(response.securityGroups)
            response.securityGroups.forEach(securityGroup => {
              console.log(securityGroup.Rights);
              securityGroup.Rights.forEach(right => {
                userRights.push(right);
                console.log(right);
              });
            });
            cb(null, userRights);
          }
        }
      );
    }
    // console.log(userRights)
    // cb(null, userRights)
  };
  Registeruser.remoteMethod("getRights", {
    isStatic: true,
    description: "Return User Rights",
    accepts: [],
    returns: {
      arg: "rights",
      type: "array",
      root: true
    },
    http: {
      path: "/getRights",
      verb: "get"
    }
  });
};
