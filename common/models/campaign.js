"use strict";
const Agenda = require("agenda");
const facebookService = require("../../server/boot/facebookService");
const twitterServices = require("../../server/boot/twitterService");
const pinterestServices = require("../../server/boot/pinterestService");
const textJob = require("../../server/boot/jobs/text-post-job");
const singleImagePost = require("../../server/boot/jobs/single-image-post-job");
const singleVideoPost = require("../../server/boot/jobs/single-video-post-job");
const multiImagePost = require("../../server/boot/jobs/multiple-image-post-job");

const appConfig = require("../../server/boot/config"); // Auth keys and redirect
const boxSDK = appConfig.boxSDK; // Box SDK
const querystring = require("querystring"); // Querystring stringifier
const box = require("box-node-sdk");
var googleDrive = require("google-drive");
const MongoClient = require("mongodb").MongoClient;
var app = require("../../server/server");
var loopback = require("loopback");
var http = require("http").Server(app);
// var moment = require('moment')
var fs = require("fs");
// const utils = require('loopback/lib/utils');
var io = require("socket.io")(http);
var utils = require("loopback-datasource-juggler/lib/utils");
var yt = require("../../server/boot/youtubeService");
var connector = {};
var moment = require("moment-timezone");

var download = require("download-file");

const url = "mongodb://localhost:27017";
const dbName = "smp_jobs";

let current_login_user = "";

var conString = "mongodb://localhost:27017/smp_jobs";
var agenda = new Agenda({
  db: {
    address: conString,
    collection: "jobs"
  }
});

// Use connect method to connect to the server

