'use strict';
const Agenda = require('agenda');


var app = require('../../../server/server');

var facebookService = require('../../../server/boot/facebookService');
var pinterestService = require('../../../server/boot/pinterestService');
var IGService = require('../../../server/boot/IGService');
var twitterService = require('../../../server/boot/twitterService');
const VERSION = 'v3.0';

async function multipImagePostJob(Campaign, ctx, scheduledAt) {
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

  agenda.define('MultipleImageJob-' + ctx.instance.id, (job, done) => {

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
              console.log('social media account type======>', postss.socialMediaAccounts.type)

              // console.log(postss.socialMediaAccounts.pages.data);

              if (postss.network == 'FB' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == "Posting....."  )) {
                let pageID = postss.socialMediaAccounts.linked.smPages;

                for (let j = 0; j < pageID.length; j++) {
                  if (pageID[j].id === postss.socialMediaInfo.id) {
                    // console.log("page access_token => " ,pageID[j].access_token);
                    // console.log(res.mediaFiles)

                    console.log(res.description);

                    console.log('media files length =>', res.mediaFiles.length);

                    console.log('Media type images greater than 1 ')
                    let batch = [];
                    let mediaFilesArray = [];




                    for (let l = 0; l < res.mediaFiles.length; l++) {
                      let file;
                      let mediaFilesArray = [];
                      
                      if(postss.mediaFiles[l].type === 'image/jpeg'){
                      let mediaFile = postss.mediaFiles[l].name
                      
                      let tags = '{"tag_text":"Thinker"},{"x":"22.01"},{"y":"35.31"}';
                      file = 'file' + l;
                      // let files = {"method":"POST","relative_url":"me/photos?published=false&&temporary=true","body":"url=http://192.168.1.127:3003/api/Containers/pics/download/"+res.mediaFiles[l].name}
                      // let files = {"method":"POST","relative_url":"me/photos?published=false&&temporary=true","body":"url=http://9123d5d8.ngrok.io/api/Containers/pics/download/"+res.mediaFiles[l].name}

                      
                      let files = {
                        "method": "POST",
                        "name": "img" + l,
                        "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=false&&temporary=true",
                        "body": "url=https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                      }
                      
                      // let files = { "method": "POST", "name": "img" + l, "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=false&&temporary=true", "body": "url=https://bc1b766e.ngrok.io/api/Containers/pics/download/"+res.mediaFiles[l].name }
                      // let files = { "method": "POST", "name": "img" + l, "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=false&&temporary=true", "body": "url=https://bc1b766e.ngrok.io/api/Containers/pics/download/0bd5e6a1-af89-41d4-abb6-ee5aaea760e8.png" }
                      batch.push(files);
                       batch.push({
                        "method": "POST",
                        "relative_url": "/" + VERSION + "/{result=img" + l + ":$.id}/tags",
                        "body": "tags=[" + tags + "]"
                      });
                      let media_files = `{media_fbid:{result=img${l}:$.id}}`;
                      mediaFilesArray.push(media_files);
                      // let caption = res.description;
                      mediaFilesArray = mediaFilesArray.toString();
                      console.log(mediaFilesArray);
                      let caption = res.description;
                      batch.push({
                        "method": "POST",
                        "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/feed?published=true&&message=" + caption + "",
                        "body": "attached_media=[" + mediaFilesArray + "]"
                      });
                      // batch.push({"method":"POST","relative_url":"me/feed/?attached_media=[{media_fbid:{result=img0:$.data.*.id}},{media_fbid:{result=img1:$.data.*.id}}]"})
                      
                    }else if(postss.mediaFiles[l].type === 'video/mp4'){
                      let mediaFile = postss.mediaFiles[l].name
                      let caption = res.description;
                      let files = {
                        "method": "POST",
                        "name": "video" + l,
                        "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/videos?description"+caption,
                        "body": "file_url=https://www.w3schools.com/html/mov_bbb.mp4",
                        
                      }
                      
                      // let files = { "method": "POST", "name": "img" + l, "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=false&&temporary=true", "body": "url=https://bc1b766e.ngrok.io/api/Containers/pics/download/"+res.mediaFiles[l].name }
                      // let files = { "method": "POST", "name": "img" + l, "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=false&&temporary=true", "body": "url=https://bc1b766e.ngrok.io/api/Containers/pics/download/0bd5e6a1-af89-41d4-abb6-ee5aaea760e8.png" }
                      batch.push(files);
                    }
                  }


                    
                    // let caption = res.description;
                    // mediaFilesArray = mediaFilesArray.toString();
                    // console.log(mediaFilesArray);
                    // // batch.push({"method":"POST","relative_url":"me/feed/?attached_media=[{media_fbid:{result=img0:$.data.*.id}},{media_fbid:{result=img1:$.data.*.id}}]"})
                    // batch.push({
                    //   "method": "POST",
                    //   "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/feed?published=true&&message=" + caption + "",
                    //   "body": "attached_media=[" + mediaFilesArray + "]"
                    // });

                  
                 

                    batch = JSON.stringify(batch);
                    console.log(batch);
                    let batchreq = async function () {
                      console.log('batchreqfun');
                      try {
                        let req = await facebookService.batchRequestMultiImage(batch, pageID[j].access_token);
                        console.log(req);

                        console.log(req.slice(-1)[0].code);
                        if (req.slice(-1)[0].code == '200') {
                          // console.log(Campaign)
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


                          });

                        } else {
                          console.log("Error Posting multiple image", req);
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Canceled",
                            "error": req
                          }, ctx.options, (err, result) => {
                            if (err) throw err;
                            console.log(res);
                            let error = req;
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
                              console.log(result);
                            });

                          })

                        }
                      } catch (error) {
                        console.log("Error Posting multiple image", error);

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
                            console.log(result);
                          });
                        });
                      }
                    }
                    try {
                      batchreq();
                    } catch (err) {
                      console.log(err);
                    }


                    //         //      let imgArray =  async function(){
                    //         //         let imgsIdsArray = [];
                    //         //          for(let l=0; l<res.mediaFiles.length; l++){

                    //         //             if(res.mediaFiles[l].type == 'image/png' || res.mediaFiles[l].type == 'image/jpg' || res.mediaFiles[l].type == 'image/jpeg' ){
                    //         //             // console.log(res.mediaFiles);
                    //         //             let image = res.mediaFiles[l].name;
                    //         //             console.log(image);
                    //         //             let caption = res.description;
                    //         //             // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/${image}`;
                    //         //             // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/1.png`;
                    //         //             // let url = 'https://3172391a.ngrok.io/assets/facebook.png';
                    //         //             let url = 'https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg';

                    //         //             let imagesId = await facebookService.postUnpublishedImage(url, pageID[j].access_token);
                    //         //             //  console.log('images id',imagesId.id);
                    //         //             let media_file = {"media_fbid":imagesId.id}
                    //         //             // console.log("async fun res",media_file);
                    //         //             imgsIdsArray.push(media_file);
                    //         //             console.log(imgsIdsArray);

                    //         //          }
                    //         //         } 
                    //         //         return Promise.resolve(imgsIdsArray);
                    //         //     }

                    //         //     let test = async function(){
                    //         //         let mediaFilesID = await imgArray();
                    //         //         console.log('test call',mediaFilesID);
                    //         //         if(mediaFilesID.length == res.mediaFiles.length){
                    //         //             facebookService.postMultipleImages(mediaFilesID, pageID[j].access_token)
                    //         //         }
                    //         //     }
                    //         //    test();


                    //     } else {
                    //         for (let k = 0; k < res.mediaFiles.length; k++) {
                    //             if (res.mediaFiles[k].type == 'image/png' || res.mediaFiles[k].type == 'image/jpg' || res.mediaFiles[k].type == 'image/jpeg') {
                    //                 console.log('Media type images is one')
                    //                 // console.log(res.mediaFiles);
                    //                 let image = res.mediaFiles[k].name;
                    //                 console.log(image);
                    //                 let caption = res.description;
                    //                 // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/${image}`;
                    //                 // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/1.png`;
                    //                 // let url = 'https://3172391a.ngrok.io/assets/facebook.png';
                    //                 let url = 'https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg';
                    //                 let singleImage = async function () {
                    //                     // let imageRes = await facebookService.postImage(url,caption, pageID[j].access_token);
                    //                     let batch = [];
                    //                     let tags = '{"tag_text":"Thinker"},{"x":"22.01"},{"y":"35.31"}';

                    //                     batch.push({ "method": "POST", "name": "img", "relative_url": "/" + VERSION + "/" + postss.socialMediaInfoId + "/photos?published=true", "body": "url=https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg" });
                    //                     batch.push({ "method": "POST", "relative_url": "/" + VERSION + "/{result=img:$.id}/tags", "body": "tags=[" + tags + "]" });
                    //                     // let imageRes = await facebookService.postImage(url,caption, pageID[j].access_token);
                    //                     batch = JSON.stringify(batch);
                    //                     console.log(batch);
                    //                     let imageRes = await facebookService.batchRequestSingleImage(batch, pageID[j].access_token);
                    //                     console.log(imageRes.slice(-1)[0].code);
                    //                     if (imageRes.slice(-1)[0].code == '200') {
                    //                         ctx.Model.patchOrCreateWithWhere({ 'id': ctx.instance.id }, { "state": "Posted" }, (err, result) => {
                    //                             if (err) throw err;
                    //                             // console.log(res)
                    //                         })
                    //                     } else {
                    //                         console.log("Error Posting single image")
                    //                     }
                    //                 }
                    //                 try {
                    //                     singleImage();
                    //                 } catch (err) {
                    //                     console.log(err);
                    //                 }

                    //             } else {
                    //                 if (res.mediaFiles[k].type == 'video/mp4' || res.mediaFiles[k].type == 'video/3gp' || res.mediaFiles[k].type == 'video/3gpp') {
                    //                     console.log('Media type Video')
                    //                     console.log(res.mediaFiles);
                    //                     let video = res.mediaFiles[k].name;
                    //                     console.log(video);
                    //                     let description = res.description;
                    //                     // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/${video}`;
                    //                     // let url =  `https://0c458475.ngrok.io/api/Containers/pics/download/1.png`;
                    //                     let url = 'https://www.w3schools.com/html/mov_bbb.mp4';
                    //                     let singleVideo = async function () {

                    //                         let videoRes = facebookService.postVideo(url, description, pageID[j].access_token)
                    //                         if (videoRes.post_id) {
                    //                             ctx.Model.patchOrCreateWithWhere({ 'id': ctx.instance.id }, { "state": "Posted" }, (err, result) => {
                    //                                 if (err) throw err;
                    //                                 console.log(res)
                    //                             })
                    //                         } else {
                    //                             console.log("Error Posting multiple video")
                    //                         }
                    //                     }
                    //                     try {
                    //                         singleVideo();
                    //                     } catch (err) {
                    //                         console.log(err);
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     }


                    // }


                  }
                }
              } else if (postss.network == 'PI' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == "Posting....."  )) {
                let pageID = postss.socialMediaAccounts.linked.boards;
                // console.log(pageID.boards);
                // console.log(pageID.boards.data.length);
                console.log("pages id", pageID)

                for (let k = 0; k < pageID.length; k++) {

                  let accessToken = postss.socialMediaAccounts.session.session.accessToken;
                  let boardId = pageID[k].id;
                  let note = res.description;
                  let link = '';
                  // let image = postss.mediaFiles[k].name;

                  if (pageID[k].id === postss.socialMediaInfo.id) {

                    // let pinResult = async function () {
                    //   let pin = await pinterestService.createPin(accessToken, boardId, note, link, image);
                    //   console.log(pin);
                    //   if (pin.data.id) {
                    //     ctx.Model.patchOrCreateWithWhere({
                    //       'id': ctx.instance.id
                    //     }, {
                    //       "state": "Posted"
                    //     }, ctx.options, (err, result) => {
                    //       if (err) {
                    //         console.log(err)
                    //       } else {
                    //         app.models.Post.patchOrCreateWithWhere({
                    //           'id': postss.id
                    //         }, {
                    //           "state": "Posted"
                    //         }, (err, result) => {
                    //           if (err) throw err;
                    //           console.log(result);

                    //         });
                    //       }

                    //     });
                    //   } else {
                    //     ctx.Model.patchOrCreateWithWhere({
                    //       'id': ctx.instance.id
                    //     }, {
                    //       "state": "Canceled",
                    //       "error": pin
                    //     }, ctx.options, (err, result) => {
                    //       if (err) throw err;
                    //       // console.log(result)

                    //       let error = pin;
                    //       console.log(error);
                    //       job.fail(new Error(error));
                    //       job.save();

                    //       // console.log(app.models.Post)
                    //       app.models.Post.patchOrCreateWithWhere({
                    //         'id': postss.id
                    //       }, {
                    //         "error": error,
                    //         "state": "Canceled"
                    //       }, (err, result) => {
                    //         if (err) throw err;
                    //         console.log(result)
                    //       });
                    //     });
                    //   }


                    // }
                    // try {
                    //   pinResult();
                    // } catch (err) {
                    //   console.log(err);
                    // }


                    for (let j = 0; j < postss.mediaFiles.length; j++) {
                      let image = postss.mediaFiles[j].name;


                      let pinResult = async function () {
                        let pin = await pinterestService.createPin(accessToken, boardId, note, link, image);
                        console.log(pin);
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
                            job.fail(new Error(error));
                            job.save();

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
                }
              } else if (postss.network == 'TW' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == "Posting....."  )) {
                let pageID = postss.socialMediaAccounts.profile;
                let session = postss.socialMediaAccounts.session;
                console.log(pageID)
                for (let j = 0; j < pageID.length; j++) {
                  console.log(postss);
                  if (pageID[j].id === postss.socialMediaInfo.id) {
                    for(let k = 0; k<postss.mediaFiles.length; k++){

                      console.log("page oauthAccessToken => ", session.oauthAccessToken);
                      console.log("page oauthAccessTokenSecret => ", session.oauthAccessTokenSecret);
  
  
                      let state = res.description;
                      let image = postss.mediaFiles[k].name;
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
                }
              } else if (postss.network == 'IG' && postss.socialMediaAccounts.status == 'connected' && (postss.state == "Scheduled" || postss.state == "Post Now" || postss.state == "Posting....."  )) {
                let pageID = postss.socialMediaAccounts.smPages;

                for (let j = 0; j < pageID.length; j++) {
                  if (pageID[j].id === postss.socialMediaInfo.id) {
                    // console.log("page access_token => " ,pageID[j].access_token);
                    // console.log(res.mediaFiles)

                    console.log(res.description);

                    console.log('media files length =>', res.mediaFiles.length);

                    console.log('Media type images greater than 1 ')
                    let batch = [];
                    let mediaFilesArray = [];




                    for (let l = 0; l < res.mediaFiles.length; l++) {
                      let mediaFile = postss.mediaFiles[l].name

                      let file;
                      let tags = '{"tag_text":"Thinker"},{"x":"22.01"},{"y":"35.31"}';
                      file = 'file' + l;
                      // let files = {"method":"POST","relative_url":"me/photos?published=false&&temporary=true","body":"url=http://192.168.1.127:3003/api/Containers/pics/download/"+res.mediaFiles[l].name}
                      // let files = {"method":"POST","relative_url":"me/photos?published=false&&temporary=true","body":"url=http://9123d5d8.ngrok.io/api/Containers/pics/download/"+res.mediaFiles[l].name}
                      let files = {
                        "method": "POST",
                        "name": "img" + l,
                        "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=false&&temporary=true",
                        "body": "url=https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                      }
                      // let files = { "method": "POST", "name": "img" + l, "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=false&&temporary=true", "body": "url=https://bc1b766e.ngrok.io/api/Containers/pics/download/"+res.mediaFiles[l].name }
                      // let files = { "method": "POST", "name": "img" + l, "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/photos?published=false&&temporary=true", "body": "url=https://bc1b766e.ngrok.io/api/Containers/pics/download/0bd5e6a1-af89-41d4-abb6-ee5aaea760e8.png" }
                      batch.push(files);
                      batch.push({
                        "method": "POST",
                        "relative_url": "/" + VERSION + "/{result=img" + l + ":$.id}/tags",
                        "body": "tags=[" + tags + "]"
                      });
                      let media_files = `{media_fbid:{result=img${l}:$.id}}`;
                      mediaFilesArray.push(media_files);

                    }
                    let caption = res.description;
                    mediaFilesArray = mediaFilesArray.toString();
                    console.log(mediaFilesArray);
                    // batch.push({"method":"POST","relative_url":"me/feed/?attached_media=[{media_fbid:{result=img0:$.data.*.id}},{media_fbid:{result=img1:$.data.*.id}}]"})
                    batch.push({
                      "method": "POST",
                      "relative_url": "/" + VERSION + "/" + postss.socialMediaInfo.id + "/feed?published=true&&message=" + caption + "",
                      "body": "attached_media=[" + mediaFilesArray + "]"
                    })


                    batch = JSON.stringify(batch);
                    console.log(batch);
                    let batchreq = async function () {
                      console.log('batchreqfun');
                      try {
                        let req = await IGService.batchRequestMultiImage(batch, pageID[j].access_token);
                        console.log(req);

                        console.log(req.slice(-1)[0].code);
                        if (req.slice(-1)[0].code == '200') {
                          // console.log(Campaign)
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


                          });

                        } else {
                          console.log("Error Posting multiple image", req);
                          ctx.Model.patchOrCreateWithWhere({
                            'id': ctx.instance.id
                          }, {
                            "state": "Canceled",
                            "error": req
                          }, ctx.options, (err, result) => {
                            if (err) throw err;
                            console.log(res);
                            let error = req;
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
                              console.log(result);
                            });

                          })

                        }
                      } catch (error) {
                        console.log("Error Posting multiple image", error);

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
                            console.log(result);
                          });
                        });
                      }
                    }
                    try {
                      batchreq();
                    } catch (err) {
                      console.log(err);
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
          "error": "campaign is empty"
        }, ctx.options, (err, result) => {
          if (err) throw err;
          console.log(res);
          error = 'campaign is empty';
          console.log(error);
        });
        job.fail(new Error('res is null'));
        job.save();
      }
    });


  });

  agenda.on('ready', () => {
    agenda.start();
    agenda.schedule(convertedDate, 'MultipleImageJob-' + ctx.instance.id);
    //agenda.every('1 minutes', 'fbpost');


  });
  //   agenda.processEvery('1 minutes');

}

const multiImagePost = {
  multipImagePostJob: multipImagePostJob
}
module.exports = multiImagePost;
