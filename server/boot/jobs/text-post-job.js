'use strict';
const Agenda = require('agenda');
var facebookService = require('../../../server/boot/facebookService');
var twitterService = require('../../../server/boot/twitterService');
var IGService = require('../../../server/boot/IGService');
var postDetailsJob = require('../../../server/boot/jobs/posts_jobs/fetch-posts-details');
const VERSION = 'v3.0';
var app = require('../../../server/server');
var server = require('http').Server();
const socket = require('socket.io');
const io = socket(server);

async function textPostJob(Campaign, ctx, scheduledAt) {

  var conString = "mongodb://localhost:27017/smp_jobs";
  var agenda = new Agenda({
    db: {
      address: conString,
      collection: 'jobs'
    }
  });
  agenda.jobs.userId = ctx.instance.id;

  // console.log(agenda)
  agenda.define('TextJob-' + ctx.instance.id, (job, done) => {
    job.userid = ctx.instance.id
    console.log('after schedule campaign');
    let cid = ctx.instance.id;
    console.log('======> campaing id', cid);

    Campaign.findById(cid, {
      include: "posts"
    }, ctx.options, function (err, res) {
      if (err) throw err;
      console.log('Campaign =>', res);
      // console.log(res.posts);

      if (res != null) {
        res.posts.find({
          include: {
            relation: "socialMediaAccounts"
          }
        }, function (err, post) {
          if (err) console.log(err);
          console.log('===> post ', post);
          console.log(post.length);

          if (post.length > 0) {
            for (let i = 0; i < post.length; i++) {

              let postss = post[i].toJSON();
              console.log(postss.socialMediaInfo.id);
              console.log('social media account type======>', postss.socialMediaAccounts.type);
              console.log('social media account state======>', postss.socialMediaAccounts.status);
              console.log('possts.status ', postss.state)

              // console.log(postss.socialMediaAccounts.pages.data);

              if (postss.network == 'FB' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == 'Posting.....'  )) {
                let pageID = postss.socialMediaAccounts.linked.smPages;
                let lengthySession = postss.socialMediaAccounts.lengthySession;
                let ac_token = lengthySession.access_token;


                for (let j = 0; j < pageID.length; j++) {
                  if (pageID[j].id === postss.socialMediaInfo.id) {
                    // console.log("page access_token => " ,pageID[j].access_token);
                    // console.log(res.mediaFiles)

                    console.log('post description ', res.description);

                    let req = async function () {
                      try {
                        let postRes = await facebookService.postMessage(res.description, pageID[j].access_token);

                        console.log("posted id ====>", postRes);
                        if (postRes.id) {
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Posted"
                          }, ctx.options, (err, result) => {
                            if (err) {
                              console.log(err)
                            } else {
                              app.models.Post.patchOrCreateWithWhere({
                                'id': postss.id
                              }, {
                                "state": "Posted",
                                "fb_postId": postRes.id
                              }, (err, result) => {
                                if (err) throw err;
                                console.log(result);
                                if (result) {

                                  createPostAnalytics(postss.id, postRes.id);
                                }
                                done();


                                // Campaign.app.io.on('connection', function (socket) {
                                //   console.log('new user is connected');

                                //   socket.emit('textJobSuccess', {
                                //     message: 'Job Posted Success fully'
                                //   });

                                //   socket.on('disconnect', function () {
                                //     console.log('user disconnected');
                                //   });
                                // });

                              });
                            }



                          });

                        } else {
                          console.log("Error Posting text post", postRes);
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Canceled",
                            "error": postRes
                          }, ctx.options, (err, result) => {
                            if (err) {
                              console.log(err)
                            };
                            console.log(res);
                            error = postRes;
                            console.log(error);
                            // job.fail('insufficient disk space');
                            // or
                            job.fail(new Error(error));
                            job.save();

                            app.models.Post.patchOrCreateWithWhere({
                              'id': postss.id
                            }, {
                              "error": error,
                              "state": "Canceled"
                            }, (err, result) => {
                              if (err) throw err;
                              console.log(result)
                            });
                          });

                        }

                      } catch (error) {
                        console.log('========> Error', error);

                        ctx.Model.patchOrCreateWithWhere({
                          'id': ctx.instance.id
                        }, {
                          "state": "Canceled",
                          "error": error
                        }, ctx.options, (err, result) => {
                          if (err) throw err;
                          console.log(res);
                          error = error.error;
                          console.log(error);
                          job.fail(new Error(error));
                          job.save();

                          app.models.Post.patchOrCreateWithWhere({
                            'id': postss.id
                          }, {
                            "error": error,
                            "state": "Canceled"
                          }, (err, result) => {
                            if (err) throw err;
                            console.log(result)
                          });
                        });
                      }

                    }
                    try {
                      req();
                    } catch (err) {
                      console.log('=======> Error ', err);
                    }
                  }
                }
              } else if (postss.network == 'PI' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == 'Posting.....'  )) {
                console.log('Pinterest should contain an image')
              } else if (postss.network == 'IG' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == 'Posting.....'  )) {
                console.log("IG post");
                let pageID = postss.socialMediaAccounts.linked.smPages;
                let lengthySession = postss.socialMediaAccounts.lengthySession;
                let ac_token = lengthySession.access_token;


                for (let j = 0; j < pageID.length; j++) {
                  if (pageID[j].id === postss.socialMediaInfo.id) {
                    // console.log("page access_token => " ,pageID[j].access_token);
                    // console.log(res.mediaFiles)

                    console.log('post description ', res.description);

                    let req = async function () {
                      try {
                        let postRes = await IGService.postMessage(res.description, pageID[j].access_token);

                        console.log("posted id ====>", postRes);
                        if (postRes.id) {
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Posted"
                          }, ctx.options, (err, result) => {
                            if (err) {
                              console.log(err)
                            } else {
                              app.models.Post.patchOrCreateWithWhere({
                                'id': postss.id
                              }, {
                                "state": "Posted",
                                "fb_postId": postRes.id
                              }, (err, result) => {
                                if (err) throw err;
                                console.log(result);
                                if (result) {

                                  createPostAnalytics(postss.id, postRes.id);
                                }
                                done();


                                // Campaign.app.io.on('connection', function (socket) {
                                //   console.log('new user is connected');

                                //   socket.emit('textJobSuccess', {
                                //     message: 'Job Posted Success fully'
                                //   });

                                //   socket.on('disconnect', function () {
                                //     console.log('user disconnected');
                                //   });
                                // });

                              });
                            }



                          });

                        } else {
                          console.log("Error Posting text post", postRes);
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Canceled",
                            "error": postRes
                          }, ctx.options, (err, result) => {
                            if (err) {
                              console.log(err)
                            };
                            console.log(res);
                            error = postRes;
                            console.log(error);
                            // job.fail('insufficient disk space');
                            // or
                            job.fail(new Error(error));
                            job.save();

                            app.models.Post.patchOrCreateWithWhere({
                              'id': postss.id
                            }, {
                              "error": error,
                              "state": "Canceled"
                            }, (err, result) => {
                              if (err) throw err;
                              console.log(result)
                            });
                          });

                        }

                      } catch (error) {
                        console.log('========> Error', error);

                        ctx.Model.patchOrCreateWithWhere({
                          'id': ctx.instance.id
                        }, {
                          "state": "Canceled",
                          "error": error
                        }, ctx.options, (err, result) => {
                          if (err) throw err;
                          console.log(res);
                          error = error.error;
                          console.log(error);
                          job.fail(new Error(error));
                          job.save();

                          app.models.Post.patchOrCreateWithWhere({
                            'id': postss.id
                          }, {
                            "error": error,
                            "state": "Canceled"
                          }, (err, result) => {
                            if (err) throw err;
                            console.log(result)
                          });
                        });
                      }

                    }
                    try {
                      req();
                    } catch (err) {
                      console.log('=======> Error ', err);
                    }
                  }
                }
              } else if (postss.network == 'TW' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == 'Posting.....'  )) {
                let pageID = postss.socialMediaAccounts.profile;
                let session = postss.socialMediaAccounts.session;
                console.log(pageID)
                for (let j = 0; j < pageID.length; j++) {
                  console.log(postss);
                  if (pageID[j].id === postss.socialMediaInfo.id) {
                    console.log("page oauthAccessToken => ", session.oauthAccessToken);
                    console.log("page oauthAccessTokenSecret => ", session.oauthAccessTokenSecret);


                    let state = res.description;

                    console.log(state);

                    let twitReq = async function () {
                      try {
                        let postRes = await twitterService.twiterStatusPost(session.oauthAccessToken, session.oauthAccessTokenSecret, state);
                        console.log("posted id ====>", postRes.id);
                        if (postRes.id) {
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Posted",
                            "fb_postId": postRes.id
                          }, ctx.options, (err, result) => {
                            if (err) {
                              console.log(err)
                            } else {
                              app.models.Post.patchOrCreateWithWhere({
                                'id': postss.id
                              }, {
                                "state": "Posted"
                              }, ctx.options, (err, result) => {
                                if (err) throw err;
                                console.log(result);
                                if (result) {

                                  createPostAnalytics(postss.id, postRes.id);
                                }
                                done();
                                // Campaign.app.io.on('connection', function (socket) {
                                //   console.log('new user is connected');

                                //   socket.emit('textJobSuccess', {
                                //     message: 'Job Posted Success fully'
                                //   });

                                //   socket.on('disconnect', function () {
                                //     console.log('user disconnected');
                                //   });
                                // });
                              });
                            }

                          })
                        } else {
                          console.log("Error Posting text post", postRes);
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Canceled",
                            "error": postRes
                          }, ctx.options, (err, result) => {
                            if (err) throw err;
                            console.log(result);
                            error = postRes;
                            console.log(error);
                            job.fail(new Error(error));
                            job.save();

                            app.models.Post.patchOrCreateWithWhere({
                              'id': postss.id
                            }, {
                              "error": error,
                              "state": "Canceled"
                            }, (err, result) => {
                              if (err) throw err;
                              console.log(result)
                            });
                          });

                        }

                      } catch (error) {
                        console.log('========> Error', error);

                        ctx.Model.patchOrCreateWithWhere({
                          'id': ctx.instance.id
                        }, {
                          "state": "Canceled",
                          "error": error
                        }, ctx.options, (err, result) => {
                          if (err) throw err;
                          console.log(res);
                          error = error.error;
                          console.log(error);
                          job.fail(new Error(error));
                          job.save();

                          app.models.Post.patchOrCreateWithWhere({
                            'id': postss.id
                          }, {
                            "error": error,
                            "state": "Canceled"
                          }, (err, result) => {
                            if (err) throw err;
                            console.log(result)
                          });
                        });
                      }

                    }
                    try {
                      twitReq();

                    } catch (err) {
                      console.log('=======> Error ', err);
                    }
                  }
                }
              }
            }

            console.log('calculate percentage of successful campaign');

            let successCall = async function () {
              let success = await updateSuccess(ctx);
              console.log('success', success);

            }

            try {
              setTimeout(() => {
                successCall()
              }, 5000)

            } catch (err) {
              console.log(err)
            }


          } else {
            console.log('Please select at least one page');
            console.log(ctx.options, '<=======', ctx.instance.length);
            ctx.options.accessToken.previousValue = ctx.instance;
            ctx.Model.patchOrCreateWithWhere({
              'id': ctx.instance.id
            }, {
              "state": "Canceled",
              "error": "Please select at least one page"
            }, ctx.options, (err, result) => {
              if (err) {

                console.log(err);
                // job.fail(new Error('Please select at least one page'));
                // job.save();
              }
              console.log(res);
            });
            job.fail(new Error('Please select at least one page'));
            job.save();
          }
        });
      } else {
        console.log('Campaign is Empty');
        ctx.Model.patchOrCreateWithWhere({
          'id': ctx.instance.id
        }, {
          "state": "Canceled",
          "error": "Campaign is Empty"
        }, ctx.options, (err, result) => {
          if (err) {

            console.log(err);
            job.fail(new Error('Campaing is Empty'));
            job.save();
          }
          console.log(res);
        });
        job.fail(new Error('Campaing is Empty'));
        job.save();

      }
    });
  });

  agenda.on('ready', () => {
    agenda.start();
    agenda.schedule(scheduledAt, 'TextJob-' + ctx.instance.id);
    //agenda.every('1 minutes', 'fbpost');
  });
  //   agenda.processEvery('1 minutes');

}

