'use strict'
const fs = require('fs');
// const request = require('request');
const request = require('request-promise');
const FormData = require('form-data');
const Twitter = require('twitter');
const path = require('path'); 
const Twit = require('Twit');



async function twiterStatusPost(access_token_key, access_token_secret,status){


var client = new Twitter({
    consumer_key: 'Ynkolpu7qdFEDfxOrKDeqpKoB',
    consumer_secret: 'sNJiA97pjY7lOZ6eixbBJNr1XdFrFbKyzEIsntjIarFi5kUNwn',
    // access_token_key: '1044822426201325568-nDxkmoLfLSwO3t88EdgZG0j7WCIwtR',
    // access_token_secret: 'hh8UaHpP6ChbNZxwS7Ds0hwt03bnuEiIrlhHI7sWaybLq'
    access_token_key:access_token_key,
    access_token_secret:access_token_secret,
  });

  try{
    let twit = await client.post('statuses/update', {status: status});

    return Promise.resolve(twit);
  }catch(err){
    return Promise.reject(err);
  }

    // client.post('statuses/update', {status: status},  function(error, tweet, response) {
    //   if(error){
    //     return error;
    //   }else{

    //     // console.log(tweet);  // Tweet body.
    //     // console.log(response);  // Raw response object.
    //     return response;
    //   }
    // });

}


