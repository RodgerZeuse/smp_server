'use strict';
const Agenda = require('agenda');
const fs = require('fs');
var piexif = require("piexifjs");
var facebookService = require('../../../server/boot/facebookService');
var pinterestService = require('../../../server/boot/pinterestService');
var twitterService = require('../../../server/boot/twitterService');
var IGService = require('../../../server/boot/IGService');
var app = require('../../../server/server');
const VERSION = 'v3.0';

async function singleImagePostJob(Campaign, ctx, scheduledAt) {
  // console.log(ctx);
  // let localTime =  moment.tz.guess()
  // let newTime = moment(scheduledAt).tz(localTime).format('YYYY-MM-DD hh:mm A');
  // let convertedDate = new Date(newTime);
  var conString = "mongodb://yamin:yamin123@ds133086.mlab.com:33086/smp_jobs";
  var agenda = new Agenda({
    db: {
      address: conString,
      collection: 'jobs'
    }
  });

  agenda.define('SingleImageJob-' + ctx.instance.id, (job, done) => {

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
              console.log('social media account type======>', postss.socialMediaAccounts.status);

              // console.log(postss.socialMediaAccounts.pages.data);
              console.log(postss.network);
              if (postss.network == 'FB' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == "Posting....."  )) {
                let pageID = postss.socialMediaAccounts.linked.smPages;


                for (let j = 0; j < pageID.length; j++) {
                  if (pageID[j].id === postss.socialMediaInfo.id) {
                    // console.log("page access_token => " ,pageID[j].access_token);
                    // console.log(res.mediaFiles)

                    console.log(res.description);

                    console.log('media files length =>', postss.mediaFiles.length);
                    console.log('Media type images  1 ')



                    console.log('Media type images is one')
                    // console.log(res.mediaFiles);
                    let image = postss.mediaFiles[0].name;
                    console.log(image);
                    console.log('mediafiles tags length ', postss.mediaFiles[0])
                    var jpeg = '/Users/yamin/Documents/workspace/SocialMediaPoster../server/server/local-storage/pics/' + image;


                    // var jpeg = fs.readFileSync(jpeg);
                    // var data = jpeg.toString("binary");

                    // var zeroth = {};
                    // var exif = {};
                    // var gps = {};
                    // var gpsIfd = {};

                    // var lat = 59.43553989213321;
                    // var lng = 24.73842144012451;
                    // gpsIfd[piexif.GPSIFD.GPSLatitudeRef] = lat < 0 ? 'S' : 'N';
                    // gpsIfd[piexif.GPSIFD.GPSLatitude] = piexif.GPSHelper.degToDmsRational(lat);
                    // gpsIfd[piexif.GPSIFD.GPSLongitudeRef] = lng < 0 ? 'W' : 'E';
                    // gpsIfd[piexif.GPSIFD.GPSLongitude] = piexif.GPSHelper.degToDmsRational(lng)

                    // var exifObj = {"GPS":gpsIfd};
                    // var exifbytes = piexif.dump(exifObj);

                    // var newData = piexif.insert(exifbytes, data);
                    // var newJpeg = new Buffer(newData, "binary");
                    // fs.writeFileSync('/Users/yamin/Documents/workspace/SocialMediaPoster../server/server/local-storage/gpsImage/'+image, newJpeg);

                    let caption = res.description;
                    // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/${image}`;
                    // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/1.png`;
                    // let url = 'https://3172391a.ngrok.io/assets/facebook.png';
                    let url = 'https://www.w3schools.com/howto/img_forest.jpg';
                    let singleImage = async function () {
                      // let imageRes = await facebookService.postImage(url,caption, pageID[j].access_token);
                      let batch = [];

                      console.log('mediafiles tags length ', postss.mediaFiles[0].tags)
                      if (postss.mediaFiles[0].tags) {

                        batch.push({
                          "method": "POST",
                          "name": "img",
                          "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=true&&caption=" + caption + "",
                          "body": "url=https://www.w3schools.com/howto/img_forest.jpg"
                        });
                        // let tags = `{"tag_text":"${tag.tag_text}"},{"x":"${tag.x}"},{"y":"${tag.y}"}`;
                        // let tags = '{"tag_text":"Thinker"},{"x":"22.01"},{"y":"35.31"}';



                        let tagss = postss.mediaFiles[0].tags;
                        tagss.forEach((tag) => {

                          let x = Number(tag.x);
                          let y = Number(tag.y)
                          console.log(tag.tag_text, x, y);

                          // let tags = `{"tag_text":"${tag.tag_text}"},{"x":"${tag.x}"},{"y":"${tag.y}"}`;
                          let tags = '{"tag_text":"' + tag.tag_text + '"},{"x":"80.01"},{"y":"80.31"}';
                          batch.push({
                            "method": "POST",
                            "relative_url": "/" + VERSION + "/{result=img:$.id}/tags",
                            "body": "tags=[" + tags + "]"
                          });

                        });

                        batch = JSON.stringify(batch);


                        console.log(batch);
                      } else {

                        batch.push({
                          "method": "POST",
                          "name": "img",
                          "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=true&&caption=" + caption + "",
                          "body": "url=https://www.travelanddestinations.com/wp-content/uploads/2017/08/Toronto-Skyline-at-Sunset.jpg"
                        });
                        // batch.push({ "method": "POST", "name": "img", "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=true&&caption="+caption+"", "attached_files": "file" });

                        // let file = '\'file = '+jpeg+'\'';

                        // batch.push({ "method": "POST", "relative_url": "/" + VERSION + "/{result=img:$.id}/tags", "body": "tags=[" + tags + "]" });
                        // let imageRes = await facebookService.postImage(url,caption, pageID[j].access_token);
                        // batch.push(file)
                        batch = JSON.stringify(batch);


                        console.log(batch);
                      }



                      try {
                        let imageRes = await facebookService.batchRequestSingleImage(batch, pageID[j].access_token);
                        console.log('Post  =====>', imageRes)
                        console.log(imageRes.slice(-1)[0].code);
                        if (imageRes.slice(-1)[0].code == '200') {
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
                            // console.log(result)
                          });
                        } else {
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Canceled",
                            "error": imageRes
                          }, ctx.options, (err, result) => {
                            if (err) throw err;
                            // console.log(result)

                            let error = imageRes.slice(-1)[0].body;
                            console.log(error);

                            // console.log(app.models.Post)
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
                        console.log("Error Posting single image", error);
                        ctx.Model.patchOrCreateWithWhere({
                          'id': ctx.instance.id
                        }, {
                          "state": "Canceled",
                          "error": error
                        }, ctx.options, (err, result) => {
                          if (err) throw err;
                          // console.log(result)

                          error = error.error;
                          console.log(error);

                          // console.log(app.models.Post)
                          app.models.Post.patchOrCreateWithWhere({
                            'id': postss.id
                          }, {
                            "error": error
                          }, (err, result) => {
                            if (err) throw err;
                            console.log(result)
                          });
                        });
                      }
                    }
                    try {
                      singleImage();
                    } catch (err) {
                      console.log('======>', err);
                    }

                  }
                }
              } else if (postss.network == 'PI' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == 'Posting.....')) {
                console.log("pinterest")
                let pageID = postss.socialMediaAccounts.linked.boards;
                console.log('pinterst boards',postss.socialMediaAccounts.linked.boards)
                // console.log(pageID.boards);
                // console.log(pageID.boards.data.length);
                console.log(pageID)
                for (let k = 0; k < pageID.length; k++) {

                  let accessToken = postss.socialMediaAccounts.session.session.accessToken;
                  let boardId = pageID[k].id;
                  let note = res.description;
                  let link = '';
                  let image = postss.mediaFiles[0].name;

                  if (pageID[k].id === postss.socialMediaInfo.id) {
                    let pinResult = async function () {
                      let pin = await pinterestService.createPin(accessToken, boardId, note, link, image);
                      console.log('pinned ====>', pin);
                      if (pin.data.id) {
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
                          // console.log(result)
                        });
                      } else {
                        ctx.Model.patchOrCreateWithWhere({
                          'id': ctx.instance.id
                        }, {
                          "state": "Canceled",
                          "error": pin
                        }, ctx.options, (err, result) => {
                          if (err) throw err;
                          // console.log(result)

                          let error = pin;
                          console.log(error);

                          // console.log(app.models.Post)
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
                      pinResult();
                    } catch (err) {
                      console.log(err);
                    }





                  }
                }
              } else if (postss.network == 'TW' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == 'Posting.....')) {
                let pageID = postss.socialMediaAccounts.profile;
                let session = postss.socialMediaAccounts.session;
                console.log(pageID)
                for (let j = 0; j < pageID.length; j++) {
                  console.log(postss);
                  if (pageID[j].id === postss.socialMediaInfo.id) {
                    console.log("page oauthAccessToken => ", session.oauthAccessToken);
                    console.log("page oauthAccessTokenSecret => ", session.oauthAccessTokenSecret);


                    let state = res.description;
                    let image = postss.mediaFiles[0].name;
                    console.log(state);

                    let twitReq = async function () {
                      try {
                        let imgTwit = await twitterService.twiterImagePost(session.oauthAccessToken, session.oauthAccessTokenSecret, state, image);
                        console.log("image posted id ====>", imgTwit.media_id);
                        if (imgTwit.media_id) {
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
                            // console.log(res);
                          })
                        } else {
                          console.log("Error Posting text post", imgTwit);
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Canceled",
                            "error": imgTwit
                          }, ctx.options, (err, result) => {
                            if (err) throw err;
                            console.log(res);
                            error = imgTwit;
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
              }else if(postss.network == 'IG' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == 'Posting.....'  )){
                let pageID = postss.socialMediaAccounts.linked.smPages;


                for (let j = 0; j < pageID.length; j++) {
                  if (pageID[j].id === postss.socialMediaInfo.id) {
                    // console.log("page access_token => " ,pageID[j].access_token);
                    // console.log(res.mediaFiles)

                    console.log(res.description);

                    console.log('media files length =>', postss.mediaFiles.length);
                    console.log('Media type images  1 ')



                    console.log('Media type images is one')
                    // console.log(res.mediaFiles);
                    let image = postss.mediaFiles[0].name;
                    console.log(image);
                    console.log('mediafiles tags length ', postss.mediaFiles[0])
                    var jpeg = '/Users/yamin/Documents/workspace/SocialMediaPoster../server/server/local-storage/pics/' + image;


                    // var jpeg = fs.readFileSync(jpeg);
                    // var data = jpeg.toString("binary");

                    // var zeroth = {};
                    // var exif = {};
                    // var gps = {};
                    // var gpsIfd = {};

                    // var lat = 59.43553989213321;
                    // var lng = 24.73842144012451;
                    // gpsIfd[piexif.GPSIFD.GPSLatitudeRef] = lat < 0 ? 'S' : 'N';
                    // gpsIfd[piexif.GPSIFD.GPSLatitude] = piexif.GPSHelper.degToDmsRational(lat);
                    // gpsIfd[piexif.GPSIFD.GPSLongitudeRef] = lng < 0 ? 'W' : 'E';
                    // gpsIfd[piexif.GPSIFD.GPSLongitude] = piexif.GPSHelper.degToDmsRational(lng)

                    // var exifObj = {"GPS":gpsIfd};
                    // var exifbytes = piexif.dump(exifObj);

                    // var newData = piexif.insert(exifbytes, data);
                    // var newJpeg = new Buffer(newData, "binary");
                    // fs.writeFileSync('/Users/yamin/Documents/workspace/SocialMediaPoster../server/server/local-storage/gpsImage/'+image, newJpeg);

                    let caption = res.description;
                    // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/${image}`;
                    // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/1.png`;
                    // let url = 'https://3172391a.ngrok.io/assets/facebook.png';
                    let url = 'https://www.w3schools.com/howto/img_forest.jpg';
                    let singleImage = async function () {
                      // let imageRes = await facebookService.postImage(url,caption, pageID[j].access_token);
                      let batch = [];

                      console.log('mediafiles tags length ', postss.mediaFiles[0].tags)
                      if (postss.mediaFiles[0].tags) {

                        batch.push({
                          "method": "POST",
                          "name": "img",
                          "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=true&&caption=" + caption + "",
                          "body": "url=https://www.w3schools.com/howto/img_forest.jpg"
                        });
                        // let tags = `{"tag_text":"${tag.tag_text}"},{"x":"${tag.x}"},{"y":"${tag.y}"}`;
                        // let tags = '{"tag_text":"Thinker"},{"x":"22.01"},{"y":"35.31"}';



                        let tagss = postss.mediaFiles[0].tags;
                        tagss.forEach((tag) => {

                          let x = Number(tag.x);
                          let y = Number(tag.y)
                          console.log(tag.tag_text, x, y);

                          // let tags = `{"tag_text":"${tag.tag_text}"},{"x":"${tag.x}"},{"y":"${tag.y}"}`;
                          let tags = '{"tag_text":"' + tag.tag_text + '"},{"x":"80.01"},{"y":"80.31"}';
                          batch.push({
                            "method": "POST",
                            "relative_url": "/" + VERSION + "/{result=img:$.id}/tags",
                            "body": "tags=[" + tags + "]"
                          });

                        });

                        batch = JSON.stringify(batch);


                        console.log(batch);
                      } else {

                        batch.push({
                          "method": "POST",
                          "name": "img",
                          "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=true&&caption=" + caption + "",
                          "body": "url=https://www.w3schools.com/howto/img_forest.jpg"
                        });
                        // batch.push({ "method": "POST", "name": "img", "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=true&&caption="+caption+"", "attached_files": "file" });

                        // let file = '\'file = '+jpeg+'\'';

                        // batch.push({ "method": "POST", "relative_url": "/" + VERSION + "/{result=img:$.id}/tags", "body": "tags=[" + tags + "]" });
                        // let imageRes = await facebookService.postImage(url,caption, pageID[j].access_token);
                        // batch.push(file)
                        batch = JSON.stringify(batch);


                        console.log(batch);
                      }



                      try {
                        let imageRes = await IGService.batchRequestSingleImage(batch, pageID[j].access_token);
                        console.log('Post  =====>', imageRes)
                        console.log(imageRes.slice(-1)[0].code);
                        if (imageRes.slice(-1)[0].code == '200') {
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
                            // console.log(result)
                          });
                        } else {
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Canceled",
                            "error": imageRes
                          }, ctx.options, (err, result) => {
                            if (err) throw err;
                            // console.log(result)

                            let error = imageRes.slice(-1)[0].body;
                            console.log(error);

                            // console.log(app.models.Post)
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
                        console.log("Error Posting single image", error);
                        ctx.Model.patchOrCreateWithWhere({
                          'id': ctx.instance.id
                        }, {
                          "state": "Canceled",
                          "error": error
                        }, ctx.options, (err, result) => {
                          if (err) throw err;
                          // console.log(result)

                          error = error.error;
                          console.log(error);

                          // console.log(app.models.Post)
                          app.models.Post.patchOrCreateWithWhere({
                            'id': postss.id
                          }, {
                            "error": error
                          }, (err, result) => {
                            if (err) throw err;
                            console.log(result)
                          });
                        });
                      }
                    }
                    try {
                      singleImage();
                    } catch (err) {
                      console.log('======>', err);
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
          "error": "Campaign is null"
        }, ctx.options, (err, result) => {
          if (err) throw err;
          console.log(res);
        });
        job.fail(new Error('res is nul'));
        job.save();
      }
    });


  });

  agenda.on('ready', () => {
    agenda.start();
    agenda.schedule(scheduledAt, 'SingleImageJob-' + ctx.instance.id);
    //agenda.every('1 minutes', 'fbpost');


  });
  //   agenda.processEvery('1 minutes');

}



const singleImagePost = {
  singleImagePostJob: singleImagePostJob
}
module.exports = singleImagePost;
