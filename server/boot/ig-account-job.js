// 'use strict';
// const Agenda = require('agenda');

// module.exports = (app, cb) => {

//   console.log('ig-account-refresh-job');
//   var conString = "mongodb://localhost:27017/smp_jobs";
//   var agenda = new Agenda({
//     db: {
//       address: conString,
//       collection: 'jobs'
//     }
//   });

//   agenda.define('igaccount', (job, done) => {
//     let Account = app.models.SocialMediaAccount;
//     Account.find( function (err, result) {
//       if (err) {
//         console.error(err);
//         done(err);
//       } else {
//         //console.log(result);
//          for(let i in result){
//           //console.log(result[i].id);
//           let account = result[i];
//           if(account.lengthySession){
//             try {
//               let refToken =   account.instaFetchBusinessPages(account.id);
//               console.log(refToken);
//             } catch (error) {
//               console.log('IG Account error , account id = ', account.id, ' error =>' ,error);
//             }
//           }
//         }
//         done(result);
//       }
//     });
//   });

//   agenda.on('ready', () => {
//     agenda.start();
//     // agenda.schedule('in 1 seconds', 'count token');
//     agenda.every('30 minutes', 'igaccount');

//   });
//   agenda.processEvery('30 minutes');

//   cb();
// }
