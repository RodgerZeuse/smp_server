// 'use strict';
// const Agenda = require('agenda');
// var jobServices = require('../../server/boot/jobsService');
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://yamin:yamin123@ds133086.mlab.com:33086/smp_jobs';
// const dbName = 'smp_jobs';
// var app = require('../../server/server');

// module.exports = (app, cb) => {

//   console.log('missed jobs');
//   var conString = "mongodb://yamin:yamin123@ds133086.mlab.com:33086/smp_jobs";
//   var agenda = new Agenda({
//     db: {
//       address: conString,
//       collection: 'jobs'
//     }
//   });

  

//   agenda.define('missed_jobs', (job, done) => {


//   let getJobs = async function(){
//     try {
//         app.models.Campaign.find({where:{or:[{"state":"Scheduled"},{"state":"Post Now"}]}},function(err,campaigns){
//             if(err){
//                 console.log(err);
//             }
//             console.log(campaigns.length);
//             campaigns.forEach(function(camp) {
                
//                 let campaignId = camp.id;
//                 console.log(campaignId)
//                 var datetime = new Date();
//                 console.log(datetime);

               

//                 // const jobs = await  MongoClient.connect(url,{ useNewUrlParser: true });
//                 // console.log(jobs)
//                 // let db =  jobs.db('smp_jobs');
            
//                 //     const res =  await db.collection("jobs").find({$and:[{"name":new RegExp(campaignId)},{"nextRunAt":{$lt:datetime}},{"failReason":null},{"lastRunAt":null}]}).toArray(function(err, ress){
//                 //     console.log(ress);
//                 //     let newDate = new Date(datetime.getTime() + 1*60000);
//                 //     console.log(newDate)
//                 //     for(let i=0; i<ress.length; i++){
//                 //         // console.log(ress[i]._id);
//                 //         // const update =  db.collection("jobs").updateOne({"_id":ress[i]._id},{$set:{"nextRunAt":newDate}},function(err, res){
//                 //         //     if(err){
//                 //         //         throw err
//                 //         //     }else{
//                 //         //         console.log(res)
//                 //         //     }
                            
//                 //         // });
//                 //     }
                    
//                 //     jobs.close();
//                 // });
//             });
//         });
       
//         }catch(err){
//             console.log(err);
           
//         }   
//   }


//   try{
//     getJobs()
//   }catch(err){
//       console.log(err)
//   }

//   done();

//   });
//   agenda.on('ready', () => {
//     agenda.start();
//     // agenda.schedule('in 1 seconds', 'count token');
//     agenda.every('10 seconds', 'missed_jobs');
   

//   });
//   agenda.processEvery('10 seconds');
// 
//   cb();
// }