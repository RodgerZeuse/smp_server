'use strict';
const Agenda = require('agenda');
var youtubeService = require('./youtubeService');
module.exports = (app, cb) => {

  console.log('yt-account-refresh-job');
  var conString = "mongodb://localhost:27017/smp_jobs";
  var agenda = new Agenda({
    db: {
      address: conString,
      collection: 'jobs'
    }
  });

  agenda.define('ytaccount', (job, done) => {
    let Account = app.models.SocialMediaAccount;
    Account.find( function (err, result) {
      // console.log(result);
      if (err) {
        console.error(err);
        done(err);
      } else {
        //console.log(result);
         for(let i in result){
          //console.log(result[i].id);
          let account = result[i];
          
          if(account.type=='YT'){
            try {

              let getchannelsList = async ()=>{
               let channelsList = await youtubeService.getChannels(account.session);
      
              console.log("==============>",channelsList);
              account.channelsList = channelsList;
              account.save();
              }  
              console.log(getchannelsList());
            } catch (error) {
              console.log('YT Account  error , account id = ', account.id, ' error =>' ,error);
            }
          }
        } 
        done(result);
      }
    });
  });


 


  agenda.on('ready', () => {
    agenda.start();
    // agenda.schedule('in 1 seconds', 'count token');
    agenda.every('30 minutes', 'ytaccount');
   

  });
  agenda.processEvery('30 minutes');

  cb();
}