async function updateSuccess(ctx) {
  let campPost = await app.models.Post.find({
    where: {
      campaignId: ctx.instance.id
    }
  });
  console.log('campost =====>', campPost);
  if (campPost.length > 0) {
    let successfulPost = [];
    let totalPost = campPost.length;
    campPost.filter((succPost) => {
      //  succPost.state = 'Posted';

      successfulPost.push(succPost.state = 'Posted')
    });
    console.log('successfulPost =====>', successfulPost);
    let percentage = successfulPost.length / totalPost * 100;

    ctx.Model.patchOrCreateWithWhere({
      'id': ctx.instance.id
    }, {
      "success": percentage
    }, ctx.options, (err, result) => {
      if (err) {

        console.log(err);
      }
      console.log(result);
    });
  }
}

async function createPostAnalytics(postId, fbPostId) {

  try {
    let createAnalytics = await app.models.PostAnalytics.create({
      postId: postId,
      socialMediaPostId: fbPostId
    });
    console.log(createAnalytics);


    if (createAnalytics) {
      postDetailsJob.getPostAnalytics(fbPostId);
      return true;
    } else {
      return false
    }
  } catch (err) {
    return err
  }

}
const textJob = {
  textPostJob: textPostJob,
  updateSuccess: updateSuccess,
  createPostAnalytics: createPostAnalytics
}
module.exports = textJob;
