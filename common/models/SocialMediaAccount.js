"use strict";

var _ = require("lodash");
// let session = require('express-session');
var inspect = require("util-inspect");
var oauth = require("oauth");
var facebookService = require("../../server/boot/facebookService");
var instagramService = require("../../server/boot/instagramService");
var youtubeService = require("../../server/boot/youtubeService");
var loopback = require("loopback");
const Agenda = require("agenda");
var app = require("../../server/server");
const request = require("request-promise");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://yamin:yamin123@ds133086.mlab.com:33086/smp_jobs";
const dbName = "smp_jobs";
var conString = "mongodb://yamin:yamin123@ds133086.mlab.com:33086/smp_jobs";
var agenda = new Agenda({
  db: {
    address: conString,
    collection: "jobs"
  }
});

let session = {};
let current_login_user = "";
module.exports = function(SocialMediaAccount) {
  //   SocialMediaAccount.observe('before save', async function (ctx, next) {
  //     SocialMediaAccount.validatesUniquenessOf('userId', {message: 'This account already exist'});
  // });
  SocialMediaAccount.observe("after save", async function(ctx, next) {
    //console.log('Account after save , supports isNewInstance?', ctx.isNewInstance);
    console.log("\n ctx => ", ctx.instance.type);
    if (ctx.isNewInstance) {
      //if YT then call youtube service methods else old FB method calls below wiill work
      if (ctx.instance.type == "YT") {
        //console.log(ctx.instance);
        await ctx.instance.channelsList(ctx.instance);
        console.log("YT");
      } else if (ctx.instance.type == "FB") {
        console.log("=====>FB<======");
        try {
          await ctx.instance.refreshToken(ctx.instance.id);
        } catch (error) {
          console.log("Account.observe::after save < refreshToken <= ", error);
        }
        try {
          console.log(
            "=======> lengthy session pages",
            ctx.instance.lengthySession
          );
          await ctx.instance.pages(ctx.instance.id);
        } catch (error) {
          console.log("Error < pages <= ", error);
        }
        try {
          await ctx.instance.groups(ctx.instance.id);
        } catch (error) {
          console.log("Account.observe::after save < groups <= ", ctx.instance);
        }
        // try {
        //   await ctx.instance.fetchBusinesses(ctx.instance.id);
        // } catch (error) {
        //   console.log('Account.observe::after save < fetchBusinesses <= ', ctx.instance);
        // }
        // try {
        //   await ctx.instance.fetchBusinessPages(ctx.instance.id);
        // } catch (error) {
        //   console.log('Account.observe::after save < fetchBusinessPages <= ', ctx.instance);
        // }
        // try {
        //   await ctx.instance.fetchAdAccounts(ctx.instance.id);
        // } catch (error) {
        //   console.log('Account.observe::after save < fetchAdAccounts <= ', ctx.instance);
        // }
        // try {
        //   await ctx.instance.fetchAdAccountInsights(ctx.instance.id);
        //   console.log("Account Insight Detials");
        // } catch (error) {
        //   console.log('Account.observe::after save < fetchAdAccountInsights <= ', ctx.instance);
        // }
      } else if (ctx.instance.type == "IG") {
        try {
          await ctx.instance.instaPages();
        } catch (error) {
          console.log(
            "Account.observe::after save < refreshToken <= ",
            ctx.instance
          );
        }
        try {
          await ctx.instance.instaRefreshToken(ctx.instance.id);
        } catch (error) {
          console.log(
            "Account.observe::after save < refreshToken <= ",
            ctx.instance
          );
        }
        // try {
        //   await ctx.instance.instaFetchBusinesses(ctx.instance.id);
        // } catch (error) {
        //   console.log('Account.observe::after save < fetchBusinesses <= ', ctx.instance);
        // }
        try {
          await ctx.instance.instaFetchBusinessPages(ctx.instance.id);
        } catch (error) {
          console.log(
            "Account.observe::after save < fetchBusinessPages <= ",
            ctx.instance
          );
        }
        // try {
        //   await ctx.instance.instaFetchAdAccounts(ctx.instance.id);
        // } catch (error) {
        //   console.log('Account.observe::after save < fetchAdAccounts <= ', ctx.instance);
        // }
        // try {
        //   await ctx.instance.instaFetchAdAccountInsights(ctx.instance.id);
        // } catch (error) {
        //   console.log('Account.observe::after save < fetchAdAccountInsights <= ', ctx.instance);
        // }
        console.log("IG");
      } else if (ctx.instance.type == "TW") {
      }
    } else {
      console.log("after save - old account");

      if (ctx.instance.status == "disconnect") {
        app.models.Post.find(
          {
            where: {
              socialMediaAccountId: ctx.instance.id,
              network: ctx.instance.type
            }
          },
          function(err, posts) {
            if (err) {
              console.log(err);
            } else {
              console.log(posts);
              for (let j = 0; j < posts.length; j++) {
                app.models.Post.patchOrCreateWithWhere(
                  { id: posts[j].id },
                  { status: "Canceled" },
                  function(err, res) {
                    if (err) {
                      console.log("posts patch error", err);
                      // throw err
                    } else {
                      console.log("post patch response", res);

                      // try{
                      //    ctx.instance.deleteAgendaJobs(camp[j].id);
                      // }catch(err){
                      //   console.log(err);
                      // }
                    }
                  }
                );
              }
            }
          }
        );
      }
    }
    next();
  });

  SocialMediaAccount.observe("access", function(ctx, next) {
    const token = ctx.options && ctx.options.accessToken;
    const userId = token && token.userId;
    console.log(userId);
    current_login_user = userId;
    next();
  });

  SocialMediaAccount.prototype.instaPages = async function() {
    console.log(
      "Account::getAccountPages ",
      this.session.userID,
      this.session.accessToken
    );
    let accountId = this.session.userID;
    let accessToken = this.session.accessToken;
    let ids = [];
    let totalPages;
    let instaPages = [];
    let fbPagesLinkedInstagram = [];
    let pages = await instagramService.getUserPages(
      this.session.userID,
      this.session.accessToken
    );
    console.log("instagram service get pages method response", pages);
    totalPages = pages;
    for (let i = 0; i < pages.data.length; i++) {
      ids.push(pages.data[i].id);
    }
    console.log("instagra pacebook pages ids", ids);
    for (let j = 0; j < ids.length; j++) {
      let instaPage = await instagramService.getUserInstaPages(
        ids[j],
        this.session.accessToken
      );
      if (instaPage.instagram_business_account) {
        instaPages.push(instaPage);
      }
    }
    if (instaPages.length > 0) {
      for (let p = 0; p < totalPages.data.length; p++) {
        for (let k = 0; k < instaPages.length; k++) {
          if (totalPages.data[p].id === instaPages[k].id) {
            fbPagesLinkedInstagram.push(totalPages.data[p]);
          }
        }
      }
    }

    console.log("instagra pacebook pages data", fbPagesLinkedInstagram);
    let InstapagesArray = [];
    let lastSycnAt = new Date().toString();

    fbPagesLinkedInstagram.forEach(result => {
      let pageObj = {
        id: result.id,
        name: result.name,
        access_token: result.access_token,
        thumbnail: result.picture.data.url,
        type: "pages",
        lastSycnAt: lastSycnAt
      };

      InstapagesArray.push(pageObj);
    });
    console.log("pages======>", InstapagesArray);
    this.smPages = InstapagesArray;

    this.save();
    return Promise.resolve(this);
  };
  SocialMediaAccount.remoteMethod("instaPages", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "pages",
      type: "array",
      root: true
    },
    http: {
      path: "/pages",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.instaRefreshToken = async function() {
    console.log("Account::refreshToken id ", this.id);
    // console.log('Account::refreshToken ', this.session.accessToken);
    try {
      // this.type===='FB' 'IG' 'YT'
      let resp = await instagramService.refreshUserToken(
        this.session.accessToken
      );
      this.lengthySession = resp;
      this.save();
    } catch (error) {
      console.log(
        "Account::refreshToken ERROR => account id =  ",
        this.id,
        " error=> ",
        error
      );
      // this.errorLog = error;
      return Promise.reject(error);
    }

    // this.save();
    return Promise.resolve(this.lengthySession);
    // return Promise.resolve(this);
  };
  SocialMediaAccount.remoteMethod("instaRefreshToken", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "session",
      type: "object",
      root: true
    },
    http: {
      path: "/refreshToken",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.instaRefreshToken1 = async function() {
    console.log("Account::refreshToken id ", this.id);
    // console.log('Account::refreshToken ', this.session.accessToken);
    try {
      // this.type===='FB' 'IG' 'YT'
      let resp = await instagramService.refreshUserToken(
        this.lengthySession.access_token
      );
      this.lengthySession = resp;
    } catch (error) {
      console.log(
        "Account::refreshToken ERROR => account id =  ",
        this.id,
        " error=> ",
        error
      );
      // this.errorLog = error;
      return Promise.reject(error);
    }

    this.save();
    return Promise.resolve(this.lengthySession);
    // return Promise.resolve(this);
  };
  SocialMediaAccount.remoteMethod("instaRefreshToken1", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "session",
      type: "object",
      root: true
    },
    http: {
      path: "/refreshToken1",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.pages = async function() {
    console.log(
      "Account::getAccountPages ",
      this.session.userID,
      this.lengthySession.accessToken
    );
    let accountId = this.session.userID;
    let accessToken = this.session.accessToken;

    let pages = await facebookService.getUserPages(
      this.session.userID,
      this.lengthySession.access_token
    );

    console.log("<===========>", pages.data);
    let pagesArray = [];
    let lastSycnAt = new Date().toString();
    pages.data.forEach(result => {
      let pageObj = {
        id: result.id,
        name: result.name,
        access_token: result.access_token,
        thumbnail: result.picture.data.url,
        type: "pages",
        lastSycnAt: lastSycnAt
      };

      pagesArray.push(pageObj);
    });
    console.log("pages", pagesArray);
    this.smPages = pagesArray;
    this.save();
    return Promise.resolve(this);
  };
  SocialMediaAccount.remoteMethod("pages", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "pages",
      type: "array",
      root: true
    },
    http: {
      path: "/pages",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.groups = async function() {
    console.log(
      "Account::getAccountPages ",
      this.session.userID,
      this.session.accessToken
    );
    let accountId = this.session.userID;
    let accessToken = this.session.accessToken;

    let groups = await facebookService.getUserGroups(
      this.session.userID,
      this.session.accessToken
    );

    console.log("====================================", groups);
    let groupsArray = [];
    let lastSycnAt = new Date().toString();
    groups.data.forEach(result => {
      let groupObj = {
        id: result.id,
        name: result.name,
        cover: result.cover,
        type: "groups",
        lastSycnAt: lastSycnAt
      };

      groupsArray.push(groupObj);
    });
    console.log("groups", groupsArray);
    this.smGroups = groupsArray;
    this.save();
    return Promise.resolve(this);
  };
  SocialMediaAccount.remoteMethod("groups", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "groups",
      type: "array",
      root: true
    },
    http: {
      path: "/groups",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.instaFetchBusinesses = async function() {
    console.log("Account::fetchBusinesses ", this.session.accessToken);
    let resp = await instagramService.getUserBusinesses(
      this.session.userID,
      this.session.accessToken
    );
    this.businesses = resp.data;
    this.save();
    return Promise.resolve(this.businesses);
  };
  SocialMediaAccount.remoteMethod("instaFetchBusinesses", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "businesses",
      type: "array",
      root: true
    },
    http: {
      path: "/businesses",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.instaFetchAdAccounts = async function() {
    console.log("Account::fetchAdAccounts ", this.session.accessToken);
    let busAdAccounts = this.businesses.map(async bus => {
      console.log("::map businesses > ", bus.id, " / ", bus.name);
      let resp = await instagramService.getBusinessOwnedAdAccounts(
        bus.id,
        this.session.accessToken
      );
      console.log("::map businesses < ", resp.data);
      bus.adAccounts = resp.data;
      return bus.adAccounts;
    });
    let result = await Promise.all(busAdAccounts);
    console.log("going to push to adAccounts array ", result);
    let busAdAccountsArray = _.map(this.businesses, "adAccounts");
    console.log("busAdAccountsArray array ", busAdAccountsArray);
    console.log(
      "busAdAccountsArray array _.flatten ",
      _.flatten(busAdAccountsArray)
    );
    this.adAccounts = _.flatten(busAdAccountsArray);
    this.save();
    return Promise.resolve(this.adAccounts);
  };
  SocialMediaAccount.remoteMethod("instaFetchAdAccounts", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "adAccounts",
      type: "array",
      root: true
    },
    http: {
      path: "/adAccounts",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.instaFetchAdAccountInsights = async function() {
    console.log("Account::adAccountInsights ");
    let adAccountInsights = this.adAccounts.map(async ad => {
      console.log("::map adAccount > ", ad.id);
      let resp = await instagramService.getAdAccountInsights(
        ad.id,
        this.session.accessToken
      );
      console.log("::map adAccount < ", resp);

      ad.insights = resp.data;
      return ad.insights;
    });
    this.save();
    // this.businessPages = _.flatten(adAccountInsights);
    return Promise.resolve(this);
  };
  SocialMediaAccount.remoteMethod("instaFetchAdAccountInsights", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "insights",
      type: "array",
      root: true
    },
    http: {
      path: "/adAccount/insights/:businessId",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.instaFetchBusinessPages = async function() {
    console.log("Account::fetchBusinessPages ", this.session.accessToken);
    console.log(this);
    let busPages = this.businesses.map(async bus => {
      console.log("::map businesses > ", bus.id, " / ", bus.name);
      let resp = await instagramService.getBusinessOwnedPages(
        bus.id,
        this.session.accessToken
      );
      console.log("::map businesses < ", resp.data);
      // instagram_business_account

      bus.businessPages = [];
      if (resp.data.length > 0) {
        for (let i = 0; i < resp.data.length; i++) {
          if (resp.data[i].instagram_business_account) {
            bus.businessPages.push(resp.data[i]);
          }
        }
        return bus.businessPages;
      }
    });
    let result = await Promise.all(busPages);
    // console.log('going to push to adAccounts array ', result);
    this.businessPages = _.flatten(result);
    this.save();

    // let sources = this.businessPages.map( (page)=>{
    //   let s = { platform: 'IG', type: 'Page', title: page.name, pageId: page.id,
    //   url: page.link, access_token: page.access_token,
    //   fan_count:page.fan_count,engagement: page.engagement,page_token: page.page_token};
    //   return s;
    // });

    // this.channelSources.create(sources).then(channelSources => {
    //   console.log('::channelSources => ', channelSources);
    //   channelSources.forEach(async (channelSource) => {
    //     let assets = await facebookService.getPageVideos(channelSource.pageId, channelSource.access_token);
    //     console.log('::getPageVideos < assets ', assets);
    //     if(assets.data && assets.data.length > 0){

    //       let mediaAssets = assets.data.map(asset=>{
    //         let cv = asset.video_insights.data[0].values[0].value;
    //          let newAsset = {name:asset.title , time : asset.created_time, countViews:cv, lastUsed: Date.now(), thumbnailUrl:asset.thumbnails.data, url:asset.source, assetId:asset.id, source:asset};
    //          return newAsset;
    //       });
    //       channelSource.mediaAssets.create(mediaAssets).then(mediaAssetsCreated => {
    //         console.log(':: channelSource.create > ', mediaAssetsCreated);
    //         facebookService.getVideoDetails(mediaAssetsCreated[0].assetId,channelSource.access_token).then(insights=>{
    //           console.log(':: channelSource.getVideoDetails < ', insights);
    //         });
    //       });
    //     }
    //   });

    // });
    return Promise.resolve(this.businessPages);
  };
  SocialMediaAccount.remoteMethod("instaFetchBusinessPages", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "businessPages",
      type: "array",
      root: true
    },
    http: {
      path: "/businessPages",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.channelsList = async function() {
    console.log("Account::getChenelsList ", this.id, this.session.access_token);
    let accountId = this.userId;
    let accessToken = this.session.access_token;

    let channelsList = await youtubeService.getChannels(
      accountId,
      this.session
    );
    //console.log('getChannels <= ',channelsList);
    this.channelsList = channelsList.channels;
    this.userName = channelsList.channels[0].snippet.title;
    this.save();
    // //Create channelsource entitiues and fill with channels list data - start

    // let sources = this.channelsList.map( (channel)=>{
    //   let s = { platform: 'YT', type: 'Channel', title: channel.snippet.title, chanelId: channel.id};
    //   return s;
    // });

    // this.channelSources.create(sources).then(channelSources => {
    //   //console.log('::channelSources => ', channelSources);
    //   channelSources.forEach(async (channelSource) => {
    //     let assets = channelsList.videosList;
    //     //console.log('::VideoList < assets ', assets);
    //     if(assets.items && assets.items.length > 0){
    //       let chlst = this.channelsList[0];
    //       let mediaAssets = assets.items.map(asset=>{
    //         let newAsset = {name:asset.snippet.title , time : asset.snippet.publishedAt, countViews:chlst.statistics.viewCount, thumbnailUrl:asset.snippet.thumbnails.default.url, url:`https://www.youtube.com/watch?v=${asset.id.videoId}`, assetId:asset.id.videoId, source:asset};
    //         return newAsset;
    //       });
    //       channelSource.mediaAssets.create(mediaAssets).then(mediaAssetsCreated => {
    //         console.log(':: channelSource.create > ', mediaAssetsCreated);
    //         // facebookService.getVideoDetails(mediaAssetsCreated[0].assetId,channelSource.access_token).then(insights=>{
    //         //   console.log(':: channelSource.getVideoDetails < ', insights);
    //         // });
    //       });
    //     }else{
    //       consoel.log(this.session);
    //     }
    //   });

    // });
    // //Create channelsource entitiues and fill with channels list data - end

    // this.save();
    return Promise.resolve(this);
  };
  SocialMediaAccount.remoteMethod("channelsList", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "pages",
      type: "array",
      root: true
    },
    http: {
      path: "/pages",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.refreshToken = async function() {
    console.log("Account::refreshToken id ", this.id);
    // console.log('Account::refreshToken ', this.session.accessToken);
    try {
      // this.type===='FB' 'IG' 'YT'
      let resp = await facebookService.refreshUserToken(
        this.session.accessToken
      );
      this.lengthySession = resp;
    } catch (error) {
      console.log(
        "Account::refreshToken ERROR => account id =  ",
        this.id,
        " error=> ",
        error
      );
      // this.errorLog = error;
      return Promise.reject(error);
    }

    this.save();
    return Promise.resolve(this.lengthySession);
    // return Promise.resolve(this);
  };
  SocialMediaAccount.remoteMethod("refreshToken", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "session",
      type: "object",
      root: true
    },
    http: {
      path: "/refreshToken",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.refreshTokenfb = async function() {
    console.log("Account::refreshToken id ", this.id);
    // console.log('Account::refreshToken ', this.session.accessToken);
    try {
      // this.type===='FB' 'IG' 'YT'
      let resp = await facebookService.refreshUserToken(
        this.lengthySession.access_token
      );
      this.lengthySession = resp;
      this.save();
    } catch (error) {
      console.log(
        "Account::refreshToken ERROR => account id =  ",
        this.id,
        " error=> ",
        error
      );
      // this.errorLog = error;
      return Promise.reject(error);
    }

    // this.save();
    // console.log('lengthy session save',resp);
    return Promise.resolve(this.lengthySession);
    // return Promise.resolve(this);
  };
  SocialMediaAccount.remoteMethod("refreshTokenfb", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "session",
      type: "object",
      root: true
    },
    http: {
      path: "/refreshTokenfb",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.fetchBusinesses = async function() {
    console.log("Account::fetchBusinesses ", this.session.accessToken);
    let resp = await facebookService.getUserBusinesses(
      this.session.userID,
      this.session.accessToken
    );
    this.businesses = resp.data;
    this.save();
    return Promise.resolve(this.businesses);
  };
  SocialMediaAccount.remoteMethod("fetchBusinesses", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "businesses",
      type: "array",
      root: true
    },
    http: {
      path: "/businesses",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.fetchAdAccounts = async function() {
    console.log("Account::fetchAdAccounts ", this.session.accessToken);
    let busAdAccounts = this.businesses.map(async bus => {
      console.log("::map businesses > ", bus.id, " / ", bus.name);
      let resp = await facebookService.getBusinessOwnedAdAccounts(
        bus.id,
        this.session.accessToken
      );
      console.log("::map businesses < ", resp.data);
      bus.adAccounts = resp.data;
      return bus.adAccounts;
    });
    let result = await Promise.all(busAdAccounts);
    console.log("going to push to adAccounts array ", result);
    let busAdAccountsArray = _.map(this.businesses, "adAccounts");
    console.log("busAdAccountsArray array ", busAdAccountsArray);
    console.log(
      "busAdAccountsArray array _.flatten ",
      _.flatten(busAdAccountsArray)
    );
    this.adAccounts = _.flatten(busAdAccountsArray);
    this.save();
    return Promise.resolve(this.adAccounts);
  };
  SocialMediaAccount.remoteMethod("fetchAdAccounts", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "adAccounts",
      type: "array",
      root: true
    },
    http: {
      path: "/adAccounts",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.fetchBusinessPages = async function() {
    console.log("Account::fetchBusinessPages ", this.session.accessToken);
    // let busPages = this.businesses.map( async (bus) => {
    //   console.log('::map businesses > ', bus.id , ' / ',bus.name);
    //   let resp = await facebookService.getBusinessOwnedPages(bus.id,this.session.accessToken);
    //   console.log('::map businesses < ', resp.data);
    //   bus.businessPages = resp.data;
    //   return bus.businessPages;
    // });
    // let result = await Promise.all(busPages);
    // // console.log('going to push to adAccounts array ', result);
    // this.businessPages = _.flatten(result);
    // this.save();

    // let sources = this.businessPages.map( (page)=>{
    //   let s = { platform: 'FB', type: 'Page', title: page.name, pageId: page.id,
    //   url: page.link, access_token: page.access_token,
    //   fan_count:page.fan_count,engagement: page.engagement,page_token: page.page_token};
    //   return s;
    // });

    // this.channelSources.create(sources).then(channelSources => {
    //   console.log('::channelSources => ', channelSources);
    //   channelSources.forEach(async (channelSource) => {
    //     let assets = await facebookService.getPageVideos(channelSource.pageId, channelSource.access_token);
    //     console.log('::getPageVideos < assets ', assets);
    //     if(assets.data && assets.data.length > 0){
    //       let mediaAssets = assets.data.map(asset=>{
    //         let cv = asset.video_insights.data[0].values[0].value;
    //          let newAsset = {name:asset.title , time : asset.created_time, countViews:cv, lastUsed: Date.now(), thumbnailUrl:asset.thumbnails.data, url:asset.source, assetId:asset.id, source:asset};
    //          return newAsset;
    //       });
    //       channelSource.mediaAssets.create(mediaAssets).then(mediaAssetsCreated => {
    //         console.log(':: channelSource.create > ', mediaAssetsCreated);
    //         facebookService.getVideoDetails(mediaAssetsCreated[0].assetId,channelSource.access_token).then(insights=>{
    //           console.log(':: channelSource.getVideoDetails < ', insights);
    //         });
    //       });
    //     }
    //   });

    // });
    return Promise.resolve(this.businessPages);
  };
  SocialMediaAccount.remoteMethod("fetchBusinessPages", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "businessPages",
      type: "array",
      root: true
    },
    http: {
      path: "/businessPages",
      verb: "get"
    }
  });

  SocialMediaAccount.prototype.fetchAdAccountInsights = async function() {
    console.log("Account::adAccountInsights ");
    let adAccountInsights = this.adAccounts.map(async ad => {
      console.log("::map adAccount > ", ad.id);
      let resp = await facebookService.getAdAccountInsights(
        ad.id,
        this.session.accessToken
      );
      console.log("::map adAccount < ", resp);

      ad.insights = resp.data;
      return ad.insights;
    });
    this.save();
    // this.businessPages = _.flatten(adAccountInsights);
    return Promise.resolve(this);
  };
  SocialMediaAccount.remoteMethod("fetchAdAccountInsights", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "insights",
      type: "array",
      root: true
    },
    http: {
      path: "/adAccount/insights/:businessId",
      verb: "get"
    }
  });

  //get  channel source

  SocialMediaAccount.prototype.instaGetChannelSource = async function() {
    console.log("Chanel Source ");
    Account.find({ include: { channelSources: "mediaAssets" } }, function(
      err,
      res
    ) {
      if (err) throw err;

      res.forEach(async channelSource => {
        if (channelSource.type == "IG" || channelSource.type == "FB") {
          let dbMediaAssets = [];
          let channelSrc = channelSource.__data.channelSources;
          channelSrc.forEach(async asset => {
            // dbMediaAssets.push(asset.mediaAssets);
            let assets = await instagramService.getPageVideos(
              asset.pageId,
              asset.access_token
            );
            //console.log('::getPageVideos < assets ', assets);
            if (assets.data && assets.data.length > 0) {
              let newMediaAssets = assets.data.map(asset => {
                let cv = asset.video_insights.data[0].values[0].value;
                let newAsset = {
                  name: asset.title,
                  time: asset.created_time,
                  countViews: cv,
                  lastUsed: Date.now(),
                  thumbnailUrl: asset.thumbnails.data,
                  url: asset.source,
                  assetId: asset.id,
                  source: asset
                };
                return newAsset;
              });
              asset.mediaAssets.find().then(mdast => {
                mdast.forEach(async media => {
                  newMediaAssets.forEach(async newAssets => {
                    if (media.assetId == newAssets.assetId) {
                      asset.mediaAssets
                        .updateById(media.id, newAssets)
                        .then(mediaAssetsCreated => {
                          console.log(
                            ":: channelSource.create > ",
                            mediaAssetsCreated
                          );
                          // facebookService.getVideoDetails(mediaAssetsCreated[0].assetId,channelSource.access_token).then(insights=>{
                          //   console.log(':: channelSource.getVideoDetails < ', insights);
                          // });
                        });
                    }
                  });
                });
              });
            }
          });
        }
      });
    });

    return Promise.resolve(this);
  };
  SocialMediaAccount.remoteMethod("instaGetChannelSource", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "channelSource",
      root: true
    },
    http: {
      path: "/channelSource",
      verb: "get"
    }
  });

  // insta get account insight

  SocialMediaAccount.prototype.instaGetAccountInsighs = async function() {
    console.log("Account Insight");

    SocialMediaAccount.find({ include: "accountInsights" }, function(err, res) {
      if (err) throw err;

      res.forEach(async channelSource => {
        if (channelSource.type == "IG" || channelSource.type == "FB") {
          console.log(channelSource);
          let adAccountInsights = channelSource.adAccounts.map(async ad => {
            console.log("::map adAccount > ", ad);
            let resp = await facebookService.getAdAccountInsights(
              ad.id,
              channelSource.session.access_token
            );
            console.log("::map adAccount < ", resp);

            ad.insights = resp.data;
            return ad.insights;
          });
        }
      });

      // res.forEach(async (ac) => {
      //   console.log(ac.accountInsights);
      // });
    });

    return Promise.resolve(this);
  };
  SocialMediaAccount.remoteMethod("instaGetAccountInsighs", {
    isStatic: false,
    accepts: [],
    returns: {
      arg: "instaAccountInsight",
      root: true
    },
    http: {
      path: "/instaAccountInsight",
      verb: "get"
    }
  });

  // remote method for fb unlink
  SocialMediaAccount.fbUnlink = async function(id) {
    return Promise.resolve(id);
  };

  SocialMediaAccount.remoteMethod("fbUnlink", {
    description: "facebook unlink",
    isStatic: true,
    accepts: { arg: "id", type: "string" },
    returns: {
      arg: "fbUnlink",
      root: true
    },
    http: {
      path: "/fbUnlink",
      verb: "get"
    }
  });

  // search facebook places

  SocialMediaAccount.fbSearchPlaces = async function(q, center, distance) {
    console.log("Search Places");
    console.log(this.session);
    console.log(q);
    let resp = await facebookService.searchPlace(
      q,
      center,
      distance,
      "EAACy8X3PWxYBABNEINT3mHnxfmTPwU2SlUBtmctiEp3Sk2lU2ZA4Cy5rH8ALRsScNKngujIYedeFMUs1HUVrtLu1eTvzbU8FRW27ZCKGcLH2D1Pdcv67lIGpZC0h5rDbBWLKPkkqdN3b8SSxMmItXdOts6rT4AZD"
    );
    console.log("Search Places", resp);
    return Promise.resolve(resp);
  };
  SocialMediaAccount.remoteMethod("fbSearchPlaces", {
    isStatic: true,
    accepts: [
      { arg: "q", type: "string" },
      { arg: "center", type: "number" },
      { arg: "distance", type: "string" }
    ],
    returns: {
      arg: "places",
      root: true
    },
    http: {
      path: "/search/place",
      verb: "get"
    }
  });

  //twiiter connect

  SocialMediaAccount.twitterConnect = function(req, res) {
    // console.log(res);
    // let oauth_verifier = req.query.oauth_verifier;

    var _twitterConsumerKey = "Ynkolpu7qdFEDfxOrKDeqpKoB";
    var _twitterConsumerSecret =
      "sNJiA97pjY7lOZ6eixbBJNr1XdFrFbKyzEIsntjIarFi5kUNwn";
    var oauthToken = "2278316948-yM9NRSH8XnFWWKAocNgRGuRFvY7JANGLv0lfK2i";
    var oauthTokenSecret = "FjQrFXhzlOco1IjOuJeIb0M8uddJTtln4ACYGuKXnDMIS";
    var consumer = new oauth.OAuth(
      "https://twitter.com/oauth/request_token",
      "https://twitter.com/oauth/access_token",
      _twitterConsumerKey,
      _twitterConsumerSecret,
      "1.0A",
      "http://93bd0a31.ngrok.io/my-networks",
      "HMAC-SHA1"
    );

    consumer.getOAuthRequestToken(function(
      error,
      oauthToken,
      oauthTokenSecret,
      results
    ) {
      if (error) {
        console.log(error);
        console.log(
          "Error getting OAuth request token : " + inspect(error),
          500
        );
      } else {
        session.oauthRequestToken = oauthToken;
        session.oauthRequestTokenSecret = oauthTokenSecret;
        console.log("Double check on 2nd step");
        console.log("------------------------");
        console.log("<<" + session.oauthRequestToken);
        console.log("<<" + session.oauthRequestTokenSecret);
        res.redirect(
          "https://twitter.com/oauth/authorize?oauth_token=" +
            session.oauthRequestToken
        );
      }
    });
  };
  SocialMediaAccount.remoteMethod("twitterConnect", {
    isStatic: true,
    accepts: [
      { arg: "req", type: "object", http: { source: "req" } },
      { arg: "res", type: "object", http: { source: "res" } }
    ],
    returns: {
      arg: "Twitter",
      root: true
    },
    http: {
      path: "/session/connect",
      verb: "get"
    }
  });

  // twitter call back
  SocialMediaAccount.twitterCallBack = function(oauth_verifier, res) {
    // console.log(res);
    console.log("===>", oauth_verifier.oauth_verifier);
    var _twitterConsumerKey = "Ynkolpu7qdFEDfxOrKDeqpKoB";
    var _twitterConsumerSecret =
      "sNJiA97pjY7lOZ6eixbBJNr1XdFrFbKyzEIsntjIarFi5kUNwn";
    var consumer = new oauth.OAuth(
      "https://twitter.com/oauth/request_token",
      "https://twitter.com/oauth/access_token",
      _twitterConsumerKey,
      _twitterConsumerSecret,
      "1.0A",
      "http://93bd0a31.ngrok.io/my-networks",
      "HMAC-SHA1"
    );

    // let oauth_verifier = oauth_verifier;
    console.log("------------------------");
    console.log(">>" + session.oauthRequestToken);
    console.log(">>" + session.oauthRequestTokenSecret);
    console.log(">>" + oauth_verifier);
    consumer.getOAuthAccessToken(
      session.oauthRequestToken,
      session.oauthRequestTokenSecret,
      oauth_verifier,
      function(error, oauthAccessToken, oauthAccessTokenSecret, results) {
        if (error) {
          console.log(
            "Error getting OAuth access token : " +
              inspect(error) +
              "[" +
              oauthAccessToken +
              "]" +
              "[" +
              oauthAccessTokenSecret +
              "]" +
              "[" +
              inspect(results) +
              "]",
            500
          );
        } else {
          session.oauthAccessToken = oauthAccessToken;
          session.oauthAccessTokenSecret = oauthAccessTokenSecret;
          consumer.get(
            "https://api.twitter.com/1.1/account/verify_credentials.json",
            session.oauthAccessToken,
            session.oauthAccessTokenSecret,
            function(error, data, response) {
              if (error) {
                //console.log(error)
                console.log(error);
              } else {
                var parsedData = JSON.parse(data);
                console.log(parsedData);
                let twitterData = [];
                twitterData.push(parsedData);
                let userData = {
                  type: "TW",
                  status: "connected",
                  userId: parsedData.id,
                  userId_str: parsedData.id_str,
                  userName: parsedData.name,
                  screenName: parsedData.screen_name,
                  session: session,
                  registerUserId: current_login_user,
                  pictureThumbnail: parsedData.profile_image_url,
                  profile: twitterData
                };

                // console.log(userData)
                SocialMediaAccount.create(userData, function(err, resp) {
                  if (err) throw err;
                  // console.log(resp);
                  res.redirect("http://93bd0a31.ngrok.io/my-networks");
                });
              }
            }
          );
        }
      }
    );
  };
  SocialMediaAccount.remoteMethod("twitterCallBack", {
    isStatic: true,
    accepts: [
      // {arg: 'req', type: 'object', 'http': {source: 'req'}},
      { arg: "oauth_verifier", type: "string" },
      { arg: "res", type: "object", http: { source: "res" } }
    ],
    returns: {
      arg: "Twitter",
      root: true
    },
    http: {
      path: "/twitterCallback",
      verb: "get"
    }
  });

  // delete agenda jobs

  SocialMediaAccount.prototype.deleteAgendaJobs = async function(campaignId) {
    console.log("campaign ID =>", campaignId);

    agenda.cancel({ name: new RegExp(campaignId) }, function(err, numRemoved) {
      if (err) {
        console.log(err);
      } else {
        console.log("=====> num removed", numRemoved);
      }
    });

    // let jobs = await MongoClient.connect(url,{ useNewUrlParser: true });
    // let db = jobs.db('smp_jobs');
    // try {
    // const res = await db.collection("jobs").remove({name:new RegExp(campaignId) },function(err, res){
    //     console.log(`res => ${JSON.stringify(res)}`);
    //     jobs.close();
    // });
    // }catch(err){
    //     console.log(err)
    // }
  };
  SocialMediaAccount.remoteMethod("deleteAgendaJobs", {
    isStatic: false,
    accepts: [{ arg: "socialMediaAccountId", type: "string" }],
    returns: {},
    http: {
      path: "/socialMediaAccountId",
      verb: "get"
    }
  });

  SocialMediaAccount.getSmPages = async function(socialMediaId) {
    console.log("=========>", socialMediaId);
    let res = await SocialMediaAccount.findById(socialMediaId, {});

    console.log("=>", res);
    if (!res) {
      return;
    }
    try {
      if (res.type === "FB") {
        let accountInfo = {
          accountId: res.id,
          smPages: res.smPages,
          smGroups: res.smGroups
        };
        console.log("=============Acount Info============", accountInfo);
        // cb(null, accountInfo);
        return accountInfo;
      } else if (res.type === "IG") {
        let accountInfo = {
          accountId: res.id,
          smPages: res.smPages
        };
        console.log(accountInfo);
        // cb(null, accountInfo);
        return accountInfo;
      } else if (res.type === "PI") {
        let accountInfo = {
          accountId: res.id,
          boards: res.boards
        };
        console.log(accountInfo);
        // cb(null, accountInfo);
        return accountInfo;
      } else if (res.type === "YT") {
        let accountInfo = {
          accountId: res.id,
          channelsList: res.channelsList
        };
        // cb(null, accountInfo);
        return accountInfo;
      }
    } catch (err) {
      console.log(err);
      // cb(null, err);
      return err;
    }
  };
  SocialMediaAccount.remoteMethod("getSmPages", {
    isStatic: true,
    accepts: [{ arg: "socialMediaId", type: "string" }],
    returns: {
      arg: "getSmPages",
      type: "object",
      root: true
    },
    http: {
      path: "/getSmPages",
      verb: "get"
    }
  });

  SocialMediaAccount.getAccessTokenFromLinkedin = async function(code, state) {
    var linkedinApi = {
      method: "GET",
      uri:
        "https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=" +
        code +
        "&redirect_uri=http://localhost:4200/my-networks&client_id=77g7k13xjls3dk&client_secret=dTez37vyK56uuERH",
      qs: {
        "content-type": "application/json"
      }
    };
    let accessToken = await request(linkedinApi);

    console.log("linked in access_token", accessToken);
    console.log("linked in access_token", typeof accessToken);
    let token = JSON.parse(accessToken);
    console.log("linked in  token", token.access_token);
    if (accessToken) {
      var options = {
        method: "GET",
        uri: "https://api.linkedin.com/v2/me/",
        qs: {
          "content-type": "application/json",
          Authorization: "Bearer " + token.access_token
        }
      };
      console.log("options", options);
      let profile = await request(options);
      console.log("linked current user profile", profile);
    }
  };
  SocialMediaAccount.remoteMethod("getAccessTokenFromLinkedin", {
    isStatic: true,
    accepts: [
      { arg: "code", type: "string" },
      { arg: "state", type: "string" }
    ],
    returns: {
      type: "object",
      root: true
    },
    http: {
      path: "/getAccessTokenFromLinkedin",
      verb: "get"
    }
  });
};
