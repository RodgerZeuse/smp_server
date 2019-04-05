'use strict'
const request = require('request-promise');
const FormData = require('form-data');
var form = new FormData();
const VERSION = 'v3.0';
var APP;
//Test app
// const app_secret = '5535f5a6265d496d90d4e3074fa2f9c0';
// const app_id = '816265228761874';
const app_secret = '2300d1ea47e635e6e842c1d7f943f892';
const app_id = '196750267603734';

//Account
async function getUserPages(accountId, token) {
  console.log('::getUserPages  accessToken ', token);
  try {
    // fields: "id",
    var userID_params = {
      fields: 'id,name,access_token,picture',
      access_token: token
    }
    let me = await request({
      url: `https://graph.facebook.com/${VERSION}/${accountId}/accounts`,
      qs: userID_params
    });
  
    // var user = JSON.parse(me);
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::getUserPages error <- ', err);
    return Promise.reject(err);
  }
}



//Account
async function getUserBusinesses(accountId, token) {
  console.log('::getUserBusinesses  accessToken ', accountId, token);
  try {
    var params = {
      fields: 'payment_account_id,permitted_roles,profile_picture_uri,primary_page,name,link,id,vertical',
      access_token: token
    }
    let me = await request({
      url: `https://graph.facebook.com/${accountId}/businesses`,
      qs: params
    });
    // var user = JSON.parse(me);
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::getUserBusinesses error <- ', err);
    return Promise.reject(err);
  }
}
//Account
async function getBusinessOwnedPages(businessId, token) {
  console.log('::getBusinessOwnedPages  accessToken ', token);
  try {
    //name,link,engagement,access_token
    var params = {
      fields: 'name,link,engagement,page_token,access_token,ad_campaign,about,instagram_business_account,connected_instagram_account,fan_count',
      access_token: token
    }
    let me = await request({
      url: `https://graph.facebook.com/${VERSION}/${businessId}/owned_pages`,
      qs: params
    });
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::getBusinessOwnedPages error <- ', err);
    return Promise.reject(err);
  }
}
//Account
async function getBusinessOwnedAdAccounts(businessId, token) {
  console.log('::getBusinessOwnedAdAccounts  accessToken ', token);
  try {
    var params = {
      fields: 'name,account_id,business,age,agency_client_declaration,account_status,amount_spent,balance,business_name,is_personal,id',
      access_token: token
    }
    let me = await request({
      url: `https://graph.facebook.com/${VERSION}/${businessId}/owned_ad_accounts`,
      qs: params
    });
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::getBusinessOwnedAdAccounts error <- ', err);
    return Promise.reject(err);
  }
}
async function getAdAccountInsights(adAccountid, token) {
  //TODO: Returning error 'Cannot access an object not managed by the business owning this app.'
  // Check https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser/

  /*
  https://developers.facebook.com/docs/marketing-api/reference/ad-account/customaudiences/
  act_<AD_ACCOUNT_ID>/customaudiences  

  act_191046641618497/insights?fields=reach,impressions,social_impressions,social_reach,social_spend,spend
  act_<AD_ACCOUNT_ID>/insights?fields=spend&level=account&date_preset=yesterday
  */
  console.log('::getAdInsights  accessToken ', token);
  try {
    var params = {
      fields: 'reach, impressions, spend',
      level:'account',
      date_preset: 'yesterday',
      action_attribution_windows: ["1d_view", "1d_click"],
      access_token: token
    }
    // url: `https://graph.facebook.com/${VERSION}/act_${adAccountid}/insights`,
    let me = await request({
      url: `https://graph.facebook.com/${VERSION}/${adAccountid}/insights`,
      qs: params
    });
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::getAdInsights error <- ', err);
    return Promise.reject(err);
  }
}
async function getPageDetails(pageId, token) {
  //TODO: Returning error 'Cannot access an object not managed by the business owning this app.'
  // Check https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser/
  console.log('::getPageDetails  accessToken ', token);
  try {
    var params = {
      fields: 'name,link,engagement,access_token,page_token,ad_campaign,about,instagram_business_account,connected_instagram_account,fan_count',
      access_token: token
    }
    let me = await request({
      url: `https://graph.facebook.com/${VERSION}/${pageId}`,
      qs: params
    });
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::getPageDetails error <- ', err);
    return Promise.reject(err);
  }
}
//Account
async function getVideoInsights(videoId, token) {
  console.log('::getVideoInsights  videoId, token ', videoId, token);
  try {
    // metric:'total_video_impressions',
    // period:'lifetime',
    var params = {
      metric:'total_video_impressions,total_video_views',
      date_preset:'today',
      access_token: token
    };
    //video-id/video_insights/metric from https://developers.facebook.com/docs/graph-api/reference/video/video_insights
    //493363677766856/video_insights/total_video_views
    //video-id/video_insights/total_video_impressions
    //video_insights/?metric=total_video_impressions&date_preset=today
    let me = await request({
      url: `https://graph.facebook.com/${VERSION}/${videoId}/video_insights`,
      qs: params
    });
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::getVideoInsights error <- ', err);
    return Promise.reject(err);
  }
}
async function getPageInsights(pageId, token) {
  console.log('::getPageInsights  videoId, token ', videoId, token);
  try {
    var params = {
      metric:'total_video_impressions',
      period:'lifetime',
      access_token: token
    };
    /**
    Metrics = page_impressions, page_engaged_users, page_fans, page_views_total
      page_video_views, page_video_views_paid, page_posts_impressions,
      post_impressions,

      Examples
        478348142601743/insights/?metric=page_posts_impressions,page_impressions
      For today page insights 
        478348142601743/insights/?metric=page_posts_impressions,page_impressions&date_preset=today


    https://developers.facebook.com/docs/graph-api/reference/v3.0/insights
    enum{today, yesterday, this_month, last_month, this_quarter, lifetime, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, 
      this_week_mon_today, this_week_sun_today, this_year}     
      
    */
    //OBJECT-ID/insights?metric={metric[,metric,...]}
    //OBJECT-ID/insights/?metric=page_fan_adds_unique,page_fan_adds&date_preset=today
    //page-id/insights/total_video_impressions
    //page-id/insights/?metric=page_fan_adds_unique,page_fan_adds&period=day&since=2018-06-10&until=2018-07-06
    // ?metric=page_fan_adds_unique&period=lifetime"
    //  "pageid/insights?metric=page_daily_video_ab_break_ad_impressions_by_crosspost_status&period=day&since=2017-12-10&until=2017-12-14"
    ///insights/?metric=total_video_impressions&period=lifetime

    let me = await request({
      url: `https://graph.facebook.com/${VERSION}/${pageId}/insights`,
      qs: params
    });
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::getPageInsights error <- ', err);
    return Promise.reject(err);
  }
}
async function getPageVideos(pageId, token) {
  console.log('::getPageVideos  videoId, token ', pageId, token);
  try {
    var params = {
      fields:'id,description,countViews,updated_time,created_time,source,icon,permalink_url,published,title,embeddable,video_insights{id,name,values,title,period,description,description_from_api_doc},thumbnails',
      access_token: token
    };
    let me = await request({
      url: `https://graph.facebook.com/${VERSION}/${pageId}/videos`,
      qs: params
    });
    /*
    {
      "id": "493363677766856",
      "description": "Sample bunny vifdeo",
      "updated_time": "2018-07-06T12:48:08+0000",
      "created_time": "2018-07-06T12:47:47+0000",
      "source": "https://scontent.xx.fbcdn.net/v/t66.18014-6/29985157_218403128983813_5527357643582984783_n.mp4?_nc_cat=0&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&oh=92af4fc5f048bab42b178b4a34aeaec9&oe=5BEC9EB9",
      "icon": "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/DggDhA4z4tO.gif",
      "permalink_url": "/478348142601743/videos/493363677766856/",
      "published": true,
      "title": "Bunny",
      "embeddable": true,
      "video_insights": {
        "data": [
          {
            "id": "493363677766856/video_insights/total_video_views/lifetime",
            "name": "total_video_views",
            "values": [
              {
                "value": 1
              }
            ],
            "title": "Lifetime Total Video Views",
            "period": "lifetime",
            "description": "Lifetime: Total number of times your video was viewed for 3 seconds or viewed to the end, whichever came first. (Total Count)"
          },
        ]
      }
    }    
    */
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::getPageVideos error <- ', err);
    return Promise.reject(err);
  }
}
async function getVideoDetails(videoId, token) {
  console.log('::getPageVideos  videoId, token ', videoId, token);
  try {
    var params = {
      fields:'title,description,id,source,picture,permalink_url,created_time',
      metric:'total_video_impressions',
      period:'lifetime',
      access_token: token
    };
    //493363677766856?fields=title,description,id,source,picture,permalink_url,created_time    
    let me = await request({
      url: `https://graph.facebook.com/${VERSION}/${videoId}`,
      qs: params
    });
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::getPageVideos error <- ', err);
    return Promise.reject(err);
  }
}
//Account
async function refreshUserToken(token) {
  var params = {
    client_id: app_id,
    client_secret: app_secret,
    fb_exchange_token: token,
    grant_type: 'fb_exchange_token'
  };
  console.log('::refreshUserTokenFB  accessToken ', token);
  try {
    let me = await request({
      url: 'https://graph.facebook.com/oauth/access_token',
      qs: params
    });
    console.log('::refreshUserTokenFB  response  ', me);
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::refreshUserTokenFB error <- ', err);
    return Promise.reject(err);
  }
}
//Audience
async function createFBPageAudienceWithAdAccount(name, subtype, description, pageId, adAccountId, token) {
  // 'rule={"inclusions":{"operator":"or","rules":[{"event_sources":[{"id":"<PAGE_ID>","type":"page"}],"retention_seconds":31536000,"filter":{"operator":"and","filters":[{"field":"event","operator":"eq","value":"page_engaged"}]}}]}}' \
  // rule: [{
  //   object_id: pageId,
  //   event_name: "page_visited"
  // }],
  
  // subtype: subtype,
  
  var params = {
    method: 'post',
    name: name,
    description: description,
    rule: `{"inclusions":{"operator":"or","rules":[{"event_sources":[{"id":${pageId},"type":"page"}],"retention_seconds":30,"filter":{"operator":"and","filters":[{"field":"event","operator":"eq","value":"page_engaged"}]}}]}}`,
    access_token: token
  };
  console.log('::createFBPageAudienceWithAdAccount  params ', params);
  console.log('::createFBPageAudienceWithAdAccount  params ', JSON.stringify(params));
  
  try {
    let me = await request({
      url: 'https://graph.facebook.com/' + VERSION + '/' + adAccountId + '/customaudiences',
      qs: params
    });
    console.log('::createFBPageAudienceWithAdAccount  fb call < ', me);
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::getUserPages error <- ', err);
    return Promise.reject(err);
  }
}

