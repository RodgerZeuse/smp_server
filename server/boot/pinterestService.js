'use strict'
var PDK = require('node-pinterest');
var fs = require('fs');


async function createPin(token,boardId,note,link,img){
    // var pinterest = PDK.init('Arc51qwlyW4Btuesu4bs6I4G5h4nFVqmOfeTkapFSMMP0cBSCgpLgDAAAMDWRUjFMXngXhEAAAAA');
     var pinterest = PDK.init(token);
    var image = '/Users/yamin/Documents/workspace/SocialMediaPoster../server/server/local-storage/pics/'+img;
    // image = fs.createReadStream(image);
    // pinterest.api('me/boards').then(function(json) {
    // console.log(json.data[0].id)
    try{
     let pin = await   pinterest.api('pins', {
            method: 'POST',
            body: {
                // board: json.data[0].id, // grab the first board from the previous response
                board:boardId,
                note: note,
                link: link,
                // image_url: 'http://i.kinja-img.com/gawker-media/image/upload/s--4Vp0Ks1S--/1451895062187798055.jpg'
                image_url: 'https://www.travelanddestinations.com/wp-content/uploads/2017/08/Toronto-Skyline-at-Sunset.jpg'
                // image:image
            }
        });
        return Promise.resolve(pin);
    }catch(err){
        return Promise.reject(err);
    }

    // });
    
    }


    



const pinterestServices = {
    createPin:createPin
  }
  
  module.exports = pinterestServices;