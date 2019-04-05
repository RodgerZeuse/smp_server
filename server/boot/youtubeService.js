'use strict'

var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var googleAuth = require('google-auth-library');

const Youtube = require("youtube-api")
    , readJson = require("r-json")
    , Lien = require("lien")
    , Logger = require("bug-killer")
    , opn = require("opn")
    , prettyBytes = require("pretty-bytes");
 const request = require('request-promise');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function getChannels(accountId, session) {
  // var self = this;
  // If modifying these scopes, delete your previously saved credentials
  // at ~/.credentials/youtube-nodejs-quickstart.json
  var SCOPES = ['https://www.googleapis.com/auth/youtube'];

  try {
    let content = await readFile(__dirname + '/client_secret.json');
    let oauth2Client = await authorizeUser(JSON.parse(content), session);
    let channels = await getChannel(oauth2Client);
    let videoList = await getVideoList(oauth2Client);
    let playList = await playlistsListByChannelId(oauth2Client, {
      channelId: channels[0].id,
      part: 'snippet,contentDetails',
    });

    let videosList = await searchListMine(oauth2Client, {
      maxResults: '25',
      forMine: 'true',
      part: 'snippet',
      type: 'video'
    });
    console.log('Channels received <= ', channels)
    console.log('Chacnnels received <= ', channels[0].id);
    console.log('Video List received =======> ', videoList);
    console.log("Play List received <= ", playList);
    console.log("Videos received <= ", videosList.items);

    let youtubeMedia = {
      "channels": channels,
      "videos": videoList,
      "playlist": playList,
      "videosList": videosList
    }
    return Promise.resolve(youtubeMedia);
  } catch (error) {
    console.log('Error calling getChannels ', error);
    return Promise.reject(error);
  }

}
async function authorizeUser(credentials, session) {
  var clientSecret = credentials.web.client_secret;
  var clientId = credentials.web.client_id;
  var redirectUrl = credentials.web.redirect_uris[0];
  var oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

  oauth2Client.credentials = session;
  return Promise.resolve(oauth2Client);
  // callback(oauth2Client);


}

async function getChannel(auth) {
  return new Promise((resolve, reject) => {

    var service = google.youtube('v3');
    service.channels.list({
      auth: auth,
      part: 'snippet,contentDetails,statistics,contentOwnerDetails',
      mine: true
    }, (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return reject(err);
      }
      var channels = response.items;
      //console.log('Chacnnels list => ', response);
      if (channels.length == 0) {
        console.log('No channel found.');
        return resolve(null);
      } else {
        return resolve(channels);
      }
    });
  });
}

async function getVideoList(auth) {
  return new Promise((resolve, reject) => {
    var service = google.youtube('v3');
    console.log("=============");
    console.log(service);
    console.log(service.google.adsense);
    console.log("=============");
    service.videos.list({
      id: "y_SCNhznMWs",
      part: 'snippet,contentDetails,statistics',
      auth: auth
    }, (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return reject(err);
      }
      var videosList = response;
      //console.log('Chacnnels list => ', videosList);
      if (videosList.length == 0) {
        console.log('No channel found.');
        return resolve(null);
      } else {
        return resolve(videosList);
      }
    });
  });
}
async function playlistsListByChannelId(auth, reqData) {
  return new Promise((resolve, reject) => {
    var service = google.youtube('v3');
    //console.log(service);
    reqData["auth"] = auth;
    console.log(reqData);
    service.playlists.list(reqData, (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return reject(err);
      }
      var playlist = response;
      //console.log('Chacnnels list => ', playlist);
      if (playlist.length == 0) {
        console.log('No channel found.');
        return resolve(null);
      } else {
        return resolve(playlist);
      }
    });
  });
}


async function searchListMine(auth, reqData) {
  return new Promise((resolve, reject) => {
    var service = google.youtube('v3');
    //console.log(service);
    reqData["auth"] = auth;
    console.log(reqData);
    service.search.list(reqData, (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return reject(err);
      }
      var searchList = response;
      //console.log('Chacnnels list => ', searchList);
      if (searchList.length == 0) {
        console.log('No channel found.');
        return resolve(null);
      } else {
        return resolve(searchList);
      }
    });
  });
}

async function postVideo(){ 
  // var htmlBody = {
  //   title:"youtube "
  // }
  var options = {
    method: 'POST',
    uri: 'https://www.googleapis.com/upload/youtube/v3/videos?part=snippet&access_token=ya29.GltuBn7d6xQaKm1SzA66Et4duqKB6qRYurYVTgXAiDo9wq2dvuib203Es_XFvyy7qG7UY1yMs_RNi9C0oA-a8UffyQVMUPmJLRngC-eJkwPpYYifuUEr6W90zw0G',
    body:{
      title:"youtube test video",
      description:"youtube test video des",
      media:"http://techslides.com/demos/sample-videos/small.mp4"
    }

  }
  console.log("youtube video options",options)
  let ytVideoRes = await (options)
  console.log("youtube postvideo res",ytVideoRes)
  // https://www.googleapis.com/upload/youtube/v3/videos?part=snippet&access_token=YOUR_TOKEN_HERE
  // Youtube.setCredentials("ya29.GltuBn7d6xQaKm1SzA66Et4duqKB6qRYurYVTgXAiDo9wq2dvuib203Es_XFvyy7qG7UY1yMs_RNi9C0oA-a8UffyQVMUPmJLRngC-eJkwPpYYifuUEr6W90zw0G");   
        // var req = Youtube.videos.insert({
        //     resource: {
        //         // Video title and description
        //         snippet: {
        //             title: "Testing YoutTube API NodeJS module"
        //           , description: "Test video upload via YouTube API"
        //         }
        //         // I don't want to spam my subscribers
        //       , status: {
        //             privacyStatus: "private"
        //         }
        //     }
        //     // This is for the callback function
        //   , part: "snippet,status"
  
        //     // Create the readable stream to upload the video
        //   , media: {
        //         body: fs.createReadStream("http://techslides.com/demos/sample-videos/small.mp4")
        //     }
        // }, (err, data) => {
        //     console.log("Done.");
        //     console.log("err in yt video post.",err);
        //     console.log("yt video post successfully", data);
        //     process.exit();
        // });
  
        // setInterval(function () {
        //     Logger.log(`${prettyBytes(req.req.connection._bytesDispatched)} bytes uploaded.`);
        // }, 250);
}

const youTubeServices = {
  getChannels: getChannels,
  authorize: authorizeUser,
  getChannel: getChannel,
  getVideoList: getVideoList,
  postVideo: postVideo
}

module.exports = youTubeServices;