//Audience
async function shareAudienceWithAdAccount(audienceId, adAccountIds, token) {
  console.log('::shareAudienceWithAdAccount');
  console.log('::shareAudienceWithAdAccount adAccountIds[0] ', adAccountIds[0]);

  

  try {
    var params = {
      method: "post",
      adaccounts: adAccountIds,
      access_token: token
    }
    
    console.log('::shareAudienceWithAdAccount params ', params);

    let me = await request({
      url: "https://graph.facebook.com/" + audienceId + "/adaccounts",
      qs: params
    });
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
//Audience
async function unshareAudienceWithAdAccount(audienceId, adAccountIds, token) {
  console.log('::unshareAudienceWithAdAccount');
  try {
    var params = {
      method: "delete",
      adaccounts: adAccountIds,
      access_token: token
    }
    console.log('::unshareAudienceWithAdAccount params ', params);

    let me = await request({
      url: "https://graph.facebook.com/" + audienceId + "/adaccounts",
      qs: params
    });
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
//Audience
async function deleteAudience(audienceId, token) {
  console.log('::deleteAudience - ', audienceId, ' - ', token);
  try {
    var params = {
      method: "delete",
      access_token: token
    }
    console.log('::deleteAudience params ', params);

    let me = await request({
      url: "https://graph.facebook.com/" + VERSION + '/' + audienceId,
      qs: params
    });
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
const facebookController = {
  async refreshToken(req, res) {
    console.log('::refreshToken');
    try {
      var ApplicationUser = APP.models.ApplicationUser;

      let userId = req.query.userId;
      let user = await ApplicationUser.findById(userId, {
        include: {
          relation: 'accounts',
          scope: {
            where: {
              type: 'FB'
            },
            include: {
              relation: 'channelSources',
              scope: {
                where: {
                  platform: 'FB'
                }
              }
            }
          }
        }
      });
      let accounts = await user.accounts.find();
      console.log('Users account count ', accounts.length);
      accounts.forEach(async (ac) => {
        let userToken = ac.lengthySession ? ac.lengthySession.access_token : ac.session.accessToken;
        let resp = await refreshUserToken(userToken);
        ac.lengthySession = resp;
        ac.save();
        let channelSources = await ac.channelSources.find();
        channelSources.forEach(async (cs) => {
          let pageToken = cs.lengthySession ? cs.lengthySession.access_token : cs.source.access_token;
          let resp = await refreshUserToken(pageToken);
          cs.lengthySession = resp;
          cs.save();
        });
      });
      res.json(user);
    } catch (err) {
      console.log('::refreshToken => \t ', err);
      res.json(err);
    }
  },
  async getUserBusinesses(req, res) {
    console.log('::getUserBusinesses userId, accountId, accessToken \n \t', req.query.userId, req.query.accountId, req.query.accessToken);
    try {
      let Account = APP.models.Account;
      let account = await Account.findById(req.query.accountId);
      console.log('::getUserBusinesses account \n \t', account);
      let resp = await getUserBusinesses(account.session.userID, account.session.accessToken);
      console.log('::getUserBusinesses resp => ', resp);
      account.businesses = resp.data;
      account.save();
      console.log('::getUserBusinesses account saved');
      res.json(resp);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async getBusinessDetails(req, res) {
    console.log('::getBusinessOwnedPages accountId, accessToken \n \t', req.params.businessId, req.query.accountId);
    try {
      let Account = APP.models.Account;
      let account = await Account.findById(req.query.accountId);
      console.log('::getBusinessDetails account \n \t', account);
      let resp = await getBusinessOwnedPages(req.params.businessId, account.session.accessToken);
      console.log('::getBusinessOwnedPages resp => ', resp);
      account.businesses = resp.data;
      account.save();
      resp = await getBusinessOwnedAdAccounts(req.params.businessId, account.session.accessToken);
      console.log('::getBusinessOwnedAdAccounts resp => ', resp);
      account.adAccounts = resp.data;
      account.save();
      console.log('::getBusinessOwnedPages account saved');
      res.json(resp);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async getPageDetails(req, res) {
    console.log('::req.params', req.params);
    console.log('::getPageDetails pageId \n \t', req.params.channelSourceId);
    try {
      let ChannelSource = APP.models.ChannelSource;
      let channelSource = await ChannelSource.findById(req.params.channelSourceId);
      console.log('::getBusinessDetails channelSource \n \t', channelSource);
      let resp = await getPageDetails(channelSource.source.id, channelSource.source.access_token);
      console.log('::getBusinessOwnedPages resp => ', resp);
      channelSource.sourceDetails = resp;
      channelSource.save();
      console.log('::getBusinessOwnedPages account saved');
      res.json(resp);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async getUserPages(req, res) {
    console.log('::getUserPages accountId, accessToken \n \t', req.query.accountId, req.query.accessToken);
    try {
      let Account = APP.models.Account;
      let account = await Account.findById(req.query.accountId);
      console.log('::getUserPages account \n \t', account);
      let resp = await getUserPages(account.session.userID, account.session.accessToken);
      console.log('::getUserPages resp => ', resp);
      account.pages = resp;
      account.save();
      console.log('::getUserPages account saved');
      res.json(resp);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async getUserAdAccounts(req, res) {
    console.log('::getUserAdAccounts');
    try {
      res.json(200);
    } catch (err) {
      console.log(err);
    }
  },
  async createAudienceWithAdAccount(req, res) {
    console.log('::createAudienceWithAdAccount');
    try {
      let resp = await createAudienceWithAdAccount(req.body.name, req.body.subtype,
        req.body.description, req.body.adAccountId, req.query.accessToken);
      console.log('::createAudienceWithAdAccount audience saved');
      res.json(resp);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async getAdInsights(req, res) {
    console.log('::getAdInsights');
    try {
      let resp = await getAdInsights(req.body.adAccountId, req.query.accessToken);
      console.log('::getAdInsights audience saved');
      res.json(resp);
    } catch (err) {
      console.error('::getAdInsights audience error ', err);
      res.json(err);
    }
  },
  async shareAudienceWithAdAccount(req, res) {
    console.log('::createAudienceWithAdAccount');
    try {
      let resp = await shareAudienceWithAdAccount(req.body.audienceId, req.body.adAccountIds, req.query.accessToken);
      console.log('::shareAudienceWithAdAccount audience saved');
      res.json(resp);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async unshareAudienceWithAdAccount(req, res) {
    console.log('::unshareAudienceWithAdAccount');
    try {
      let resp = await unshareAudienceWithAdAccount(req.body.audienceId, req.body.adAccountIds, req.query.accessToken);
      console.log('::unshareAudienceWithAdAccount audience saved');
      res.json(resp);
    } catch (err) {
      console.error('::unshareAudienceWithAdAccount error ', err);
      res.json(err);
    }
  },
  async deleteAudienceFromAdAccount(req, res) {
    console.log('::deleteAudienceFromAdAccount');
    try {
      let resp = await deleteAudienceFromAdAccount(req.body.audienceId, req.query.accessToken);
      console.log('::deleteAudienceFromAdAccount audience saved');
      res.json(resp);
    } catch (err) {
      console.error('::deleteAudienceFromAdAccount error ', err);
      res.json(err);
    }
  },
  async getPageInsights(req, res) {
    console.log('::getPageInsights');
    try {
      res.json(200);
    } catch (err) {
      console.log(err);
    }
  },
  async getPageVideoInsights(req, res) {
    console.log('::getPageVideoInsights');
    try {
      res.json(200);
    } catch (err) {
      console.log(err);
    }
  },
  async createCustomAudience(req, res) {

    // var createAudience_params = {
    // 	method: "post",
    // 	access_token: req.body.access_token
    // 	name:"My new Audience",
    // 	subtype: "ENGAGEMENT",
    // 	description: "People who from my website",
    // 	prefill: 1,
    // 	rule:[{object_id:req.body.PAGE_ID, event_name:"page_visited"}]
    // }
    var createAudience_params = {
      method: 'post',
      name: req.body.NAME,
      subtype: 'ENGAGEMENT',
      description: req.body.DESCRIPTION
    };
    request({
        url: 'https://graph.facebook.com/v2.12/act_' +
          req.body.ADACCOUNT_ID +
          '/customaudiences?access_token=' +
          req.body.access_token,
        qs: createAudience_params
      },
      function (err, response, body) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('create audience result', body);
        res.send(body);
      }
    );
  },
  async createFBVideoAudience(req, res) {
    console.log('::getUserPages  accessToken ', token);
    let videoId = req.body.videoId;
    let adAccountId = req.body.adAccountId;
    try {
      // fields: "id",
      var params = {
        method: 'post',
        fields: 'id,name,access_token',
        name: req.body.NAME,
        subtype: 'ENGAGEMENT',
        description: 'Users who watched the video',
        rule: [{
          object_id: video_id,
          event_name: "video_watched"
        }],
        access_token: token
      }
      let me = await request({
        url: `https://graph.facebook.com/act_${adAccountId}/customaudiences`,
        qs: params
      });
      return Promise.resolve(JSON.parse(me));
    } catch (err) {
      console.error('::getUserPages error <- ', err);
      return Promise.reject(err);
    }
  },
  async createFBPageAudience(req, res) {
    console.log('::getUserPages  accessToken ', token);
    let videoId = req.body.videoId;
    let adAccountId = req.body.adAccountId;
    try {

      let me = await request({
        url: `https://graph.facebook.com/act_${adAccountId}/customaudiences`,
        qs: params
      });

      let resp = await createFBPageAudienceWithAdAccount(req.body.name, 'ENGAGEMENT',
        req.body.description, req.body.pageId, req.body.adAccountId, req.query.accessToken);

      return Promise.resolve(resp);
    } catch (err) {
      console.error('::getUserPages error <- ', err);
      return Promise.reject(err);
    }
  },
  async createIGVideoAudience(req, res) {
    console.log('::getUserPages  accessToken ', token);
    let videoId = req.body.videoId;
    let adAccountId = req.body.adAccountId;
    let INSTAGRAM_BUSINESS_PROFILE_ID = null;
    try {
      // fields: "id",
      var params = {
        method: 'post',
        fields: 'id,name,access_token',
        name: req.body.NAME,
        subtype: 'ENGAGEMENT',
        description: 'Users who watched the video',
        rule: {
          "inclusions": {
            "operator": "or",
            "rules": [{
              "event_sources": [{
                "id": INSTAGRAM_BUSINESS_PROFILE_ID,
                "type": "page"
              }],
              "retention_seconds": 31536000,
              "filter": {
                "operator": "and",
                "filters": [{
                  "field": "event",
                  "operator": "eq",
                  "value": "ig_business_profile_all"
                }]
              }
            }]
          }
        },
        access_token: token
      }
      /*
      rule={"inclusions":{"operator":"or",
      "rules":[{"event_sources":[{"id":"<INSTAGRAM_BUSINESS_PROFILE_ID>","type":"page"}],
      "retention_seconds":31536000,"filter":{"operator":"and",
      "filters":[{"field":"event","operator":"eq","value":"ig_business_profile_all"}]}}]}}
      */

      let me = await request({
        url: `https://graph.facebook.com/act_${adAccountId}/customaudiences`,
        qs: params
      });
      return Promise.resolve(JSON.parse(me));
    } catch (err) {
      console.error('::getUserPages error <- ', err);
      return Promise.reject(err);
    }
  },
  async createIGPageAudience(req, res) {
    console.log('::getUserPages  accessToken ', token);
    let videoId = req.body.videoId;
    let adAccountId = req.body.adAccountId;
    try {
      // fields: "id",
      var params = {
        method: 'post',
        fields: 'id,name,access_token',
        name: req.body.NAME,
        subtype: 'ENGAGEMENT',
        description: 'Users who watched the video',
        rule: [{
          object_id: req.body.PAGE_ID,
          event_name: "page_visited"
        }],
        access_token: token
      }
      let me = await request({
        url: `https://graph.facebook.com/act_${adAccountId}/customaudiences`,
        qs: params
      });
      return Promise.resolve(JSON.parse(me));
    } catch (err) {
      console.error('::getUserPages error <- ', err);
      return Promise.reject(err);
    }
  },
  async removeAudience(req, res) {
    var deleteAudience_params = {
      method: "delete"
    }
    request({
      url: "https://graph.facebook.com/v2.12/" + req.body.customAUDIENCEID + "?access_token=" + req.body.access_token,
      qs: deleteAudience_params
    }, function (err, response, body) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("delete audience result", body);
      res.send(body);
    });
  },
  async readAdAccountAudience(req, res) {
    var getaudiencesOfAdAccount_params = {
      fields: 'id,name,description,approximate_count'
    };

    request({
        url: 'https://graph.facebook.com/v2.12/act_' +
          req.body.ADACCOUNT_ID +
          '/customaudiences?access_token=' +
          req.body.access_token,
        qs: getaudiencesOfAdAccount_params
      },
      function (err, response, body) {
        if (err) {
          console.log(err);
          return;
        }
        res.send(body);
      }
    );
  }
}

async function getUserGroups(accountId, token) {
  console.log('::getUser Groups  accessToken ', token);
  try {
    // fields: "id",
    var userID_params = {
      fields: 'id,name,cover',
      access_token: token
    }
    let me = await request({
      url: `https://graph.facebook.com/${VERSION}/${accountId}/groups`,
      qs: userID_params
    });
    // var user = JSON.parse(me);
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::getUserPages error <- ', err);
    return Promise.reject(err);
  }
}


async function postImage(imageUrl,caption, token) {
  console.log('::Pages Images  accessToken ', token);
  try {
    // fields: "id",
    var userID_params = {
      method: 'post',
      access_token: token,
      url:imageUrl,
      caption:caption
    }
    let me = await request({
      url: `https://graph.facebook.com/me/photos`,
      qs: userID_params
    });
    // var user = JSON.parse(me);
    // console.log(me)
    return Promise.resolve(JSON.parse(me));
    
  } catch (err) {
    console.error('::Post error <- ', err);
    return Promise.reject(err);
  }
}

async function postUnpublishedImage(imageUrls, token) {
  console.log('::Multiple  Images  accessToken ', token);
  try {
    // fields: "id",
    var userID_params = {
      method: 'post',
      access_token: token,
      url:imageUrls,
      published:false,
      temporary:true
    }
    let me = await request({
      url: `https://graph.facebook.com/me/photos`,
      qs: userID_params
    });
    // var user = JSON.parse(me);
    // console.log(me)
    return Promise.resolve(JSON.parse(me));
    
  } catch (err) {
    console.error('::Post error <- ', err);
    return Promise.reject(err);
  }
}
async function postMultipleImages(attachedMedia, token) {
  console.log('::Multiple  Images  accessToken ', token);
  try {
    // fields: "id",
    var userID_params = {
      method: 'post',
      access_token: token,
      attached_media:attachedMedia,
      published:true
    }
    let me = await request({
      url: `https://graph.facebook.com/me/feed`,
      qs: userID_params
    });
    // var user = JSON.parse(me);
    // console.log(me)
    return Promise.resolve(JSON.parse(me));
    
  } catch (err) {
    console.error('::Post error <- ', err);
    return Promise.reject(err);
  }
}


async function postVideo(videoUrl,description, token) {
  console.log('::Pages Videos  accessToken ', token);
  try {
    // fields: "id",
    var userID_params = {
      method: 'post',
      access_token: token,
      file_url:videoUrl,
      description:description
    }
    let me = await request({
      url: `https://graph.facebook.com/me/videos`,
      qs: userID_params
    });
    var user = JSON.parse(me);
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    console.error('::Post error <- ', err);
    return Promise.reject(err);
  }
}

async function postMessage(message, token) {
  console.log('::Pages Text messages  accessToken ', token);
  try {
    // fields: "id",
    var userID_params = {
      method: 'post',
      access_token: token,
      message:message
    }
    let me = await request({
      url: `https://graph.facebook.com/me/feed`,
      qs: userID_params
    });
    // var user = JSON.parse(me);
    return Promise.resolve(JSON.parse(me));
  } catch (err) {
    // console.error('::Post error <- ', err);
    return Promise.reject(err);
  }
}


async function batchRequestMultiImage(batch, token) {
  
  console.log('::batch ', token);

  try {
    // fields: "id",
    var userID_params = {
      access_token: token,
      batch:batch
    }
    let me = await request({
      method:'POST',
      url: `https://graph.facebook.com`,
      qs: userID_params
    });
    // var user = JSON.parse(me);
    console.log(me)
    return Promise.resolve(JSON.parse(me));
    
  } catch (err) {
    console.error('::Post error <- ', err);
    return Promise.reject(err);
  }
}


async function batchRequestSingleImage(batch, token,file) {
  
  console.log('::batch ', token);

  try {
    // fields: "id",
    var userID_params = {
      access_token: token,
      batch:batch
      
    }
    let me = await request({
      method:'POST',
      url: `https://graph.facebook.com`,
      qs: userID_params
    });
    // var user = JSON.parse(me);
    // console.log(me)
    return Promise.resolve(JSON.parse(me));
    
  } catch (err) {
    // console.error('::Post error <- ', err);
    return Promise.reject(err);
  }
}

async function searchPlace(q,center, distance,token) {
  
  console.log('::search ', token);
  console.log('::search ', q);

  try {
    // fields: "id",
    var userID_params = {
      type:'place',
      fields:'id,name,link,location',
      access_token: token,
      q:q
      
    }
    let me = await request({
      url: `https://graph.facebook.com/${VERSION}/search`,
      qs: userID_params
    });
    // var user = JSON.parse(me);
    console.log(me)
    return Promise.resolve(JSON.parse(me));
    
  } catch (err) {
    // console.error('::Post error <- ', err);
    return Promise.reject(err);
  }
}

const IGService = {
  getPageVideos:getPageVideos,
  getVideoDetails:getVideoDetails,
  getUserPages:getUserPages,
  refreshUserToken:refreshUserToken,
  getUserBusinesses:getUserBusinesses,
  createFBPageAudienceWithAdAccount:createFBPageAudienceWithAdAccount,
  shareAudienceWithAdAccount:shareAudienceWithAdAccount,
  unshareAudienceWithAdAccount:unshareAudienceWithAdAccount,
  deleteAudience:deleteAudience,
  getBusinessOwnedAdAccounts:getBusinessOwnedAdAccounts,
  getBusinessOwnedPages:getBusinessOwnedPages,
  getAdAccountInsights:getAdAccountInsights,
  getVideoInsights:getVideoInsights,
  getPageInsights:getPageInsights,
  getUserGroups:getUserGroups,
  postImage:postImage,
  postVideo:postVideo,
  postMessage:postMessage,
  postUnpublishedImage:postUnpublishedImage,
  postMultipleImages:postMultipleImages,
  batchRequestMultiImage:batchRequestMultiImage,
  searchPlace:searchPlace,
  batchRequestSingleImage:batchRequestSingleImage
}

module.exports = IGService;

//1 :userId/accounts 
//180148332651533/accounts

// Instagram Graph API
// 1 Get user bussiness list  from bussiness maanager api to get bussinessId :userId/businesses
// 180148332651533/businesses
//2 get bussines owned_pages :bussinessId/owned_pages
// 191027238287104/owned_pages
//3 pageId?fields=instagram_business_account
// 201220950522572?fields=instagram_business_account
// 201220950522572?fields=id,name,connected_instagram_account,fan_count
//191027238287104/owned_pages?fields=access_token,ad_campaign,about,instagram_business_account,connected_instagram_account,fan_count

// ???/478348142601743/page_backed_instagram_accounts ????

//Buseiness Details
// 191027238287104?fields=payment_account_id,primary_page,profile_picture_uri,link,name



//AdAccounts
//Get bussiness user adaccounts
//"https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/owned_ad_accounts?fields=id,name"
// 191027238287104/owned_ad_accounts?fields=id,name
// 191027238287104/owned_ad_accounts?fields=name,account_id,business,age,agency_client_declaration,account_status,amount_spent,balance,business_name,is_personal,id

// Get AdAccount details by id
// act_191046641618497?fields=account_status,account_id,balance,business,age,amount_spent
//Read custom audience from adaccount
// act_191046641618497/customaudiences?fields=description,account_id

// curl -G \
// -d "access_token=EAACy8X3PWxYBALtB7nxUjRKdOQ3nIr7ERjrggLF6NGpLuXKF1LEmuaHoMJ0aY1zuugapop6edlQFIa9UeT9l2ytJP0lLg5y4AH41B5VnxOMvx5076h6B7jk4RBiE5T5o37uYL3hZCGtqEPOS6LaSygbx2OmohnDXLK62iHwZDZD" \
// "https://graph.facebook.com/${VERSION}/191027238287104/pending_owned_ad_accounts"