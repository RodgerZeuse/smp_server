'use strict';
const Agenda = require('agenda');
var facebookService = require('../../../server/boot/facebookService');
var twitterService = require('../../../server/boot/twitterService');
var IGService = require('../../../server/boot/IGService');
const VERSION = 'v3.0';
var app = require('../../../server/server')

async function singleVideoPostJob(Campaign, ctx, scheduledAt) {
  // console.log(ctx);
  let localTime =  moment.tz.guess()
  let newTime = moment(scheduledAt).tz(localTime).format('YYYY-MM-DD hh:mm A');
  let convertedDate = new Date(newTime);
  var conString = "mongodb://yamin:yamin123@ds133086.mlab.com:33086/smp_jobs";
  var agenda = new Agenda({
    db: {
      address: conString,
      collection: 'jobs'
    }
  });

  agenda.define('SingleVideoJob-' + ctx.instance.id, (job, done) => {

    console.log('after schedule campaign');
    let cid = ctx.instance.id;
    console.log(cid);
    console.log(ctx.instance.mediaFiles.length)

    Campaign.findById(cid, {
      include: {
        relation: 'posts'
      }
    }, ctx.options, function (err, res) {
      if (err) throw err;
      console.log('Campaign =>', res);
      // console.log(res.posts)
      if (res != null) {
        res.posts.find({
          include: {
            relation: "socialMediaAccounts"
          }
        }, function (err, post) {
          if (err) throw err;
          console.log(post.length)
          if (post.length > 0) {
            for (let i = 0; i < post.length; i++) {

              let postss = post[i].toJSON();
              console.log(postss.socialMediaInfo.id);
              console.log('social media account type======>', postss.socialMediaAccounts.type);
              console.log('social media account status======>', postss.socialMediaAccounts.status);
              console.log('possts.status ', postss.state)

              // console.log(postss.socialMediaAccounts.pages.data);

              if (postss.network == 'FB' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == 'Posting.....'  )  ) {
                let pageID = postss.socialMediaAccounts.linked.smPages;


                for (let j = 0; j < pageID.length; j++) {
                  if (pageID[j].id === postss.socialMediaInfo.id) {
                    // console.log("page access_token => " ,pageID[j].access_token);
                    // console.log(res.mediaFiles)

                    console.log(res.description);

                    console.log('media files length =>', res.mediaFiles.length);
                    console.log('Media type video  1 ')
                    console.log('Media type Video')
                    console.log(res.mediaFiles);
                    let video = postss.mediaFiles[0].name;
                    console.log(video);
                    let description = res.description;
                    // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/${video}`;
                    // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/1.png`;
                    let url = 'https://www.w3schools.com/html/mov_bbb.mp4';
                    let singleVideo = async function () {

                      try {
                        let videoRes = await facebookService.postVideo(url, description, pageID[j].access_token);
                        console.log(videoRes);
                        if (videoRes.id) {
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
                                "state": "Posted"
                              }, (err, result) => {
                                if (err) throw err;
                                console.log(result);

                              });
                            }

                          })
                        } else {
                          console.log("Error Posting video", videoRes);
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Canceled",
                            "error": videoRes
                          }, ctx.options, (err, result) => {
                            if (err) throw err;
                            console.log(res);
                            error = videoRes;
                            console.log(error);
                            job.fail(new Error(error));
                            job.save();

                            app.models.Post.patchOrCreateWithWhere({
                              'id': postss.id
                            }, {
                              "error": error,
                              "state": videoRes
                            }, (err, result) => {
                              if (err) throw err;
                              console.log(result)
                            });
                          })
                        }
                      } catch (error) {
                        console.log("Error Posting video", error);
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
                        })
                      }
                    }
                    try {
                      singleVideo();
                    } catch (err) {
                      console.log(err);
                    }
                  }
                }
              } else if (postss.network == 'PI' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == 'Posting.....'  )) {
                console.log('Pinterest should not be a video')
              } else if(postss.network == 'IG' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == 'Posting.....'  )){
                console.log('IG post');
                let pageID = postss.socialMediaAccounts.linked.smPages;


                for (let j = 0; j < pageID.length; j++) {
                  if (pageID[j].id === postss.socialMediaInfo.id) {
                    // console.log("page access_token => " ,pageID[j].access_token);
                    // console.log(res.mediaFiles)

                    console.log(res.description);

                    console.log('media files length =>', res.mediaFiles.length);
                    console.log('Media type video  1 ')
                    console.log('Media type Video')
                    console.log(res.mediaFiles);
                    let video = postss.mediaFiles[0].name;
                    console.log(video);
                    let description = res.description;
                    // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/${video}`;
                    // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/1.png`;
                    let url = 'https://www.w3schools.com/html/mov_bbb.mp4';
                    let singleVideo = async function () {

                      try {
                        let videoRes = await IGService.postVideo(url, description, pageID[j].access_token);
                        console.log(videoRes);
                        if (videoRes.id) {
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
                                "state": "Posted"
                              }, (err, result) => {
                                if (err) throw err;
                                console.log(result);

                              });
                            }

                          })
                        } else {
                          console.log("Error Posting video", videoRes);
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Canceled",
                            "error": videoRes
                          }, ctx.options, (err, result) => {
                            if (err) throw err;
                            console.log(res);
                            error = videoRes;
                            console.log(error);
                            job.fail(new Error(error));
                            job.save();

                            app.models.Post.patchOrCreateWithWhere({
                              'id': postss.id
                            }, {
                              "error": error,
                              "state": videoRes
                            }, (err, result) => {
                              if (err) throw err;
                              console.log(result)
                            });
                          })
                        }
                      } catch (error) {
                        console.log("Error Posting video", error);
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
                        })
                      }
                    }
                    try {
                      singleVideo();
                    } catch (err) {
                      console.log(err);
                    }
                  }
                }
              } else if (postss.network == 'TW' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == 'Posting.....'  )) {
                console.log('TWITTER');

                let pageID = postss.socialMediaAccounts.profile;
                let session = postss.socialMediaAccounts.session;
                // console.log(pageID)
                for (let j = 0; j < pageID.length; j++) {
                  // console.log(postss);
                  if (pageID[j].id === postss.socialMediaInfo.id) {
                    console.log("page oauthAccessToken => ", session.oauthAccessToken);
                    console.log("page oauthAccessTokenSecret => ", session.oauthAccessTokenSecret);


                    let state = res.description;
                    let video = postss.mediaFiles[0].name;
                    console.log(state);

                    let twitReq = async function () {
                      try {
                        let vidTwit = await twitterService._twitterVideoPub(session.oauthAccessToken, session.oauthAccessTokenSecret, state, video);
                        console.log("video posted id ====>", vidTwit.media_id);
                        if (vidTwit.media_id) {
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
                                "state": "Posted"
                              }, (err, result) => {
                                if (err) throw err;
                                console.log(result);

                              });
                            }

                          })
                        } else {
                          console.log("Error Posting video post", vidTwit);
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Canceled",
                            "error": vidTwit
                          }, ctx.options, (err, result) => {
                            if (err) throw err;
                            console.log(res);
                            error = vidTwit;
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
                          if (err) {
                            console.log(err)
                          }
                          // console.log(res);
                          error = error.error;
                          // console.log(error);

                          app.models.Post.patchOrCreateWithWhere({
                            'id': postss.id
                          }, {
                            "error": error,
                            "state": "Canceled"
                          }, (err, result) => {
                            if (err) throw err;
                            // console.log(result)
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
          } else {
            console.log('Please select at least one page');
            ctx.Model.patchOrCreateWithWhere({
              'id': ctx.instance.id
            }, {
              "state": "Canceled",
              "error": "Please select at least one page"
            }, ctx.options, (err, result) => {
              if (err) throw err;
              console.log(res);
            });
            job.fail(new Error('Please select at least one page'));
            job.save();
          }
        });
      } else {
        console.log('res is null');
        ctx.Model.patchOrCreateWithWhere({
          'id': ctx.instance.id
        }, {
          "state": "Canceled",
          "error": "Campaign is Null"
        }, ctx.options, (err, result) => {
          if (err) throw err;
          console.log(res);
        });

        job.fail(new Error('res is null'));
        job.save();
      }
    });


  });

  agenda.on('ready', () => {
    agenda.start();
    agenda.schedule(convertedDate, 'SingleVideoJob-' + ctx.instance.id);
    //agenda.every('1 minutes', 'fbpost');


  });
  //   agenda.processEvery('1 minutes');

}

const singleVideoPost = {
  singleVideoPostJob: singleVideoPostJob
}
module.exports = singleVideoPost;
