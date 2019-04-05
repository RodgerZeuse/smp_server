'use strict';
const Agenda = require('agenda');

module.exports = (app, cb) => {

  console.log('account-refresh-job');
  var conString = "mongodb://yamin:yamin123@ds133086.mlab.com:33086/smp_jobs";
  var agenda = new Agenda({
    db: {
      address: conString,
      collection: 'jobs'
    }
  });

  

  agenda.define('count token', (job, done) => {
    let Account = app.models.SocialMediaAccount;
    Account.find( function (err, result) {
      if (err) {
        console.error(err);
        done(err);
      } else {
        //console.log(result);
         for(let i in result){
          //console.log(result[i].id);
          let account = result[i];
          if(account.lengthySession){
            if(account.type == 'FB' && account.state == 'connected'){
              try {
                // let refTokenig =   account.instaRefreshToken1(account.id);
                let refTokenfb =   account.refreshTokenfb(account.id);
                
                console.log('refresh token job ===> ',refTokenfb);           
                account.pages();   
            } catch (error) {
              console.log('AccountRefreshJob error , account id = ', account.id, ' error =>' ,error);
            }
            }else if(account.type == 'IG' && account.state == 'connected'){
              try {
                let refTokenig =   account.instaRefreshToken1(account.id);

                console.log('refresh token job ===> ',refTokenig);              
            } catch (error) {
              console.log('AccountRefreshJob error , account id = ', account.id, ' error =>' ,error);
            }
            }else{
              console.log(account.type);
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
    agenda.every('15 minutes', 'count token');
   
  });
  agenda.processEvery('15 minutes');

  cb();
}