async function twiterImagePost(access_token_key, access_token_secret,status,img){
     
    var client = new Twitter({
        consumer_key: 'Ynkolpu7qdFEDfxOrKDeqpKoB',
        consumer_secret: 'sNJiA97pjY7lOZ6eixbBJNr1XdFrFbKyzEIsntjIarFi5kUNwn',
        // access_token_key: '1044822426201325568-nDxkmoLfLSwO3t88EdgZG0j7WCIwtR',
        // access_token_secret: 'hh8UaHpP6ChbNZxwS7Ds0hwt03bnuEiIrlhHI7sWaybLq'
        access_token_key:access_token_key,
        access_token_secret:access_token_secret,
      });
    try{
      let twit = await client.post('https://upload.twitter.com/1.1/media/upload.json', {media:[fs.createReadStream('/Users/fistixdev/workspace/SocialMediaPoster/server/server/local-storage/pics/'+img)]})
      let  media_id = twit.media_id_string;
      
      if(twit.media_id){
        console.log(media_id);
        try{
          let twitt = await client.post('statuses/update',{status:status,media_ids:media_id});
          console.log(twitt)
          // return Promise.resolve(twitt);
        }catch(err1){
          console.log(err1)
          // return Promise.reject(err1);
        }
        
      }
      return Promise.resolve(twit);

    }catch(err2){
      return Promise.reject(err2);
    }
    //   client.post('https://upload.twitter.com/1.1/media/upload.json', {media:[fs.createReadStream('/Users/fistixdev/Documents/workspace/SocialMediaPoster../server/server/local-storage/pics/'+img)]},  function(error, tweet, response) {
    //     console.log(error);
    //     if(error) throw error;
    //     console.log(tweet);  // Tweet body.
    //     console.log(tweet.media_id);  // Tweet body.
    //     console.log(response.headers);  // Raw response object.
    //     if(tweet.media_id){
    //        let  media_id = tweet.media_id_string;
    //        console.log(typeof media_id);

    //     // try{
    //     //   let picTwit =  client.post('statuses/update',{status:status,media_ids:media_id});
    //     //   return Promise.resolve(picTwit);
    //     // }catch(err){
    //     //   return Promise.reject(err);
    //     // }
    //     client.post('statuses/update',{status:status,media_ids:media_id},function(error, tweet, response){
    //         console.log(error);
    //         if(error) throw error;
    //         console.log(tweet);  // Tweet body.
    //         console.log(response.headers);  // Raw response object.
    //     });


    // }
    //   });
    }


    async function twiterVideoPost(){
     
      var client = new Twitter({
          consumer_key: 'Ynkolpu7qdFEDfxOrKDeqpKoB',
          consumer_secret: 'sNJiA97pjY7lOZ6eixbBJNr1XdFrFbKyzEIsntjIarFi5kUNwn',
          access_token_key: '1044822426201325568-nDxkmoLfLSwO3t88EdgZG0j7WCIwtR',
          access_token_secret: 'hh8UaHpP6ChbNZxwS7Ds0hwt03bnuEiIrlhHI7sWaybLq'
        });

        client.post('https://upload.twitter.com/1.1/media/upload.json', {command:'INIT',total_bytes:'791000',media_type:'video/mp4'},  function(error, tweet, response) {
          console.log(error);
          if(error) throw error;
          console.log("1")
          console.log(tweet);  // Tweet body.
          console.log(tweet.media_id);  // Tweet body.
          console.log(response.headers);  // Raw response object.
          if(tweet.media_id){
             let  media_id = tweet.media_id_string;
             console.log(typeof media_id)
          client.post('https://upload.twitter.com/1.1/media/upload.json',{command:'APPEND',media_id:media_id,media:'/Users/fistixdev/workspace/SocialMediaPoster/server/server/local-storage/pics',segment_index:2},function(error, tweet, response){
              console.log(error);
              if(error) throw error;
              console.log("2")
              console.log(tweet);  // Tweet body.
              console.log(response.headers);  // Raw response object.
              client.post('https://upload.twitter.com/1.1/media/upload.json',{command:'FINALIZE', media_id:media_id},function(error, tweet, response){
                console.log(error);
              if(error) throw error;
              console.log("3")
              console.log(tweet);  // Tweet body.
              console.log(response.headers);  // Raw response object.
              })
          });
      }
        });
      }

   

    // async function _twitterVideoPub(access_token,access_token_secret, status,video) {

    //     const T = new Twit({
    //       consumer_key: 'Ynkolpu7qdFEDfxOrKDeqpKoB',
    //       consumer_secret: 'sNJiA97pjY7lOZ6eixbBJNr1XdFrFbKyzEIsntjIarFi5kUNwn',
    //       access_token: access_token,
    //       access_token_secret: access_token_secret
    //     });
      
    //     const PATH = path.join( `/Users/yamin/Documents/workspace/SocialMediaPoster../server/server/local-storage/pics/${video}`);
   
    //     await T.postMediaChunked({ file_path: PATH }, function (err, data, response) {
      
    //       const mediaIdStr = data.media_id_string;
    //       const meta_params = { media_id: mediaIdStr };
      
    //        T.post('media/metadata/create', meta_params, function (err, data, response) {
      
    //         if (!err) { 
    //           const params = { status: status, media_ids: [mediaIdStr] };
      
    //            T.post('statuses/update', params, function (err, tweet, response) {
      
    //             console.log('tweet ===>',tweet);
    //             const base = 'https://twitter.com/';
    //             const handle = 'YaminYaisn3';
    //             const tweet_id = tweet.id_str;
                
    //             // return Promise.resolve({
    //             //   // live_link: `${base}${handle}/status/${tweet_id}`
    //             //   response
    //             // });
    //             return Promise.resolve(tweet)
      
    //           }); // end '/statuses/update'
      
    //         }else{
    //           // return Promise.reject(err)
    //         }
      
    //       }); // end '/media/metadata/create'
    //     }); // end T.postMedisChunked
    

    //   }

 async function _twitterVideoPub(access_token,access_token_secret, status,video) {

  return new Promise(function(resolve, reject){
    const T = new Twit({
      consumer_key: 'Ynkolpu7qdFEDfxOrKDeqpKoB',
      consumer_secret: 'sNJiA97pjY7lOZ6eixbBJNr1XdFrFbKyzEIsntjIarFi5kUNwn',
      access_token: access_token,
      access_token_secret: access_token_secret
    });
    const PATH = path.join( `/Users/fistixdev/workspace/SocialMediaPoster/server/server/local-storage/pics/${video}`);
    
    T.postMediaChunked({ file_path: PATH },function(err, data,response){
      const mediaIdStr = data.media_id_string;
      const meta_params = { media_id: mediaIdStr };
  
       T.post('media/metadata/create', meta_params, function (err, data, response) {
  
        if (!err) { 
          const params = { status: status, media_ids: [mediaIdStr] };
  
           T.post('statuses/update', params, function (err, tweet, response) {
  
            console.log('tweet ===>',tweet);
            
            return Promise.resolve(data)
  
          }); // end '/statuses/update'
  
        }else{
          // return Promise.reject(err)
        }
  
      }); // end '/media/metadata/create'
      // return Promise.resolve(data)
      resolve(data);
    });
  })

    }

const twitterServices = {
    twiterImagePost:twiterImagePost,
    twiterStatusPost:twiterStatusPost,
    twiterVideoPost:twiterVideoPost,
    _twitterVideoPub:_twitterVideoPub
  }
  
  module.exports = twitterServices;