module.exports = function(Campaign) {
  Campaign.observe("access", function(ctx, next) {
    const token = ctx.options && ctx.options.accessToken;
    const userId = token && token.userId;
    // console.log('current_login_user ====>',userId);
    current_login_user = userId;

    // console.log('access =>',ctx);
    let context = ctx;
    next();
  });

  Campaign.observe("before save", async function(ctx, next) {
    console.log("ctx.instance", ctx.instance);
    if (ctx.instance && ctx.instance.state === "Scheduled") {
    }

    if (ctx.instance) {
      if (ctx.instance.state === "Post Now") {
        ctx.instance.state = "Posting.....";
      }
    } else if (ctx.currentInstance) {
      if (ctx.currentInstance.state === "Post Now") {
        ctx.instance.state = "Posting.....";
      }
    }
  });

  Campaign.observe("after save", async function(ctx, next) {
    console.log("after save =====><=====", ctx.instance.state);

    if (
      ctx.instance.state === "Scheduled" ||
      ctx.instance.state === "Post Now" ||
      ctx.instance.state === "Posting....."
    ) {
      if (ctx.instance.scheduledAt > ctx.instance.createdAt) {
        console.log(ctx.instance.type);

        if (ctx.instance.type == "text") {
          try {
            await Campaign.textJob(Campaign, ctx);
          } catch (err) {
            console.log(err);
          }
        } else {
          if (
            ctx.instance.type === "multiple-images" ||
            ctx.instance.type === "multiple-videos" ||
            ctx.instance.type === "multiple-files"
          ) {
            try {
              await Campaign.multiImage(Campaign, ctx);
            } catch (err) {
              console.log(err);
            }
          } else if (ctx.instance.type == "image") {
            try {
              console.log("single image post");
              await Campaign.singleImage(Campaign, ctx);
            } catch (err) {
              console.log(err);
            }
          } else if (ctx.instance.type == "video") {
            try {
              await Campaign.singleVideo(Campaign, ctx);
            } catch (err) {
              console.log(err);
            }
          } else {
            console.log("Type is empty");
          }
        }
      } else {
        console.log("scheduled date is not right ");
      }
    }

    console.log("here is campaign");
    next();
  });

  Campaign.observe("after delete", async function(ctx, next) {
    console.log("Deleted Object =>", ctx.Model.pluralModelName, ctx.where.id);
    try {
      Campaign.deleteAgendaJobs(ctx.where.id);
    } catch (err) {
      console.log(err);
    }
  });

  Campaign.textJob = async function(Campaign, ctx) {
    let jobs = await MongoClient.connect(url, {
      useNewUrlParser: true
    });
    let db = jobs.db("smp_jobs");
    try {
      const res = await db
        .collection("jobs")
        .find({
          name: "TextJob-" + ctx.instance.id
        })
        .toArray(function(err, res) {
          console.log(`res => ${JSON.stringify(res)}`);

          console.log(res.lockedAt);
          if (res.length > 0 || res.lockedAt == "undefined") {
            console.log("job alraedy exist");
            try {
              ctx.instance.updateTextJobs(
                ctx.instance.id,
                ctx.instance.scheduledAt
              );
            } catch (err) {
              console.log(err);
            }
          } else {
            try {
              console.log("media files not exist");
              textJob.textPostJob(Campaign, ctx, ctx.instance.scheduledAt);
            } catch (err) {
              console.log(err);
            }
          }
          jobs.close();
        });
    } catch (err) {
      console.log(err);
    }
  };
  Campaign.remoteMethod("textJob", {
    isStatic: true,
    accepts: [
      {
        arg: "campaignId",
        type: "string"
      }
    ],
    returns: {},
    http: {
      path: "/textJob",
      verb: "get"
    }
  });

  Campaign.prototype.updateTextJobs = async function(campaignId, scheduledAt) {
    MongoClient.connect(
      url,
      {
        useNewUrlParser: true
      },
      function(err, job) {
        if (err) throw err;
        const db = job.db(dbName);
        const jobs = db.collection("jobs");
        jobs.updateOne(
          {
            name: "TextJob-" + campaignId
          },
          {
            $set: {
              nextRunAt: scheduledAt
            }
          },
          function(err, result) {
            if (err) throw err;
            console.log(result);
            return result;
            db.close();
          }
        );
      }
    );
  };
  Campaign.remoteMethod("updateTextJobs", {
    isStatic: true,
    accepts: [
      {
        arg: "campaignId",
        type: "string"
      }
    ],
    returns: {
      arg: "jobs",
      root: true
    },
    http: {
      path: "/updateTextJobs",
      verb: "get"
    }
  });

  // multip image post

  Campaign.multiImage = async function(Campaign, ctx) {
    let jobs = await MongoClient.connect(url, {
      useNewUrlParser: true
    });
    let db = jobs.db("smp_jobs");
    try {
      const res = await db
        .collection("jobs")
        .find({
          name: "MultipleImageJob-" + ctx.instance.id
        })
        .toArray(function(err, res) {
          console.log(`res => ${JSON.stringify(res)}`);
          if (res.length > 0 || res.lockedAt == "undefined") {
            console.log("job alraedy exist");
            try {
              ctx.instance.updateMultiImageJobs(
                ctx.instance.id,
                ctx.instance.scheduledAt
              );
            } catch (err) {
              console.log(err);
            }
          } else {
            try {
              console.log(
                "media files length is => ",
                ctx.instance.mediaFiles.length
              );
              multiImagePost.multipImagePostJob(
                Campaign,
                ctx,
                ctx.instance.scheduledAt
              );
            } catch (err) {
              console.log(err);
            }
          }
          jobs.close();
        });
    } catch (err) {
      console.log(err);
    }
  };
  Campaign.remoteMethod("multiImage", {
    isStatic: true,
    accepts: [
      {
        arg: "campaignId",
        type: "string"
      }
    ],
    returns: {},
    http: {
      path: "/multiImage",
      verb: "get"
    }
  });

  Campaign.prototype.updateMultiImageJobs = async function(
    campaignId,
    scheduledAt
  ) {
    MongoClient.connect(
      url,
      {
        useNewUrlParser: true
      },
      function(err, job) {
        if (err) throw err;
        const db = job.db(dbName);
        const jobs = db.collection("jobs");
        jobs.updateOne(
          {
            name: "MultipleImageJob-" + campaignId
          },
          {
            $set: {
              nextRunAt: scheduledAt
            }
          },
          function(err, result) {
            if (err) throw err;
            console.log(result);
            return result;
            db.close();
          }
        );
      }
    );
  };
  Campaign.remoteMethod("updateMultiImageJobs", {
    isStatic: true,
    accepts: [
      {
        arg: "campaignId",
        type: "string"
      }
    ],
    returns: {
      arg: "jobs",
      root: true
    },
    http: {
      path: "/updateMultiImageJobs",
      verb: "get"
    }
  });

  // Single image post

  Campaign.singleImage = async function(Campaign, ctx) {
    let jobs = await MongoClient.connect(url, {
      useNewUrlParser: true
    });
    let db = jobs.db("smp_jobs");
    try {
      const res = await db
        .collection("jobs")
        .find({
          name: "SingleImageJob-" + ctx.instance.id
        })
        .toArray(function(err, res) {
          console.log(`res => ${JSON.stringify(res)}`);
          console.log(res.lockedAt);
          if (res.length > 0 || res.lockedAt == "undefined") {
            console.log("job alraedy exist");
            try {
              ctx.instance.updateSingleImageJobs(
                ctx.instance.id,
                ctx.instance.scheduledAt
              );
            } catch (err) {
              console.log(err);
            }
          } else {
            try {
              console.log(
                ctx.instance.mediaFiles.length,
                "<= media files length is "
              );
              singleImagePost.singleImagePostJob(
                Campaign,
                ctx,
                ctx.instance.scheduledAt
              );
            } catch (err) {
              console.log(err);
            }
          }
          jobs.close();
        });
    } catch (err) {
      console.log(err);
    }
  };
  Campaign.remoteMethod("singleImage", {
    isStatic: true,
    accepts: [
      {
        arg: "campaignId",
        type: "string"
      }
    ],
    returns: {},
    http: {
      path: "/singleImage",
      verb: "get"
    }
  });

  Campaign.prototype.updateSingleImageJobs = async function(
    campaignId,
    scheduledAt
  ) {
    MongoClient.connect(
      url,
      {
        useNewUrlParser: true
      },
      function(err, job) {
        if (err) throw err;
        const db = job.db(dbName);
        const jobs = db.collection("jobs");
        jobs.updateOne(
          {
            name: "SingleImageJob-" + campaignId
          },
          {
            $set: {
              nextRunAt: scheduledAt
            }
          },
          function(err, result) {
            if (err) throw err;
            console.log(result);
            return result;
            db.close();
          }
        );
      }
    );
  };
  Campaign.remoteMethod("updateSingleImageJobs", {
    isStatic: true,
    accepts: [
      {
        arg: "campaignId",
        type: "string"
      }
    ],
    returns: {
      arg: "jobs",
      root: true
    },
    http: {
      path: "/updateSingleImageJobs",
      verb: "get"
    }
  });

  // Single video post

  Campaign.singleVideo = async function(Campaign, ctx) {
    let jobs = await MongoClient.connect(url, {
      useNewUrlParser: true
    });
    let db = jobs.db("smp_jobs");
    try {
      const res = await db
        .collection("jobs")
        .find({
          name: "SingleVideoJob-" + ctx.instance.id
        })
        .toArray(function(err, res) {
          console.log(`res => ${JSON.stringify(res)}`);
          if (res.length > 0 || res.lockedAt == "undefined") {
            console.log("job alraedy exist");
            try {
              ctx.instance.updateVideoJobs(
                ctx.instance.id,
                ctx.instance.scheduledAt
              );
            } catch (err) {
              console.log(err);
            }
          } else {
            try {
              console.log(
                ctx.instance.mediaFiles.length,
                "<= media files length is "
              );
              singleVideoPost.singleVideoPostJob(
                Campaign,
                ctx,
                ctx.instance.scheduledAt
              );
            } catch (err) {
              console.log(err);
            }
          }
          jobs.close();
        });
    } catch (err) {
      console.log(err);
    }
  };
  Campaign.remoteMethod("singleVideo", {
    isStatic: true,
    accepts: [
      {
        arg: "campaignId",
        type: "string"
      }
    ],
    returns: {},
    http: {
      path: "/singleVideo",
      verb: "get"
    }
  });

  Campaign.prototype.updateVideoJobs = async function(campaignId, scheduledAt) {
    MongoClient.connect(
      url,
      {
        useNewUrlParser: true
      },
      function(err, job) {
        if (err) throw err;
        const db = job.db(dbName);
        const jobs = db.collection("jobs");
        jobs.updateOne(
          {
            name: "SingleVideoJob-" + campaignId
          },
          {
            $set: {
              nextRunAt: scheduledAt
            }
          },
          function(err, result) {
            if (err) throw err;
            console.log(result);
            return result;
            db.close();
          }
        );
      }
    );
  };
  Campaign.remoteMethod("updateVideoJobs", {
    isStatic: true,
    accepts: [
      {
        arg: "campaignId",
        type: "string"
      }
    ],
    returns: {
      arg: "jobs",
      root: true
    },
    http: {
      path: "/updateVideoImageJobs",
      verb: "get"
    }
  });

  Campaign.downloadImage = function(url, name, cb) {
    // var file = fs.createWriteStream("/Users/yamin/downloads/file.jpg");
    // var request = http.get("https://dl.dropboxusercontent.com/1/view/la9wu20zv7a5fdz/instagram.png", function(response) {
    //   response.pipe(file);
    // });

    // var url = "https://dl.dropboxusercontent.com/1/view/la9wu20zv7a5fdz/instagram.png"

    var options = {
      // directory: "/Users/yamin/downloads/",
      directory:
        "/Users/fistixdev/workspace/SocialMediaPoster/server/server/local-storage/download-images/",
      // filename: "1.jpg"
      filename: name
    };

    download(url, options, function(err) {
      if (err) {
        // throw err;
        console.log(err);
        // cb(null, false),
        cb(null, err);
      } else {
        console.log("done");
        // cb(null, true)
        cb(
          null,
          "http://192.168.1.126:3001/api/Containers/download-images/download/" +
            name
        );
      }
    });
  };
  Campaign.remoteMethod("downloadImage", {
    isStatic: true,
    accepts: [
      {
        arg: "url",
        type: "string"
      },
      {
        arg: "name",
        type: "string"
      }
    ],
    returns: {
      arg: "Image",
      root: true
    },
    http: {
      path: "/downloadImage",
      verb: "get"
    }
  });

  Campaign.googleDriveDownload = function(token, fileId) {
    var token = token,
      fileId = fileId;

    googleDrive(token)
      .files(fileId)
      .get(function(err, data) {
        console.log(data);
      });
  };
  Campaign.remoteMethod("googleDriveDownload", {
    isStatic: true,
    accepts: [
      {
        arg: "token",
        type: "string"
      },
      {
        arg: "fileId",
        type: "string"
      }
    ],
    returns: {
      arg: "Image",
      root: true
    },
    http: {
      path: "/googleDriveDownload",
      verb: "get"
    }
  });

  Campaign.getDifference = function(Campaign) {
    Campaign.find({}, function(err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      // console.log(res)
      Campaign.diff(1, res, function(err, result) {
        console.log(result);
      });
    });
  };
  Campaign.remoteMethod("getDifference", {
    isStatic: true,
    accepts: [],
    returns: {
      arg: "getDifference",
      root: true
    },
    http: {
      path: "/getDifference",
      verb: "get"
    }
  });

  // Box auth
  Campaign.boxAuthorization = function(res) {
    // console.log(res);
    // Build Box auth object
    const payload = {
      response_type: "code",
      client_id: appConfig.oauthClientId,
      redirect_uri: appConfig.redirectURI
    };

    // Build redirect URI and redirect
    const qs = querystring.stringify(payload);
    const authEndpoint = `https://account.box.com/api/oauth2/authorize?${qs}`;
    // res.setHeader('Access-Control-Allow-Origin', '*')
    res.redirect(authEndpoint);
  };
  Campaign.remoteMethod("boxAuthorization", {
    isStatic: true,
    accepts: [
      {
        arg: "res",
        type: "object",
        http: {
          source: "res"
        }
      }
    ],
    returns: {
      arg: "boxAuthorization",
      root: true
    },
    http: {
      path: "/boxAuthorization",
      verb: "get"
    }
  });

  // Box access token fetch
  Campaign.boxAccessTokenFetch = function(code, cb) {
    const sdk = new box({
      clientID: appConfig.oauthClientId,
      clientSecret: appConfig.oauthClientSecret
    });
    sdk.getTokensAuthorizationCodeGrant(code, null, function(err, tokenInfo) {
      if (err) {
        console.log("Error exchanging auth code!", err);
        cb(null, err);
      } else {
        const client = sdk.getPersistentClient(tokenInfo);

        // PERFORM API ACTIONS WITH CLIENT
        console.log(client._session._tokenInfo.accessToken);
        let accessToken = client._session._tokenInfo.accessToken;
        // return client._session._tokenInfo.accessToken;
        // console.log(client.BoxClient.PersistentSession._tokenInfo)
        cb(null, accessToken);
      }
    });
  };
  Campaign.remoteMethod("boxAccessTokenFetch", {
    isStatic: true,
    accepts: [
      {
        arg: "code",
        type: "string"
      }
    ],
    returns: {
      arg: "boxAccessTokenFetch",
      root: true
    },
    http: {
      path: "/boxAccessTokenFetch",
      verb: "get"
    }
  });

  Campaign.deleteAgendaJobs = async function(campaignId) {
    console.log("campaign ID =>", campaignId);

    agenda.cancel(
      {
        name: new RegExp(campaignId)
      },
      function(err, numRemoved) {
        if (err) {
          console.log(err);
        } else {
          console.log("=====> num removed", numRemoved);
        }
      }
    );
  };

  Campaign.remoteMethod("deleteAgendaJobs", {
    isStatic: true,
    accepts: [
      {
        arg: "Campaign",
        type: "string"
      }
    ],
    returns: {},
    http: {
      path: "/Campaign",
      verb: "get"
    }
  });

  Campaign.prototype.checkAuthentication = async function(ctx) {
    let user = await app.models.RegisterUser.find({
      where: {
        and: [
          {
            id: ctx.instance.registerUserId
          },
          {
            account_type: "company"
          }
        ]
      }
    });

    if (user.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  Campaign.remoteMethod("checkAuthentication", {
    isStatic: false,
    description: "check user auth",
    accepts: [
      {
        arg: "ctx",
        type: "object"
      }
    ],
    returns: {
      arg: "result",
      type: "string",
      root: true
    },
    http: {
      path: "/checkAuthentication",
      verb: "get"
    }
  });

  Campaign.prototype.checkCampaign = async function(ctx) {
    console.log("=====> id ", ctx.instance.id);
    let Campaign = await app.models.Campaign.find({
      where: {
        and: [
          {
            id: ctx.instance.id
          },
          {
            registerUserId: ctx.instance.registerUserId
          }
        ]
      }
    });
    console.log(Campaign);
    if (Campaign) {
      return Campaign;
    } else {
      return false;
    }
  };
  Campaign.remoteMethod("checkCampaign", {
    isStatic: false,
    description: "check campaing",
    accepts: [
      {
        arg: "ctx",
        type: "object"
      }
    ],
    returns: {
      arg: "result",
      type: "boolean",
      root: true
    },
    http: {
      path: "/checkCampaign",
      verb: "get"
    }
  });

  Campaign.prototype.checkCompany = async function(ctx) {
    console.log("=====> id ", ctx.instance.registerUserId);
    let company = await app.models.Company.find({
      include: [
        "registerUsers",
        {
          securityGroups: "Rights"
        }
      ]
    });
    let companyArray = [];
    let companyId;
    let matchedCompany = {};
    // console.log(company)
    company.forEach(cmpy => {
      let cmpny = cmpy.toJSON();
      companyArray.push(cmpny);
      // console.log(cmpny.registerUsers)
      cmpny.registerUsers.forEach(users => {
        // console.log(users)
        if ((users.id = ctx.instance.registerUserId)) {
          companyId = users.companyId;
        } else {
          return;
        }
      });
    });

    companyArray.forEach(matchCompany => {
      // console.log('=======',matchCompany.id,companyId)
      if (matchCompany.id.toString() == companyId.toString()) {
        //   console.log(matchCompany);
        matchedCompany = matchCompany;
      }
    });
    return matchedCompany;
  };
  Campaign.remoteMethod("checkCompany", {
    isStatic: false,
    description: "check checkCompany",
    accepts: [
      {
        arg: "ctx",
        type: "object"
      }
    ],
    returns: {
      arg: "result",
      type: "object",
      root: true
    },
    http: {
      path: "/checkCompany",
      verb: "get"
    }
  });

  Campaign.prototype.myOrAnyData = async function(req, res, ctx) {
    console.log("meOrMy ==>", req.options.accessToken.userId);
    let loginUser = req.options.accessToken.userId;

    let Campaign = await app.models.Campaign.find({
      where: {
        and: [
          {
            id: ctx.instance.id
          },
          {
            registerUserId: loginUser
          }
        ]
      }
    });
    console.log("myOrAny data =>", Campaign);
    if (Campaign.registerUserId.toString() === loginUser.toString()) {
      return true;
    } else {
      return false;
    }
  };
  Campaign.remoteMethod("myOrAnyData", {
    isStatic: false,
    description: "check my or any user data",
    accepts: [
      {
        arg: "ctx",
        type: "object"
      },
      {
        arg: "req",
        type: "object",
        http: {
          source: "req"
        }
      },
      {
        arg: "res",
        type: "object",
        http: {
          source: "res"
        }
      }
    ],
    returns: {
      arg: "result",
      type: "object",
      root: true
    },
    http: {
      path: "/myOrAnyData",
      verb: "get"
    }
  });
  Campaign.externalUserGetCampaignByAccessToken = async function(res, req) {
    console.log("req params for validation ex user", req.params.accessToken);
    try {
      let getInvites = await app.models.Invites.find({
        where: { token: req.params.accessToken }
      });
      console.log(getInvites);
      if (getInvites) {
        let post = {
          include: [
            { relation: "posts", include: { relation: "socialMediaAccounts" } },
            { campaignComments: ["registerUser", "externalUsers"] }
          ]
        };
        let campaign = await Campaign.findById(getInvites[0].campaignId, post);
        if (campaign) {
          let externalUser = await app.models.ExternalUsers.findById(
            getInvites[0].externalUserId
          );
          let obj = {
            exUser: externalUser,
            campaign: campaign
          };
          return obj;
        }
      }
    } catch (err) {
      return err;
    }
  };
  Campaign.remoteMethod("externalUserGetCampaignByAccessToken", {
    isStatic: true,
    accepts: [
      {
        arg: "res",
        type: "object",
        http: {
          source: "res"
        }
      },
      {
        arg: "req",
        type: "object",
        http: {
          source: "req"
        }
      }
    ],
    returns: {
      root: true
    },
    http: {
      path: "/externalUserGetCampaignByAccessToken/:accessToken",
      verb: "get"
    }
  });
};
